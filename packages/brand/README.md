# `@labmgm/brand`

> The MGM Laboratory brand components.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fbrand?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/brand)

```bash
pnpm add @labmgm/brand
```

> [Storybook (Brand)](https://ds.labmgm.org/?path=/docs/brand-logo-wordmark--docs) · [Source](./src)

---

## Components

```tsx
import { Logo, Wordmark, ShapeSignature, FooterStrip } from '@labmgm/brand';

<Logo size={40} label="MGM Laboratory" />
<Wordmark href="/" />
<ShapeSignature rows={2} cols={2} seed="empty-state" />
<FooterStrip tileSize={8} />
```

| Component          | Use                                                                   |
| ------------------ | --------------------------------------------------------------------- |
| `<Logo>`           | The geometric monogram. Fixed brand colors — do not recolor.          |
| `<Wordmark>`       | Logo + "MGM Laboratory" text lockup. Can render as a link via `href`. |
| `<ShapeSignature>` | Small 2×2 (or N×M) pattern accent. Good for empty states.             |
| `<FooterStrip>`    | Thin Bauhaus dado used above page footers.                            |

## Brand-correct usage

- ✅ Logo colors are **fixed** (`#f84040`, `#396cc4`, `#f6be32`, `#44bc8d`, plus the lighter variants). Do not recolor.
- ✅ The wordmark uses **Bricolage Grotesque** at `text-h3` weight 600. Do not substitute.
- ✅ The footer strip is a **thin band** above the footer, not a decorative mid-page element.
- ❌ Don't crop, rotate, or overlay anything on the logo.

See [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md) for the full brand spec.

## License

MIT © MGM Laboratory
