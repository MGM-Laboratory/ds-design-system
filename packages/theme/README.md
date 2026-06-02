# `@labmgm/theme`

> `<ThemeProvider>` and `<Surface>` for MGM Laboratory.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Ftheme?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/theme)

Manages the dark-section scope via `data-surface="inverse"`, which [`@labmgm/tokens/tokens.css`](../tokens) already wires up.

```bash
pnpm add @labmgm/theme
```

---

## Setup

```tsx
import '@labmgm/tokens/tokens.css';
import { ThemeProvider } from '@labmgm/theme';

export default function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

## Inverse sections

```tsx
import { Surface } from '@labmgm/theme';

<Surface tone="inverse" as="section" className="py-24">
  <h2 className="text-display-lg">Loud and clear.</h2>
  <p className="text-body text-ink-2">
    Children using contextual tokens flip to light automatically.
  </p>
</Surface>
```

> Use `tone="inverse"` **sparingly** — at most once per long page (`DESIGN_SYSTEM.md` §2.2).

| Tone | Background | Text |
|---|---|---|
| `default` | `#ffffff` | dark ink |
| `muted` | `#f7f7f5` | dark ink |
| `inverse` | `#0e1116` | light ink |

## Hook

```tsx
import { useSurface } from '@labmgm/theme';
const tone = useSurface();   // 'default' | 'muted' | 'inverse'
```

Components rarely need this — prefer plain CSS via the `[data-surface="inverse"]` selector.

## License

MIT © MGM Laboratory
