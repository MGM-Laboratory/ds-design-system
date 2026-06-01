# `@labmgm/icons`

Lucide icons, MGM-brand-correct out of the box: stroke 2.25, round line caps, 20px default size.

```bash
pnpm add @labmgm/icons
```

## Use individual icons

```tsx
import { ArrowRight, Check, Search } from '@labmgm/icons';

<ArrowRight />               {/* 20px, stroke 2.25, currentColor */}
<Check size={16} />
<Search size={24} className="text-brand-blue" />
```

> Every Lucide icon is re-exported. See [lucide.dev/icons](https://lucide.dev/icons) for the full catalog.

## Use the `<Icon>` wrapper

For data-driven cases where the icon comes from props or config:

```tsx
import { Icon } from '@labmgm/icons';
import { Sparkles } from '@labmgm/icons';

<Icon icon={Sparkles} size="lg" />
```

## Size tokens

| Token | px | Use |
|---|---|---|
| `sm` | 16 | dense UI |
| `md` | 20 | **default**, product UI |
| `lg` | 24 | marketing, hero |

## Brand rules (DESIGN_SYSTEM.md §4)

- Stroke-only — no filled icons.
- 2.25 stroke width — heavier than Lucide's default 2.
- 16 / 20 / 24 px sizes only — no arbitrary values.
- `currentColor` — inherit from text color. Brand-colored icons appear only in accent moments.
- No emoji, flags, or 3D icons.
