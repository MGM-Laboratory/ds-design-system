# Contributing to `@labmgm/*`

Thanks for helping build the MGM Laboratory design system. This monorepo uses **pnpm**, **Turborepo**, and **Changesets**.

## Setup

```bash
nvm use            # Node 20
pnpm install
pnpm build         # initial build to populate dist/ for inter-package linking
```

## Workflow

1. Create a feature branch off `main`.
2. Make your changes in the relevant `packages/<name>` directory.
3. Add a changeset describing your change:
   ```bash
   pnpm changeset
   ```
   Pick which packages changed, choose the bump (patch / minor / major), and write a one-line summary.
4. Run the gauntlet locally:
   ```bash
   pnpm lint typecheck test build
   ```
5. Push your branch and open a PR. CI will run the same checks plus a canary publish.

## Adding a new package

```bash
mkdir packages/<name> && cd packages/<name>
# scaffold package.json, tsconfig.json, tsup.config.ts, src/index.ts
```

Use an existing package as a template (`packages/utils` is the simplest).

## Coding standards

- TypeScript strict mode — no `any`, no implicit returns.
- Components: `forwardRef`, CVA variants, `asChild` slot pattern, full ARIA.
- Use MGM tokens — `text-ink`, `bg-brand-blue`, `shadow-2`, `rounded-lg` — never raw Tailwind colors.
- Write a story for every component variant. No story → no merge.
- Write a unit test for every component. Coverage gate is 80% on `@labmgm/react`.
- Stroke icons at 2.25, never 2.0.

## Release

Releases are automated. Merging a PR with a changeset triggers a "Version Packages" PR. Merging that PR publishes the affected packages to npm under `@labmgm`.

Canary versions are published from every PR with the `@canary` tag so you can install in-progress work:

```bash
pnpm add @labmgm/react@canary
```
