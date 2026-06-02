# `@labmgm/react`

> The core MGM Laboratory React component library.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Freact?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/react)
[![license](https://img.shields.io/badge/license-MIT-0f8657.svg)](../../LICENSE)

Buttons, cards, dialogs, navigation, feedback, layout — everything you need for a product or marketing surface. Radix UI, Lucide, Framer Motion, Tailwind, and a fully-tokenized theme are bundled — **no second UI library to install**.

```bash
pnpm add @labmgm/react @labmgm/tokens @labmgm/tailwind-config
```

> [Storybook](https://ds.labmgm.org/) · [Source](./src) · [Monorepo root](../..)

---

## Two ways to ship styles

<table>
<tr>
<td><b>A — Tailwind preset</b> (recommended)</td>
<td><b>B — Pre-compiled CSS</b> (no Tailwind needed)</td>
</tr>
<tr>
<td>

```ts
// tailwind.config.ts
import preset from '@labmgm/tailwind-config';

export default {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@labmgm/**/dist/**/*.{js,mjs}',
  ],
};
```

</td>
<td>

```ts
// root layout
import '@labmgm/tokens/tokens.css';
import '@labmgm/react/styles.css';
```

</td>
</tr>
</table>

---

## Quick example

```tsx
import { Container, Section, Stack, Button, Card, CardHeader, CardTitle, CardContent } from '@labmgm/react';

export default function Home() {
  return (
    <Section tone="muted" padding="lg">
      <Container>
        <Stack gap={6}>
          <h1 className="text-display-lg">
            Build the <span className="text-brand-red">loud</span> internet.
          </h1>
          <Card>
            <CardHeader><CardTitle>Out of the box</CardTitle></CardHeader>
            <CardContent>No extra setup.</CardContent>
          </Card>
          <Button size="lg">Get started</Button>
        </Stack>
      </Container>
    </Section>
  );
}
```

---

## Component catalog

> Open the [Storybook](https://ds.labmgm.org/) for live examples of every component and every variant.

| Category | Components |
|---|---|
| **Buttons & actions** | `Button` · `IconButton` · `ButtonGroup` · `ToggleButton` · `ToggleButtonGroup` · `Link` · `Kbd` · `CopyButton` · `BackButton` |
| **Display** | `Card` (+ Header/Title/Description/Content/Footer) · `Badge` · `Tag` · `Chip` · `Avatar` · `AvatarGroup` · `Stat` · `Empty` · `Skeleton` · `Spinner` · `Code` · `CodeBlock` |
| **Overlays** | `Dialog` · `AlertDialog` · `Drawer` · `Popover` · `HoverCard` · `Tooltip` · `DropdownMenu` · `ContextMenu` |
| **Navigation** | `Tabs` · `Accordion` · `Breadcrumb` · `Pagination` · `Stepper` · `Navbar` |
| **Feedback** | `Alert` · `Banner` · `Progress` · `ProgressCircle` · `Callout` |
| **Data display** | `List` · `DescriptionList` · `Timeline` · `Separator` |
| **Media** | `Image` · `Carousel` |
| **Layout** *(from `@labmgm/layout`, re-exported)* | `Container` · `Section` · `Stack` · `VStack` · `HStack` · `Grid` · `Flex` · `Box` · `Center` · `Spacer` · `AspectRatio` · `Divider` |
| **Brand** *(from `@labmgm/brand`, re-exported)* | `Logo` · `Wordmark` · `ShapeSignature` · `FooterStrip` |
| **Theme** *(from `@labmgm/theme`, re-exported)* | `ThemeProvider` · `Surface` · `useSurface` |
| **Patterns** *(from `@labmgm/patterns`, re-exported)* | `PatternGrid` · `PatternTile` · `PatternCorner` · `PatternBanner` · `PatternDado` · `PatternStrip` · `PatternPyramid` · `PatternTriangle` |

Specialized packages live separately:

- [`@labmgm/forms`](../forms) — Input, Combobox, Wizard, validation
- [`@labmgm/data-table`](../data-table) — TanStack Table v8
- [`@labmgm/charts`](../charts) — Recharts wrappers
- [`@labmgm/rich-text`](../rich-text) — Tiptap editor + renderer
- [`@labmgm/calendar`](../calendar) — date / range / time pickers
- [`@labmgm/command`](../command) — ⌘K palette
- [`@labmgm/toast`](../toast) — Sonner-wrapped toasts

---

## Surface tones

```tsx
<Section tone="default">…</Section>   // white / ink
<Section tone="muted">…</Section>     // off-white / ink
<Section tone="inverse">…</Section>   // dark / light, child components flip automatically
```

Self-contained surfaces (`Card`, `Dialog`, `Popover`, `Alert`, `Callout`, `Toast`, `Drawer`, `DropdownMenu`, `HoverCard`, `ContextMenu`) automatically reset to `data-surface="default"` so they read correctly even when nested inside a dark Section. Tooltip stays dark by design.

---

## Brand rules quick reference

- **Closed palette.** No purple, teal, pink, or orange. Brand colors: `brand-blue`, `brand-yellow`, `brand-red`, `brand-green`.
- **Stroke-only icons** at 2.25 stroke width, 16 / 20 / 24 px (use `@labmgm/icons` or `lucide-react`).
- **Typography**: Bricolage Grotesque (display), Geist (UI), Geist Mono (code). No substitutes.
- **One display per page.** Inner sections start at `h1` or smaller.
- The full spec lives in [`DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md).

---

## License

MIT © MGM Laboratory
