# CLAUDE.md

Context for AI assistants (Claude Code, Cursor, etc.) working in this repo.

## What this is

**`@labmgm/*`** — a Turborepo monorepo that publishes 20 npm packages forming the **MGM Laboratory design system**. Current version on npm: **`0.1.2`** across every published package.

```
ds-design-system/
├── apps/
│   ├── docs/         Next.js 15 + MDX docs site
│   ├── playground/   Next.js 15 sandbox app (dogfooding)
│   └── storybook/    Storybook 8 (deployed to GitHub Pages)
└── packages/
    ├── configs/      Shared eslint / tsconfig / prettier / postcss (private)
    ├── tokens, tailwind-config, fonts, utils, theme, hooks, a11y, motion
    ├── brand, patterns, icons
    ├── layout, react
    └── forms, data-table, charts, rich-text, calendar, command, toast
```

## Architecture invariants

1. **No second UI library is required of consumers.** Radix UI, Lucide, Framer Motion, React Hook Form, Zod, Tiptap, TanStack Table are direct dependencies of the relevant `@labmgm/*` package. Only React + React-DOM are peers.
2. **Two styling paths must both work.**
   - Tailwind preset (`@labmgm/tailwind-config`) for consumers who use Tailwind.
   - Pre-compiled CSS (`@labmgm/react/styles.css`, `@labmgm/tokens/tokens.css`) for consumers who don't.
3. **Brand colors are LITERAL.** `bg-brand-blue`, `text-white`, etc. are real hex values. Contextual tokens (`text-ink`, `bg-surface`, `border-line`) route through CSS variables so they flip inside `[data-surface="inverse"]` scopes.
4. **Patterns are decorative, never functional.** Use as accents (corners, dividers, 404, favicons). The pattern is "the spice, not the meal."
5. **Icons: Lucide only.** Stroke width 2.25, sizes 16 / 20 / 24 px. No emoji, flags, 3D icons, or other icon libraries.

## Critical files to know

