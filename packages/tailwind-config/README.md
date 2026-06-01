# `@labmgm/tailwind-config`

The official Tailwind CSS preset for MGM Laboratory. Wires every token from `@labmgm/tokens` into Tailwind's `theme.extend`, plus brand-correct keyframes and animations.

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

## What you get

- `text-ink`, `text-ink-2`, `text-ink-3`, `text-ink-4`
- `bg-bg`, `bg-surface`, `bg-surface-muted`, `bg-surface-inverse`
- `bg-brand-blue`, `bg-brand-yellow`, `bg-brand-red`, `bg-brand-green`
- `bg-brand-blue-50`, `bg-brand-yellow-50`, `bg-brand-red-50`, `bg-brand-green-50`
- `border-line`, `border-line-strong`
- `text-display-2xl` … `text-eyebrow` (with line-height, tracking, weight built-in)
- `font-display`, `font-sans`, `font-mono`
- `shadow-1`, `shadow-2`, `shadow-3`, `shadow-focus`
- `rounded`, `rounded-sm`, `rounded-lg`, `rounded-xl`, `rounded-2xl`
- `duration-120` / `200` / `320` / `520` / `800`
- `ease-out-soft`, `ease-in-out-soft`, `ease-spring`
- `max-w-prose`, `max-w-container`, `max-w-container-wide`
- `animate-fade-in`, `animate-fade-up`, `animate-scale-in`, `animate-slide-in-*`, `animate-shimmer`, `animate-spin`

## Dark sections

`darkMode` is configured as `[data-surface="inverse"]`. Put `data-surface="inverse"` on any container to flip surfaces:

```tsx
<section data-surface="inverse" className="bg-bg text-ink">
  {/* renders white text on near-black */}
</section>
```
