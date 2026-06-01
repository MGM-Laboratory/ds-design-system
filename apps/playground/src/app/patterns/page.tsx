import { Container, Section, Stack, Grid } from '@labmgm/layout';
import {
  PatternGrid,
  PatternCorner,
  PatternBanner,
  PatternStrip,
  PatternDado,
  PatternPyramid,
  PatternTriangle,
} from '@labmgm/patterns';

export default function PatternsPage() {
  return (
    <Section padding="lg">
      <Container>
        <Stack gap={10}>
          <Stack gap={2}>
            <span className="text-eyebrow uppercase text-ink-3">Library</span>
            <h1 className="text-display-lg">Patterns</h1>
            <p className="max-w-prose text-body-lg text-ink-2">
              80 Bauhaus-inspired tiles composed into deterministic, no-adjacent-repeat grids.
            </p>
          </Stack>

          <Grid cols={1} responsive={{ base: 1, lg: 2 }} gap={6}>
            <Stack gap={3}>
              <h3 className="text-h3">3×3 Grid</h3>
              <PatternGrid rows={3} cols={3} seed="demo-3x3" />
            </Stack>
            <Stack gap={3}>
              <h3 className="text-h3">4×2 Banner</h3>
              <PatternBanner rows={4} cols={2} seed="demo-banner" />
            </Stack>
            <Stack gap={3}>
              <h3 className="text-h3">Pyramid</h3>
              <PatternPyramid height={5} tileSize={48} seed="demo-pyramid" />
            </Stack>
            <Stack gap={3}>
              <h3 className="text-h3">Triangle (down)</h3>
              <PatternTriangle direction="down" height={5} tileSize={48} seed="demo-tri" />
            </Stack>
          </Grid>

          <section>
            <h3 className="text-h3 mb-3">Strip</h3>
            <PatternStrip tiles={20} tileSize={40} seed="strip-demo" />
          </section>

          <section>
            <h3 className="text-h3 mb-3">Dado (footer divider)</h3>
            <PatternDado tiles={120} />
          </section>

          <section>
            <h3 className="text-h3 mb-3">Corner block</h3>
            <div className="relative h-64 overflow-hidden rounded-md border border-line bg-surface-muted">
              <PatternCorner placement="top-left" size={3} />
              <PatternCorner placement="bottom-right" size={3} />
              <div className="flex h-full items-center justify-center text-ink-3">
                Centered content
              </div>
            </div>
          </section>
        </Stack>
      </Container>
    </Section>
  );
}
