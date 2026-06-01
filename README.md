# `@labmgm/*` — MGM Laboratory Design System

A complete, opinionated React design system for MGM Laboratory. Ship websites and products with brand-correct components, patterns, icons, fonts, and tokens — without ever installing a second UI library.

> The reference site has been mined and distilled. Tokens come from `DESIGN_SYSTEM.md`. Patterns are the 80-tile catalog. Components are CVA + Radix + Tailwind.

## Install

Pick what you need. Or just install `@labmgm/react` and get everything.

```bash
pnpm add @labmgm/react @labmgm/tokens @labmgm/tailwind-config
```

Then either import the pre-compiled CSS:

```ts
import '@labmgm/tokens/tokens.css';
import '@labmgm/react/styles.css';
```

Or extend Tailwind:

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

## Packages

| Package | What it is |
|---|---|
| `@labmgm/tokens` | Design tokens (CSS vars, TS, JSON) — colors, type scale, shadows, radii, motion |
| `@labmgm/tailwind-config` | Tailwind preset extending MGM tokens |
| `@labmgm/fonts` | Bricolage Grotesque, Geist, Geist Mono loaders |
| `@labmgm/utils` | `cn()`, polymorphic helpers, formatters |
| `@labmgm/theme` | `<ThemeProvider>` + `<Surface tone="inverse">` |
| `@labmgm/icons` | Lucide with 2.25 stroke baked in |
| `@labmgm/patterns` | 80 SVG tiles + `<PatternGrid>` composer |
| `@labmgm/brand` | `<Logo>`, `<Wordmark>`, `<ShapeSignature>` |
| `@labmgm/layout` | `<Container>`, `<Stack>`, `<Grid>`, `<Flex>`, etc. |
| `@labmgm/react` | The core component library |
| `@labmgm/forms` | React Hook Form + Zod, `<Field>`, `<Wizard>` |
| `@labmgm/data-table` | TanStack Table 8 + MGM styling |
| `@labmgm/charts` | Recharts wrappers |
| `@labmgm/rich-text` | Tiptap editor + renderer |
| `@labmgm/calendar` | `<Calendar>`, `<DatePicker>`, `<DateRangePicker>` |
| `@labmgm/command` | `cmdk` command palette |
| `@labmgm/toast` | Sonner-wrapped toasts |
| `@labmgm/motion` | Framer Motion + MGM presets |
| `@labmgm/hooks` | Common React hooks |
| `@labmgm/a11y` | `<VisuallyHidden>`, focus utilities |

## Develop

```bash
pnpm install
pnpm dev              # everything in watch mode
pnpm --filter @labmgm/playground dev    # sandbox app
pnpm --filter storybook storybook       # Storybook
pnpm --filter docs dev                  # docs site
```

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

MIT © MGM Laboratory
