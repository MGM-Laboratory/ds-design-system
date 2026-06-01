# `@labmgm/layout`

Layout primitives for MGM Laboratory. All re-exported from `@labmgm/react`.

```bash
pnpm add @labmgm/layout
```

```tsx
import { Container, Section, Stack, Grid, Flex, Box, Center, Spacer, AspectRatio, Divider } from '@labmgm/layout';

<Section tone="muted" padding="lg">
  <Container width="default">
    <Stack gap={8}>
      <h1 className="text-display-lg">Hello</h1>
      <Grid cols={3} gap={6}>
        <Box>1</Box><Box>2</Box><Box>3</Box>
      </Grid>
    </Stack>
  </Container>
</Section>
```

| Component | Purpose |
|---|---|
| `<Box>` | Polymorphic div (use sparingly) |
| `<Container>` | Centered max-width wrapper (prose / default / wide / full) |
| `<Section>` | Page section with brand padding + optional tone (default / muted / inverse) |
| `<Stack>` / `<VStack>` / `<HStack>` | Linear layout with consistent gap |
| `<Grid>` | CSS grid with responsive cols |
| `<Flex>` | Low-level flex primitive |
| `<Center>` | Center children both axes |
| `<Spacer>` | Eat remaining flex space |
| `<AspectRatio>` | Lock children to a ratio |
| `<Divider>` | Hairline rule |
