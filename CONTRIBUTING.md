# Contributing to `@labmgm/*`

Thanks for helping build the MGM Laboratory design system. This monorepo uses **pnpm**, **Turborepo**, and **Changesets**.

> **TL;DR for experienced contributors**
> ```bash
> nvm use && pnpm install && pnpm build
> git checkout -b feat/my-thing
> # edit code under packages/<name>/src
> pnpm changeset                     # describe what changed
> pnpm turbo run lint typecheck test build --filter='./packages/*'
> git add . && git commit -m "feat: …"
> gh pr create
> ```

---

## 📚 Quick links

- [Code of conduct](#-code-of-conduct)
- [Getting set up](#-getting-set-up)
- [Daily workflow](#-daily-workflow)
- [Coding standards](#-coding-standards)
- [Adding a new component](#-adding-a-new-component)
- [Adding a new package](#-adding-a-new-package)
- [Writing tests](#-writing-tests)
- [Writing stories](#-writing-stories)
- [Release process](#-release-process)
- [Project context for AI assistants](#-project-context-for-ai-assistants)

---

## 🤝 Code of conduct

Be kind, be specific, be patient. No personal attacks, no harassment, no shouting. Disagree about code, not about people. Anyone who consistently makes contributors miserable will be asked to leave.

---

## ⚙️ Getting set up

**Prerequisites:**

- Node **20+** (the repo's `.nvmrc` pins `20`)
- pnpm **9+** (the repo's `package.json` pins `pnpm@9.12.0` via `packageManager`)

```bash
git clone https://github.com/MGM-Laboratory/ds-design-system.git
cd ds-design-system
nvm use                # picks up .nvmrc
pnpm install
pnpm build             # populates dist/ for inter-package linking
```

That's it. You can now:

```bash
pnpm --filter @labmgm/playground dev      # http://localhost:3000  — sandbox
pnpm --filter storybook storybook         # http://localhost:6006 — Storybook
pnpm --filter docs dev                    # http://localhost:3001 — docs site
pnpm dev                                  # watch-mode rebuilds across packages
```

---

## 🔁 Daily workflow

```bash
# 1. branch
git checkout -b feat/<short-name>

# 2. edit in packages/<name>/src — Storybook + playground rebuild on save

# 3. write a changeset (skip only for repo-internal config / docs)
pnpm changeset
#    - choose affected packages
#    - choose patch | minor | major
#    - write a one-line summary in plain prose

# 4. run the gauntlet
pnpm turbo run lint typecheck test build --filter='./packages/*'

# 5. commit, push, open PR
git add . && git commit -m "feat(react): add Stepper variant 'compact'"
git push -u origin feat/<short-name>
gh pr create
```

CI runs **lint / typecheck / test / build** on every PR. A green PR is a mergeable PR.

---

## 🧱 Coding standards

### TypeScript

- **Strict mode**, no `any`, no implicit returns, no unused parameters.
- `import type` for type-only imports (lints will warn).
- `forwardRef` + `displayName` on every component.
- Prop interfaces named `<ComponentName>Props`.
- Discriminated unions over `any | string`.

### Styling

- **Tailwind classes only** in component code. No raw inline `style={…}` except for measured values (positioning math, dynamic sizes).
- **Use MGM tokens.** Yes:
  ```html
  <div class="bg-surface text-ink border border-line rounded-lg shadow-2">
  ```
  No:
  ```html
  <div class="bg-white text-gray-900 border border-gray-200 rounded-2xl shadow-md">
  ```
- **Literal hex for fixed colored backgrounds.** Components like Button primary, Badge solid-blue, Banner inverse, Toast tints, Tooltip — use `text-white` or `text-[#0e1116]` literally. Variable-routed `text-ink` flips inside an inverse scope and breaks contrast.
- **Self-contained surfaces declare scope.** Card (non-inverse), Dialog content, Popover content, Alert, Callout, Toast item set `data-surface="default"` so they reset properly even when nested in an inverse Section. Card inverse and Tooltip set `data-surface="inverse"`.
- **`cn()` from `@labmgm/utils`** for class composition. It's pre-configured with MGM custom tokens — never import `twMerge` directly from `tailwind-merge`.

### Component shape

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@labmgm/utils';

export const myThingVariants = cva(
  'base classes',
  {
    variants: {
      tone: { primary: '…', secondary: '…' },
      size: { sm: '…', md: '…', lg: '…' },
    },
    defaultVariants: { tone: 'primary', size: 'md' },
  },
);

export interface MyThingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myThingVariants> {
  asChild?: boolean;
}

export const MyThing = React.forwardRef<HTMLDivElement, MyThingProps>(function MyThing(
  { asChild, tone, size, className, ...rest },
  ref,
) {
  const Comp = asChild ? Slot : 'div';
  return <Comp ref={ref} className={cn(myThingVariants({ tone, size }), className)} {...rest} />;
});
```

### Icons

- Lucide only (`lucide-react` for React, `@labmgm/icons` for consumer-facing).
- Stroke width **2.25** (heavier than Lucide's default 2).
- Sizes: **16 / 20 / 24** px. No arbitrary values.
- `currentColor` only (inherit from text), except brand-color accent moments.

### Accessibility

- Build on Radix UI primitives when possible — they handle ARIA.
- `aria-label`, `aria-describedby`, `aria-invalid`, `aria-busy` where appropriate.
- Focus rings on `:focus-visible`, never `:focus`.
- Honor `prefers-reduced-motion` (the global rule in `tokens.css` handles this for animations; for JS-driven motion use `useReducedMotion` from `@labmgm/hooks`).
- Don't introduce color-only signaling — pair color with an icon or label.

---

## 🧩 Adding a new component

1. Pick a package: a layout primitive → `@labmgm/layout`; a form primitive → `@labmgm/forms`; everything else → `@labmgm/react`.

2. Create the file:
   ```
   packages/react/src/MyThing/MyThing.tsx
   ```

3. Implement it (see the [Component shape](#component-shape) template above).

4. Export from `packages/<pkg>/src/index.ts`.

5. Add a Storybook story:
   ```
   apps/storybook/stories/MyThing.stories.tsx
   ```
   Stories: a default, every variant, an interactive controls example, and (if applicable) an `inverse` scope test.

6. Add tests if it has logic:
   ```
   packages/react/src/MyThing/MyThing.test.tsx
   ```

7. Add a changeset:
   ```bash
   pnpm changeset
   ```

8. Open the PR.

---

## 📦 Adding a new package

```bash
mkdir packages/my-pkg && cd packages/my-pkg
# scaffold: package.json, tsconfig.json, tsup.config.ts, eslint.config.js, src/index.ts, README.md
```

Use `packages/utils` as the simplest template, or `packages/forms` for a more complex peer-deps + subpath-exports template.

The `package.json` checklist:

- [ ] `name`: `@labmgm/<short-name>`
- [ ] `version`: `0.1.0` (Changesets will manage from here)
- [ ] `description`: a real sentence
- [ ] `repository.directory`: `packages/<short-name>`
- [ ] `type: "module"`
- [ ] `main`, `module`, `types`, `exports` map (CJS, ESM, types)
- [ ] `sideEffects: false` (or `["*.css"]` if you ship CSS)
- [ ] `files: ["dist", "README.md"]` (plus any static assets)
- [ ] `scripts`: build, dev, lint, typecheck, test, clean
- [ ] `dependencies`, `peerDependencies`, `devDependencies`
- [ ] `publishConfig: { "access": "public" }`

Don't forget to add the new package to `pnpm-workspace.yaml` — actually you don't need to; `packages/*` is already a glob there.

---

## 🧪 Writing tests

- Tests live next to the source: `MyThing.test.tsx`.
- **Vitest + @testing-library/react** for components.
- Test prop behaviors, not implementation details.
- For visual / interaction stuff, prefer Storybook play functions over assertion-heavy unit tests.

```tsx
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    expect(getByRole('button')).toHaveTextContent('Click me');
  });
});
```

The coverage gate is **80% on `@labmgm/react`** (loosely enforced — focus on logic and behavior, not type coverage).

---

## 📖 Writing stories

We use Storybook 8 with the Vite builder.

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyThing } from '@labmgm/react';

const meta = {
  title: 'Components/MyThing',
  component: MyThing,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof MyThing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Hello' } };
export const Secondary: Story = { args: { tone: 'secondary' } };

// At least one story showing every variant
export const AllTones: Story = {
  render: () => (
    <div className="flex gap-2">
      <MyThing tone="primary">Primary</MyThing>
      <MyThing tone="secondary">Secondary</MyThing>
    </div>
  ),
};
```

The toolbar's surface switcher already lets reviewers see your component on default / muted / inverse without extra work. Make sure your component flips correctly there.

---

## 🚢 Release process

Releases are automated via **Changesets**.

1. Every PR that touches a publishable package **must include a changeset** (the bot will check on PR).
2. When the PR merges to `main`, the **Release** workflow opens (or updates) a `chore: version packages` PR with all pending bumps.
3. Merging that PR triggers `changeset publish` — packages go live on npm under `@labmgm`.
4. The **Docs** workflow rebuilds and redeploys Storybook to GitHub Pages.

### Manual canary previews

PRs with the `release-canary` label publish a snapshot with the `@canary` dist-tag so reviewers can install in-progress work:

```bash
pnpm add @labmgm/react@canary
```

### Versioning policy (while we're on `0.x`)

- Patch: bug fixes, internal refactors that don't change public API.
- Minor: new components, new variants, new props (additive).
- Major: only when we decide to cut `1.0`.

Breaking changes inside `0.x` go in **minor** with a `BREAKING:` callout in the changeset.

---

## 🤖 Project context for AI assistants

If you're using Claude Code, Cursor, or another AI assistant: open [`CLAUDE.md`](./CLAUDE.md) at the start of your session. It documents:

- Architecture invariants the assistant needs to respect
- The `cn()` / tailwind-merge gotcha that bit us once
- Why the `[data-surface="inverse"]` rule is intentionally restricted
- The Calendar `<td>` vs `<button>` cascade trap
- The release workflow

Treat `DESIGN_SYSTEM.md` as canonical truth for the brand. Don't paraphrase — link.

---

## Questions?

Open an [issue](https://github.com/MGM-Laboratory/ds-design-system/issues) or start a discussion. Thanks again for contributing 🙏
