# `@labmgm/tokens`

Single source of truth for MGM Laboratory design tokens. Mirrors `DESIGN_SYSTEM.md` exactly.

```bash
pnpm add @labmgm/tokens
```

## Use the CSS

```ts
import '@labmgm/tokens/tokens.css';
```

This sets every CSS custom property on `:root` (colors, type, shadows, radii, motion), wires `[data-surface="inverse"]` for dark sections, applies `prefers-reduced-motion`, and adds a baseline focus-visible ring.

## Use the TS objects

```ts
import { tokens, colors, typography } from '@labmgm/tokens';

colors['brand-blue'];         // '#3a6dc5'
typography['display-2xl'];    // { fontSize: '4.5rem', lineHeight: '1.02', ... }
tokens.shadows['2'];          // '0 6px 24px -8px rgba(...)'
```

## Use the JSON (for design tools, codegen, etc.)

```ts
import tokens from '@labmgm/tokens/tokens.json' assert { type: 'json' };
```

## Inverse sections

Wrap any container in `data-surface="inverse"` to flip surfaces, ink, and lines to the dark variant. Brand colors stay constant.

```html
<section data-surface="inverse">
  <!-- white text on near-black background -->
</section>
```
