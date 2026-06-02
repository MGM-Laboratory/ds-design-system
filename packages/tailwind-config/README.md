# `@labmgm/tailwind-config`

> Tailwind CSS preset wiring every MGM Laboratory design token.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Ftailwind-config?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/tailwind-config)

```bash
pnpm add -D @labmgm/tailwind-config tailwindcss
```

```ts
// tailwind.config.ts
import preset from '@labmgm/tailwind-config';

export default {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@labmgm/**/dist/**/*.{js,mjs}',
  ],
};
```

The preset extends Tailwind's `theme.extend` with every MGM token, includes `tailwindcss-animate` as a plugin, and configures `darkMode: ['selector', '[data-surface="inverse"]']` so inverse-section variants work.

---

## What you get

### Colors

- `text-ink`, `text-ink-2`, `text-ink-3`, `text-ink-4`
- `bg-bg`, `bg-surface`, `bg-surface-muted`, `bg-surface-inverse`
- `bg-brand-blue`, `bg-brand-yellow`, `bg-brand-red`, `bg-brand-green`
- `bg-brand-blue-50`, `bg-brand-yellow-50`, `bg-brand-red-50`, `bg-brand-green-50`
- `border-line`, `border-line-strong`
- `ring-focus`

> Contextual tokens (`ink`, `surface`, `line`, `bg`, `focus`) route through CSS variables so they flip inside `[data-surface="inverse"]`. **Brand colors stay literal.**

### Typography

- Sizes (tuple-format, font-weight + line-height + tracking bundled): `text-display-2xl`, `text-display-xl`, `text-display-lg`, `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-body-lg`, `text-body`, `text-body-sm`, `text-caption`, `text-mono`, `text-eyebrow`
- Families: `font-display`, `font-sans`, `font-mono`

### Elevation & shape

- `shadow-1`, `shadow-2`, `shadow-3`, `shadow-focus`
- `rounded` (12px default), `rounded-sm` (8px), `rounded-lg` (20px), `rounded-xl` (28px), `rounded-2xl` (32px), `rounded-full`

### Motion

- `duration-120` / `duration-200` / `duration-320` / `duration-520` / `duration-800`
- `ease-out-soft`, `ease-in-out-soft`, `ease-spring`
- `animate-fade-in`, `animate-fade-up`, `animate-scale-in`, `animate-slide-in-{right,left,up,down}`, `animate-shimmer`, `animate-spin`

### Layout

- `max-w-prose` (640px), `max-w-container` (1200px), `max-w-container-wide` (1360px)

---

## Dark sections

```tsx
<section data-surface="inverse" className="bg-surface-inverse">
  <h2 className="text-display-lg">Inverse section.</h2>
  <p className="text-body text-ink-2">
    Children using contextual tokens flip to light automatically.
  </p>
</section>
```

Or use the higher-level `<Surface tone="inverse">` from [`@labmgm/theme`](../theme).

---

## See also

- [`@labmgm/tokens`](../tokens) — source of truth for the values
- [`@labmgm/utils`](../utils) — `cn()` knows about every custom token in this preset
- [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md)

## License

MIT © MGM Laboratory