| File                                                                               | Why it matters                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)                                           | Brand spec. Canonical truth for colors, type, motion, iconography.                                                                                                                                            |
| [`packages/tokens/src/`](./packages/tokens/src)                                    | Source of truth for token values. Edit here, `tokens.css` and `tokens.json` regenerate at build.                                                                                                              |
| [`packages/tailwind-config/src/index.ts`](./packages/tailwind-config/src/index.ts) | Tailwind preset. Contextual tokens use `var(--…)`, brand colors stay literal.                                                                                                                                 |
| [`packages/utils/src/cn.ts`](./packages/utils/src/cn.ts)                           | `cn()` uses `extendTailwindMerge()` with MGM custom tokens registered (font-size, rounded, shadow, duration, ease). Stock tailwind-merge silently drops `text-white` next to `text-body` — don't revert this. |
| [`packages/tokens/scripts/build-css.mjs`](./packages/tokens/scripts/build-css.mjs) | Generates `tokens.css` + `tokens.json`. The `[data-surface="inverse"]` rule only redefines CSS variables — it does NOT force `color`/`background-color` (that would fight components' own Tailwind classes).  |
| [`.changeset/config.json`](./.changeset/config.json)                               | Changesets config. Independent versioning, public access. Ignore list includes apps + private packages.                                                                                                       |
| [`turbo.json`](./turbo.json)                                                       | Pipeline: `lint` / `typecheck` / `test` / `build`. `build` depends on `^build`.                                                                                                                               |

## Per-component conventions

When adding or editing a primitive in `@labmgm/react`:

- Use `cva()` for variants. Export the variants object (`buttonVariants`, `cardVariants`, …) so consumers can compose.
- Use `forwardRef`. Always.
- Use the `asChild` slot pattern via `@radix-ui/react-slot` for polymorphic rendering.
- Self-contained surfaces (Dialog content, Popover content, Card non-inverse, Alert, Callout, Toast item) set `data-surface="default"` on their root so they reset the scope when nested inside an inverse `<Surface>`.
- Tooltip sets `data-surface="inverse"`.
- Components with **always-light** backgrounds (Toast, Alert, Callout, Card tints, Banner warning, Badge solid-yellow) use **literal hex** for text colors (`text-[#0e1116]`, `text-[#3b4150]`, `text-[#6b7280]`). The variable-routed `text-ink` would flip to white inside an inverse scope and make the text invisible on the light tint.
- Components with **fixed dark/colored** backgrounds (Banner inverse, Button primary, Badge solid-\*, Tooltip) use literal `text-white`.

## Calendar gotcha

`react-day-picker` renders `<td><button></button></td>`. Modifier classes like `selected` / `today` apply to the `<td>`, but the button has its own `color` declaration — CSS `color` inheritance loses to the child's own rule, even with `!important` on the parent. **Always target the inner button** via Tailwind's `[&>button]:` arbitrary selector for these modifiers. See `packages/calendar/src/Calendar.tsx`.

## Build pipeline

Every publishable package uses **tsup** to emit:

- `dist/index.js` (ESM) + `dist/index.cjs` (CJS) + sourcemaps
- `dist/index.d.ts` + `dist/index.d.cts`
- `sideEffects: false` (except `*.css` files)
- Externalized: `react`, `react-dom`, and the framework-specific peer deps

> **Don't change `exports.import` to `.mjs`.** With `"type": "module"`, tsup emits `.js` for ESM. The `exports` map must reference `./dist/index.js` for `import`. Wrong paths were silently shipped in 0.1.1 and broke all consumers.

## Release process

```bash
pnpm changeset                  # describe affected packages + bump type
# commit + push + open PR
# on merge to main: CI opens "chore: version packages" PR
# on merge of that PR: changesets/action publishes to npm
```

- Workflows: `.github/workflows/{ci,release,canary,docs}.yml`
- `NPM_TOKEN` is set as a repo secret.
- npm provenance is disabled for now (no OIDC trusted publisher configured). Re-enable when set up.

## When making changes

- **Always run `pnpm build` (or `pnpm turbo run build --filter=...`) before claiming a fix works.** The local source can lie; the bundled CSS / JS is what consumers get.
- **Verify what's deployed.** GitHub Pages caches assets for 10 minutes. To confirm a fix shipped, fetch the file directly:
  ```bash
  curl -sL https://ds.labmgm.org/assets/preview-<hash>.css | grep '...'
  ```
- **Don't introduce backwards-compat shims.** If a refactor would break the API, bump major (or stay on `0.x` and accept the breakage, documenting it in the changeset).
- **Match the brand spec.** Don't introduce purple, teal, pink, orange, gradients between brand colors, drop shadows on colored fills, or icon families other than Lucide.

## Common pitfalls

| Pitfall                            | Symptom                                                    | Fix                                                                                  |
| ---------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Used default tailwind-merge        | `text-white` silently dropped when paired with `text-body` | `cn()` in `@labmgm/utils` uses `extendTailwindMerge()` with custom tokens registered |
| Stale GitHub Pages cache           | Verified-correct fix appears broken in browser             | Hard refresh (Cmd+Shift+R) or open in incognito                                      |
| Forced `color:` in inverse scope   | Banner/Tooltip/Button dark backgrounds invisible           | The `[data-surface="inverse"]` rule only redefines variables; never forces `color:`  |
| `bg-ink` used for dark backgrounds | Backgrounds flip to white inside inverse scope             | Use `bg-surface-inverse` (literal) instead                                           |
| Cell modifier classes on `<td>`    | Button inside ignores parent's `!important color`          | Target the inner element via `[&>button]:`                                           |

## Useful one-liners

```bash
# Run lint/typecheck/test/build only on changed packages
pnpm turbo run lint typecheck test build --filter='[HEAD^]'

# Inspect a deployed asset
curl -sL https://ds.labmgm.org/index.json | jq '.entries | length'

# Reset tokens.css regeneration
rm packages/tokens/dist/tokens.css && pnpm --filter @labmgm/tokens build

# Sanity check what the cn() utility produces
cd packages/utils && node -e "console.log(require('./dist/index.cjs').cn('text-body','text-white'))"
```

## Open follow-ups

- Configure npm trusted publisher (OIDC) for the `@labmgm` org → re-enable provenance.
- Visual regression via Chromatic on every PR.
- Per-component subpath imports (e.g. `@labmgm/react/Button`) for projects that want strict tree-shaking guarantees.
- BlockNote integration in `@labmgm/rich-text` (matching the atlas reference site).
