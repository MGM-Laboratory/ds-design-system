# `@labmgm/brand`

The MGM Laboratory brand components — Logo, Wordmark, ShapeSignature, FooterStrip.

```bash
pnpm add @labmgm/brand
```

## Components

```tsx
import { Logo, Wordmark, ShapeSignature, FooterStrip } from '@labmgm/brand';

<Logo size={40} label="MGM Laboratory" />
<Wordmark href="/" />
<ShapeSignature rows={2} cols={2} seed="empty-state" />
<FooterStrip tileSize={8} />
```

## Brand-correct usage

- The logo's brand colors are fixed — do not recolor.
- The wordmark uses **Bricolage Grotesque** at `text-h3` weight 600 (DESIGN_SYSTEM.md §3).
- The footer strip is a thin Bauhaus dado — use it above page footers, not as a decorative band mid-page.
