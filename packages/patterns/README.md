# `@labmgm/patterns`

> The 80-tile MGM Laboratory pattern catalog + a deterministic, no-adjacent-repeat grid composer.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fpatterns?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/patterns)

> "The pattern is the **spice**, not the meal." — [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md) §1

```bash
pnpm add @labmgm/patterns
```

> [Storybook (Brand / Patterns)](https://ds.labmgm.org/?path=/docs/brand-patterns--docs) · [SVG catalog](./svg)

---

## Quick start

```tsx
import {
  PatternGrid,
  PatternCorner,
  PatternBanner,
  PatternStrip,
  PatternDado,
  PatternPyramid,
  PatternTriangle,
} from '@labmgm/patterns';

<PatternGrid rows={3} cols={3} seed="hero" />
<PatternGrid rows={2} cols={6} colors={['blue', 'yellow']} seed="banner" />
<PatternCorner placement="top-right" size={3} />
<PatternBanner rows={2} cols={6} />
<PatternStrip tiles={12} tileSize={48} />
<PatternDado tiles={60} />
<PatternPyramid height={5} tileSize={48} />
<PatternTriangle direction="down" height={5} />
```

---

## Catalog

**10 shapes** × **8 color schemes** = 80 SVG tiles.

| Shape | |
|---|---|
| `arcs` · `circle` · `clover` · `domes` · `fans` · `leaves` · `plus` · `quads` · `square` · `x` | |

| Scheme | |
|---|---|
| `blue-on-white` · `green-on-white` · `red-on-white` · `yellow-on-white` | colored shape on white |
| `white-on-blue` · `white-on-green` · `white-on-red` · `white-on-yellow` | white shape on colored fill |

Each tile is **100 × 100 px** at viewBox, tiles seamlessly when repeated, and works at any rendered size.

### Catalog access

```ts
import { CATALOG, SHAPES, COLORS, SCHEMES, getPatternTile, getPatternSvg, randomPattern } from '@labmgm/patterns';

CATALOG['circle-blue-on-white'];           // { shape, scheme, fg, bg, svg }
getPatternTile('circle', 'blue-on-white'); // same entry by lookup
getPatternSvg('plus', 'white-on-red');     // raw SVG string
randomPattern();                            // any of the 80
```

---

## Components

| Component | Use case |
|---|---|
| `<PatternGrid rows cols seed>` | Compose any N×M grid. Deterministic via `seed`. No adjacent repeats of shape or color. |
| `<PatternTile shape scheme>` | A single 100×100 tile. |
| `<PatternCorner placement size>` | 2×2 / 3×3 / 4×4 block anchored absolutely to a corner of its parent. |
| `<PatternBanner rows cols>` | Wide banner block (default 2×6). |
| `<PatternStrip tiles tileSize>` | Single-row horizontal strip. |
| `<PatternDado tiles tileSize>` | Thin solid-color Bauhaus strip for footer dividers. |
| `<PatternPyramid height>` | Stepped pyramid — row 1 has 1 tile, row 2 has 2, etc. |
| `<PatternTriangle direction>` | Pyramid with `up` / `down` orientation. |

All compositions are **decorative** (`role="presentation"`, `aria-hidden="true"`).

### Determinism

`<PatternGrid>` is seedable so SSR and client renders produce identical output. Same `seed` → same grid, always.

```tsx
<PatternGrid rows={3} cols={3} seed="hero" />        // always the same
<PatternGrid rows={3} cols={3} seed={Date.now()} />  // different on each render
```

---

## Suggested compositions

```tsx
// 1. Marketing hero accent
<PatternBanner rows={2} cols={6} tileSize={56} seed="hero" />

// 2. Footer divider
<PatternDado tiles={120} />

// 3. Empty state accent
<ShapeSignature rows={2} cols={2} tileSize={28} seed="empty" />   // from @labmgm/brand

// 4. 404 page
<PatternGrid rows={6} cols={6} tileSize={64} seed="404" />

// 5. Corner accent on a card
<div className="relative">
  <PatternCorner placement="top-right" size={2} />
  <Card>…</Card>
</div>
```

### What to avoid

- ❌ Wallpapering whole sections
- ❌ Placing text inside a tile
- ❌ Recoloring tiles outside the 8-scheme catalog
- ❌ Animating individual tiles

---

## See also

- [`@labmgm/brand`](../brand) — `<ShapeSignature>`, `<FooterStrip>` (uses `<PatternDado>`)
- [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md) — brand philosophy

## License

MIT © MGM Laboratory
