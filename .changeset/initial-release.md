---
'@labmgm/a11y': minor
'@labmgm/brand': minor
'@labmgm/calendar': minor
'@labmgm/charts': minor
'@labmgm/command': minor
'@labmgm/data-table': minor
'@labmgm/fonts': minor
'@labmgm/forms': minor
'@labmgm/hooks': minor
'@labmgm/icons': minor
'@labmgm/layout': minor
'@labmgm/motion': minor
'@labmgm/patterns': minor
'@labmgm/react': minor
'@labmgm/rich-text': minor
'@labmgm/tailwind-config': minor
'@labmgm/theme': minor
'@labmgm/toast': minor
'@labmgm/tokens': minor
'@labmgm/utils': minor
---

Initial public release of the MGM Laboratory design system.

This first cut ships:

- **Foundations** — `@labmgm/tokens` (colors, type scale, shadows, radii, motion), `@labmgm/tailwind-config` (Tailwind preset), `@labmgm/fonts` (Bricolage Grotesque, Geist, Geist Mono), `@labmgm/utils`, `@labmgm/theme`, `@labmgm/hooks`, `@labmgm/a11y`, `@labmgm/motion`.
- **Brand** — `@labmgm/brand` (Logo, Wordmark, ShapeSignature, FooterStrip), `@labmgm/patterns` (80-tile catalog + `<PatternGrid>` composer with no-adjacent-repeat algorithm + presets), `@labmgm/icons` (Lucide with 2.25 stroke baked in).
- **Components** — `@labmgm/react` (~70 primitives: Button, Card, Dialog, Drawer, Popover, DropdownMenu, Tabs, Accordion, Breadcrumb, Pagination, Stepper, Alert, Banner, Progress, Empty, Skeleton, Carousel, etc.), `@labmgm/layout` (Container, Section, Stack, Grid, Flex, Box, …).
- **Forms** — `@labmgm/forms` (Input, Textarea, Select, Combobox, MultiSelect, TagInput, FileDropzone, Wizard, StepRail) + React Hook Form + Zod helpers.
- **Specialized** — `@labmgm/data-table` (TanStack Table), `@labmgm/charts` (Recharts), `@labmgm/rich-text` (Tiptap), `@labmgm/calendar` (react-day-picker + date-fns), `@labmgm/command` (cmdk + ⌘K), `@labmgm/toast` (Sonner).
