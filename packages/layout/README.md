# `@labmgm/layout`

> Layout primitives for MGM Laboratory.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Flayout?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/layout)

These primitives are also re-exported from [`@labmgm/react`](../react), so you only need this package directly if you want a lighter install.

```bash
pnpm add @labmgm/layout
```

```tsx
import {
  Container, Section, Stack, HStack, VStack, Grid, Flex,
  Box, Center, Spacer, AspectRatio, Divider,
} from '@labmgm/layout';

<Section tone="muted" padding="lg">
  <Container width="default">
    <Stack gap={8}>
      <h1 className="text-display-lg">Hello</h1>
      <Grid cols={1} responsive={{ base: 1, md: 3 }} gap={6}>
        <Box>1</Box><Box>2</Box><Box>3</Box>
      </Grid>
    </Stack>
  </Container>
</Section>
```

| Component | Purpose |
|---|---|
| `<Box>` | Polymorphic div (use sparingly) |
| `<Container>` | Centered max-width wrapper (`prose` / `default` / `wide` / `full`) |
| `<Section>` | Page section with brand padding + tone (`default` / `muted` / `inverse`) |
| `<Stack>` / `<VStack>` / `<HStack>` | Linear layout with consistent gap, alignment, and direction |
| `<Grid>` | CSS grid with `cols` or `responsive: { base, sm, md, lg, xl }` |
| `<Flex>` | Low-level flex primitive |
| `<Center>` | Center children on both axes |
| `<Spacer>` | Eat remaining flex space (push siblings apart) |
| `<AspectRatio>` | Lock children to a width-to-height ratio |
| `<Divider>` | Hairline rule (`orientation`, `strong`) |

## License

MIT © MGM Laboratory
