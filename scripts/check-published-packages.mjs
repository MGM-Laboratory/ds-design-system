import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import ts from 'typescript';

const root = process.cwd();
const packagesDir = path.join(root, 'packages');
const runtimeExtensions = ['.js', '.cjs', '.mjs', '.json'];
const clientPackages = new Set([
  '@labmgm/a11y',
  '@labmgm/calendar',
  '@labmgm/charts',
  '@labmgm/command',
  '@labmgm/data-table',
  '@labmgm/forms',
  '@labmgm/hooks',
  '@labmgm/motion',
  '@labmgm/patterns',
  '@labmgm/react',
  '@labmgm/rich-text',
  '@labmgm/theme',
  '@labmgm/toast',
]);

const issues = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function packageName(specifier) {
  return specifier.startsWith('@')
    ? specifier.split('/').slice(0, 2).join('/')
    : specifier.split('/')[0];
}

function collectExportTargets(value, targets = []) {
  if (typeof value === 'string') {
    targets.push(value);
  } else if (value && typeof value === 'object') {
    for (const nestedValue of Object.values(value)) {
      collectExportTargets(nestedValue, targets);
    }
  }
  return targets;
}

function runtimeSpecifiers(source) {
  const expression = /(?:import\s+(?:[^'";]+?\s+from\s+)?|export\s+(?:[^'";]+?\s+from\s+)?|require\s*\(|import\s*\()\s*['"]([^'"]+)['"]/g;
  return [...source.matchAll(expression)].map((match) => match[1]);
}

function declarationSpecifiers(sourceFile) {
  const specifiers = [];

  function visit(node) {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      specifiers.push(node.moduleSpecifier.text);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return specifiers;
}

function reportPackageImport(packageInfo, specifier, file) {
  if (specifier.startsWith('.') || specifier.startsWith('node:')) {
    if (!specifier.startsWith('.')) return;

    const resolved = path.resolve(path.dirname(file), specifier);
    const exists = [resolved, ...runtimeExtensions.map((extension) => `${resolved}${extension}`)].some(
      fs.existsSync,
    );
    if (!exists) {
      issues.push(`${packageInfo.name}: unresolved relative import ${specifier} in ${path.relative(root, file)}`);
    }
    return;
  }

  if (specifier.startsWith('/') || /^[A-Za-z]:[\\/]/.test(specifier)) {
    issues.push(`${packageInfo.name}: absolute filesystem import ${specifier} in ${path.relative(root, file)}`);
    return;
  }

  const importedPackage = packageName(specifier);
  if (!packageInfo.declaredDependencies.has(importedPackage)) {
    issues.push(
      `${packageInfo.name}: ${importedPackage} is imported by ${path.relative(root, file)} but is not declared`,
    );
  }
}

const packageDirectories = fs
  .readdirSync(packagesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(packagesDir, entry.name))
  .filter((directory) => fs.existsSync(path.join(directory, 'package.json')));

for (const directory of packageDirectories) {
  const manifest = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf8'));
  const dist = path.join(directory, 'dist');
  if (!manifest.exports || !fs.existsSync(dist)) continue;

  const packageInfo = {
    name: manifest.name,
    declaredDependencies: new Set([
      ...Object.keys(manifest.dependencies ?? {}),
      ...Object.keys(manifest.optionalDependencies ?? {}),
      ...Object.keys(manifest.peerDependencies ?? {}),
    ]),
  };

  for (const target of collectExportTargets(manifest.exports)) {
    if (!target.startsWith('./')) continue;
    const staticPrefix = target.split('*')[0];
    if (!fs.existsSync(path.join(directory, staticPrefix))) {
      issues.push(`${manifest.name}: package export target is missing: ${target}`);
    }
  }

  const distFiles = walk(dist);
  for (const file of distFiles.filter((entry) => /\.(?:js|cjs|mjs)$/.test(entry))) {
    for (const specifier of runtimeSpecifiers(fs.readFileSync(file, 'utf8'))) {
      reportPackageImport(packageInfo, specifier, file);
    }
  }

  for (const file of distFiles.filter((entry) => /\.d\.(?:ts|cts|mts)$/.test(entry))) {
    const source = fs.readFileSync(file, 'utf8');
    const declaration = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    for (const diagnostic of declaration.parseDiagnostics) {
      issues.push(
        `${manifest.name}: invalid declaration syntax in ${path.relative(root, file)}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ')}`,
      );
    }
    for (const specifier of declarationSpecifiers(declaration)) {
      reportPackageImport(packageInfo, specifier, file);
    }
  }

  if (clientPackages.has(manifest.name)) {
    const entrypoint = path.join(dist, 'index.js');
    const source = fs.readFileSync(entrypoint, 'utf8');
    if (!source.startsWith("'use client';")) {
      issues.push(`${manifest.name}: dist/index.js must begin with a 'use client' boundary`);
    }
    if (/^export\s+\*\s+from/m.test(source)) {
      issues.push(`${manifest.name}: client entrypoint cannot use export *`);
    }
  }
}

const iconsEntrypoint = path.join(packagesDir, 'icons', 'dist', 'index.js');
const iconsLucideEntrypoint = path.join(packagesDir, 'icons', 'dist', 'lucide.js');
const iconsEntrypointSource = fs.readFileSync(iconsEntrypoint, 'utf8');
const iconsLucideSource = fs.readFileSync(iconsLucideEntrypoint, 'utf8');
if (!iconsEntrypointSource.includes('export * from "./lucide.js";')) {
  issues.push('@labmgm/icons: icon exports must remain native ESM re-exports');
}
if (!iconsLucideSource.includes('export * from "lucide-react";') || iconsLucideSource.includes('__reExport')) {
  issues.push('@labmgm/icons: lucide exports are not statically analyzable');
}

for (const packageName of ['calendar', 'command', 'data-table', 'forms', 'icons', 'react', 'rich-text']) {
  const manifest = JSON.parse(fs.readFileSync(path.join(packagesDir, packageName, 'package.json'), 'utf8'));
  if (!/^\^1\./.test(manifest.dependencies?.['lucide-react'] ?? '')) {
    issues.push(`@labmgm/${packageName}: Lucide 1 is required for React 19-compatible declarations`);
  }
}

const nextFontsEntrypoint = path.join(packagesDir, 'fonts', 'dist', 'next.js');
const nextFontsSource = fs.readFileSync(nextFontsEntrypoint, 'utf8');
for (const fontName of ['bricolageGrotesque', 'geist', 'geistMono']) {
  if (!new RegExp(`\\bconst ${fontName}\\s*=`).test(nextFontsSource)) {
    issues.push(`@labmgm/fonts: ${fontName} must be initialized with const for next/font`);
  }
}

const formsManifest = JSON.parse(fs.readFileSync(path.join(packagesDir, 'forms', 'package.json'), 'utf8'));
const formsIndexSource = fs.readFileSync(path.join(packagesDir, 'forms', 'dist', 'index.js'), 'utf8');
const formsDeclarationSource = fs.readFileSync(path.join(packagesDir, 'forms', 'dist', 'index.d.ts'), 'utf8');
const formsSchemasSource = fs.readFileSync(path.join(packagesDir, 'forms', 'dist', 'schemas.js'), 'utf8');
const formsZodPeer = formsManifest.peerDependencies?.zod ?? '';
if (!/\^3\.25\.0/.test(formsZodPeer) || !/\^4\.0\.0/.test(formsZodPeer)) {
  issues.push('@labmgm/forms: Zod 3.25+ and Zod 4 must remain supported peer dependencies');
}
if (!formsManifest.peerDependencies?.['react-hook-form']) {
  issues.push('@labmgm/forms: react-hook-form must remain a peer dependency');
}
if (formsManifest.dependencies?.zod || formsManifest.dependencies?.['react-hook-form']) {
  issues.push('@labmgm/forms: Zod and react-hook-form must not be bundled as package dependencies');
}
if (!formsIndexSource.includes('from "@hookform/resolvers/zod"')) {
  issues.push('@labmgm/forms: Zod resolver must stay external in the ESM entrypoint');
}
if (!/export\s*\{\s*FormProvider\s*\}\s*from ['"]react-hook-form['"]/.test(formsDeclarationSource)) {
  issues.push('@labmgm/forms: FormProvider must be a direct React Hook Form type re-export');
}
if (!/from ['"]zod['"]/.test(formsSchemasSource)) {
  issues.push('@labmgm/forms: schemas must use the consumer Zod instance');
}

const richTextEntrypoint = path.join(packagesDir, 'rich-text', 'dist', 'index.js');
const richTextSource = fs.readFileSync(richTextEntrypoint, 'utf8');
if (!richTextSource.includes('immediatelyRender = false')) {
  issues.push('@labmgm/rich-text: useMgmEditor must default immediatelyRender to false for SSR');
}

const reactStyles = fs.readFileSync(path.join(packagesDir, 'react', 'dist', 'styles.css'), 'utf8');
if (/(?:^|})\*,::before,::after\{/.test(reactStyles) || /(?:^|})body(?:,|\{)/.test(reactStyles)) {
  issues.push('@labmgm/react: styles.css must not ship a global reset or body styles');
}

const chartsManifest = JSON.parse(fs.readFileSync(path.join(packagesDir, 'charts', 'package.json'), 'utf8'));
if (!/^\^3\./.test(chartsManifest.dependencies?.recharts ?? '')) {
  issues.push('@labmgm/charts: Recharts 3 must remain the supported dependency line');
}

if (issues.length > 0) {
  console.error(`Published package contract check failed:\n\n${issues.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Published package contract check passed for ${packageDirectories.length} packages.`);
}
