# `@labmgm/icons`

> Lucide icons, MGM-brand-correct out of the box.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Ficons?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/icons)

Stroke 2.25, round line caps, 20px default size. Every Lucide icon is re-exported with these defaults applied.

```bash
pnpm add @labmgm/icons
```

---

## Use individual icons

```tsx
import { ArrowRight, Check, Search } from '@labmgm/icons';

<ArrowRight />                               {/* 20px, stroke 2.25, currentColor */}
<Check size={16} />
<Search size={24} className="text-brand-blue" />
```

> Browse the full catalog at [lucide.dev/icons](https://lucide.dev/icons). Every name from Lucide is exported here.

## Use the `<Icon>` wrapper

For data-driven cases where the icon component comes from props:

```tsx
import { Icon } from '@labmgm/icons';
import { Sparkles } from 'lucide-react';

<Icon icon={Sparkles} size="lg" />
<Icon icon={Sparkles} size={32} />        // raw pixel value works too
```

## Size tokens

| Token | px | Use |
|---|---|---|
| `sm` | 16 | dense UI (tags, table cells, inline buttons) |
| `md` | 20 | **default** — product UI |
| `lg` | 24 | marketing, hero |

## Brand rules ([`DESIGN_SYSTEM.md` §4](../../DESIGN_SYSTEM.md))

- ✅ Stroke-only
- ✅ 2.25 stroke width (heavier than Lucide's default 2)
- ✅ 16 / 20 / 24 px sizes only — no arbitrary values
- ✅ `currentColor` — inherit from surrounding text; brand-colored icons appear only in accent moments
- ❌ No emoji
- ❌ No flags
- ❌ No 3D icons
- ❌ No mixing filled and stroked icons

## License

MIT © MGM Laboratory
