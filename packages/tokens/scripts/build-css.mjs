import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');

mkdirSync(distDir, { recursive: true });

const tokensModulePath = resolve(distDir, 'index.js');
const { tokens } = await import(`file://${tokensModulePath}`);

function cssVar(prefix, key, value) {
  return `  --${prefix}${key}: ${value};`;
}

function buildCss() {
  const lines = [
    '/**',
    ' * @labmgm/tokens — generated CSS custom properties.',
    ' * Do not edit by hand. Source: packages/tokens/src/*.',
    ' */',
    '',
    ':root {',
    '  /* Surfaces & brand */',
  ];

  for (const [key, value] of Object.entries(tokens.colors)) {
    lines.push(cssVar('', key, value));
  }

  lines.push('', '  /* Shadows */');
  for (const [key, value] of Object.entries(tokens.shadows)) {
    lines.push(cssVar('shadow-', key, value));
  }

  lines.push('', '  /* Radii */');
  for (const [key, value] of Object.entries(tokens.radii)) {
    lines.push(cssVar('radius-', key, value));
  }

  lines.push('', '  /* Motion — durations */');
  for (const [key, value] of Object.entries(tokens.durations)) {
    lines.push(cssVar('dur-', key, value));
  }
  lines.push('', '  /* Motion — easings */');
  for (const [key, value] of Object.entries(tokens.easings)) {
    lines.push(cssVar('ease-', key, value));
  }

  lines.push('', '  /* Fonts */');
  lines.push(`  --font-display: ${tokens.fontFamilies.display.join(', ')};`);
  lines.push(`  --font-sans: ${tokens.fontFamilies.sans.join(', ')};`);
  lines.push(`  --font-mono: ${tokens.fontFamilies.mono.join(', ')};`);

  lines.push('', '  /* Max-widths */');
  for (const [key, value] of Object.entries(tokens.maxWidths)) {
    lines.push(cssVar('max-', key, value));
  }

  lines.push('}', '');

  // Inverse surface scope
  lines.push('[data-surface="inverse"] {');
  lines.push('  --bg: #0e1116;');
  lines.push('  --surface: #0e1116;');
  lines.push('  --surface-muted: #1a1d24;');
  lines.push('  --ink: #ffffff;');
  lines.push('  --ink-2: #cbd0d8;');
  lines.push('  --ink-3: #9aa1ad;');
  lines.push('  --ink-4: #6b7280;');
  lines.push('  --line: #2a2e36;');
  lines.push('  --line-strong: #3b4150;');
  lines.push('  color: var(--ink);');
  lines.push('  background-color: var(--bg);');
  lines.push('}', '');

  // Reduced motion (DESIGN_SYSTEM follow-on: never dramatic)
  lines.push('@media (prefers-reduced-motion: reduce) {');
  lines.push('  :root {');
  lines.push('    --dur-1: 0.001ms;');
  lines.push('    --dur-2: 0.001ms;');
  lines.push('    --dur-3: 0.001ms;');
  lines.push('    --dur-4: 0.001ms;');
  lines.push('    --dur-5: 0.001ms;');
  lines.push('  }');
  lines.push('  *, *::before, *::after {');
  lines.push('    animation-duration: 0.001ms !important;');
  lines.push('    animation-iteration-count: 1 !important;');
  lines.push('    transition-duration: 0.001ms !important;');
  lines.push('    scroll-behavior: auto !important;');
  lines.push('  }');
  lines.push('}', '');

  // Focus-visible base
  lines.push(':where(*):focus-visible {');
  lines.push('  outline: 2px solid var(--focus);');
  lines.push('  outline-offset: 2px;');
  lines.push('  border-radius: var(--radius-sm, 8px);');
  lines.push('}', '');

  // Tabular numerals helper
  lines.push('.tabular-nums { font-feature-settings: "tnum"; }');

  return lines.join('\n');
}

writeFileSync(resolve(distDir, 'tokens.css'), buildCss(), 'utf8');
writeFileSync(resolve(distDir, 'tokens.json'), JSON.stringify(tokens, null, 2), 'utf8');

console.log('✓ Built tokens.css and tokens.json');
