# `@labmgm/react`

The core MGM Laboratory React component library. Buttons, cards, dialogs, navigation, feedback, layout — everything you need for a product or marketing surface. Bundled with Radix UI, Lucide icons, Tailwind, and a fully-tokenized theme.

```bash
pnpm add @labmgm/react @labmgm/tokens
```

## Two ways to ship styles

**Option A — Tailwind preset** (preferred for new projects):

```ts
// tailwind.config.ts
import preset from '@labmgm/tailwind-config';
export default {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}', './node_modules/@labmgm/**/dist/**/*.{js,mjs}'],
};
```

**Option B — Pre-compiled CSS** (no Tailwind needed):

```ts
import '@labmgm/tokens/tokens.css';
import '@labmgm/react/styles.css';
```

## Use it

```tsx
import {
  Container, Section, Stack, Grid,
  Button, Card, Badge, Avatar,
  Dialog, DropdownMenu, Tooltip,
  Tabs, Accordion, Breadcrumb, Pagination,
  Alert, Banner, Progress, Empty, Skeleton,
} from '@labmgm/react';

<Section tone="muted" padding="lg">
  <Container>
    <Stack gap={6}>
      <h1 className="text-display-lg">Build the loud internet.</h1>
      <Button variant="primary" size="lg">Get started</Button>
    </Stack>
  </Container>
</Section>
```

## Component catalog

**Buttons & actions** — `Button`, `IconButton`, `ButtonGroup`, `ToggleButton`, `ToggleButtonGroup`, `Link`, `Kbd`, `CopyButton`, `BackButton`

**Display** — `Card` (+ Header/Title/Description/Content/Footer), `Badge`, `Tag`, `Chip`, `Avatar`, `AvatarGroup`, `Stat`, `Empty`, `Skeleton`, `Spinner`, `Code`, `CodeBlock`

**Overlays** — `Dialog`, `AlertDialog`, `Drawer`, `Popover`, `HoverCard`, `Tooltip`, `DropdownMenu`, `ContextMenu`

**Navigation** — `Tabs`, `Accordion`, `Breadcrumb`, `Pagination`, `Stepper`, `Navbar`

**Feedback** — `Alert`, `Banner`, `Progress`, `ProgressCircle`, `Callout`

**Data display** — `List`, `DescriptionList`, `Timeline`, `Separator`

**Media** — `Image`, `Carousel`

**Layout (from @labmgm/layout)** — `Container`, `Section`, `Stack`, `VStack`, `HStack`, `Grid`, `Flex`, `Box`, `Center`, `Spacer`, `AspectRatio`, `Divider`

**Brand (from @labmgm/brand)** — `Logo`, `Wordmark`, `ShapeSignature`, `FooterStrip`

**Theme (from @labmgm/theme)** — `ThemeProvider`, `Surface`, `useSurface`

**Patterns (from @labmgm/patterns)** — `PatternGrid`, `PatternTile`, `PatternCorner`, `PatternBanner`, `PatternDado`, `PatternStrip`, `PatternPyramid`, `PatternTriangle`

For forms (`Input`, `Combobox`, `Wizard`, etc.), see [`@labmgm/forms`](https://npmjs.com/package/@labmgm/forms).
For data tables, see [`@labmgm/data-table`](https://npmjs.com/package/@labmgm/data-table).
For charts, see [`@labmgm/charts`](https://npmjs.com/package/@labmgm/charts).
For rich text editing, see [`@labmgm/rich-text`](https://npmjs.com/package/@labmgm/rich-text).
For toasts, see [`@labmgm/toast`](https://npmjs.com/package/@labmgm/toast).
