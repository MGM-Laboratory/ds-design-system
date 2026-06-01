# `@labmgm/patterns`

The 80-tile MGM Laboratory pattern catalog — 10 shapes × 8 color schemes — plus a deterministic, no-adjacent-repeat grid composer.

> The pattern is the spice, not the meal. — DESIGN_SYSTEM.md §1

```bash
pnpm add @labmgm/patterns
```

## Quick start

```tsx
import { PatternGrid, PatternCorner, PatternDado } from '@labmgm/patterns';

<PatternGrid rows={3} cols={3} seed="hero" />
<PatternGrid rows={2} cols={6} colors={['blue', 'yellow']} seed="banner" />
<PatternCorner placement="top-right" size={3} />
<PatternDado tiles={60} />
```

## Catalog

10 shapes: `arcs`, `circle`, `clover`, `domes`, `fans`, `leaves`, `plus`, `quads`, `square`, `x`
8 schemes: `blue-on-white`, `green-on-white`, `red-on-white`, `yellow-on-white`, `white-on-blue`, `white-on-green`, `white-on-red`, `white-on-yellow`

```tsx
import { CATALOG, getPatternSvg } from '@labmgm/patterns';

CATALOG['circle-blue-on-white'];
getPatternSvg('plus', 'white-on-red');
```

## Components

| Component | Description |
|---|---|
| `<PatternGrid>` | Compose any N×M grid (deterministic via `seed`). No adjacent repeats of shape or color. |
| `<PatternTile>` | A single 100×100 tile. |
| `<PatternCorner>` | 2×2 / 3×3 / 4×4 block anchored absolutely to a corner. |
| `<PatternBanner>` | Wide 2×6 banner block. |
| `<PatternStrip>` | Single-row horizontal strip. |
| `<PatternDado>` | Thin solid-color strip for footer dividers. |
| `<PatternPyramid>` | Stepped pyramid of tiles. |
| `<PatternTriangle>` | Pyramid with `direction="up" \| "down"`. |

All compositions are decorative (`role="presentation"`, `aria-hidden="true"`) and seedable.
