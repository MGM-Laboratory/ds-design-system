# `@labmgm/theme`

Theme provider and `<Surface>` primitive for MGM Laboratory. Manages the inverse/dark-section scope via `data-surface="inverse"`, which `@labmgm/tokens/tokens.css` already wires up.

```bash
pnpm add @labmgm/theme
```

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
  {/* near-black background, white text, brand colors unchanged */}
</Surface>
```

> Use `tone="inverse"` sparingly — at most once per long page (DESIGN_SYSTEM.md §2.2).

## Hooks

```tsx
import { useSurface } from '@labmgm/theme';
const tone = useSurface(); // 'default' | 'muted' | 'inverse'
```
