# `@labmgm/tokens`

> Single source of truth for MGM Laboratory design tokens.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Ftokens?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/tokens)

Tokens mirror [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md) exactly. Three surfaces:

- **CSS variables** for runtime styling
- **TypeScript objects** for programmatic access
- **JSON** for design tools / codegen

```bash
pnpm add @labmgm/tokens
```

---

## CSS

```ts
import '@labmgm/tokens/tokens.css';
```

Sets every CSS custom property on `:root` (colors, type, shadows, radii, motion), wires `[data-surface="inverse"]` and `[data-surface="default"]` for surface scoping, applies `prefers-reduced-motion`, and adds a baseline focus-visible ring.

Available variables:

```css
--bg                 #ffffff
--surface            #ffffff
--surface-muted      #f7f7f5
--surface-inverse    #0e1116
--brand-blue         #3a6dc5
--brand-yellow       #f7bf33
--brand-red          #f94141
--brand-green        #0f8657
--brand-{color}-50   tints (8% over white)
--ink                #0e1116    /* primary text */
--ink-2              #3b4150
--ink-3              #6b7280
--ink-4              #9aa1ad
--line               #ececea
--line-strong        #d8d8d2
--focus              #3a6dc5
--shadow-1/2/3       soft elevation
--radius-sm/md/lg/xl/2xl/full
--dur-1/2/3/4/5      120/200/320/520/800ms
--ease-out-soft/in-out-soft/spring
--font-display/sans/mono
--max-prose/container/container-wide
```

Inside `[data-surface="inverse"]`, the `--bg / --surface / --surface-muted / --ink-* / --line-*` variables flip to their dark counterparts. **Brand colors stay constant.**

---

## TypeScript

```ts
import { tokens, colors, typography, shadows, radii, durations, easings } from '@labmgm/tokens';

colors['brand-blue'];          // '#3a6dc5'
typography['display-2xl'];     // { fontSize: '4.5rem', lineHeight: '1.02', ... }
tokens.shadows['2'];           // '0 6px 24px -8px rgba(...)'
tokens.radii.md;               // '12px'
```

Every token is `as const` — TypeScript narrows the type for downstream usage.

---

## JSON

```ts
import tokens from '@labmgm/tokens/tokens.json' assert { type: 'json' };
```

Useful for design-tool exporters (Figma, Style Dictionary), codegen, or non-JS consumers.

---

## Surface scoping

Wrap any container in `data-surface="inverse"` to flip surfaces, ink, and lines to the dark variant. Brand colors stay constant.

```html
<section data-surface="inverse">
  <h2 class="text-display-lg">High-contrast section.</h2>
  <p class="text-body text-ink-2">Children using text-ink flip to white automatically.</p>
</section>
```

For self-contained light surfaces (Card, Dialog, Popover) nested inside an inverse section, use `data-surface="default"` to reset back to light. The component primitives in `@labmgm/react` do this automatically.

---

## See also

- [`@labmgm/tailwind-config`](../tailwind-config) — Tailwind preset built from these tokens
- [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md) — the brand bible
- [`@labmgm/theme`](../theme) — `<Surface>` component

## License

MIT © MGM Laboratory
