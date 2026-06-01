import Link from 'next/link';
import { Container, Section, Stack, Grid } from '@labmgm/layout';
import { Wordmark, FooterStrip } from '@labmgm/brand';
import { Button, Card, CardHeader, CardTitle, CardDescription, Badge } from '@labmgm/react';
import { PatternGrid } from '@labmgm/patterns';

const PAGES = [
  { href: '/components', title: 'Components', description: 'Buttons, cards, dialogs, navigation, feedback.' },
  { href: '/forms', title: 'Forms', description: 'Inputs, selects, the Field wrapper, multi-step wizard.' },
  { href: '/patterns', title: 'Patterns', description: 'The 80-tile catalog and the PatternGrid composer.' },
  { href: '/charts', title: 'Charts', description: 'Bar, line, area, pie, donut, sparkline.' },
  { href: '/data-table', title: 'Data table', description: 'Sortable, filterable, paginated TanStack Table.' },
  { href: '/rich-text', title: 'Rich text', description: 'Tiptap editor + renderer.' },
];

export default function Home() {
  return (
    <>
      <header className="border-b border-line">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <Wordmark href="/" />
            <Badge tone="info" size="sm">v0.1 canary</Badge>
          </div>
        </Container>
      </header>
      <Section padding="lg">
        <Container>
          <Stack gap={10}>
            <Stack gap={3}>
              <h1 className="text-display-xl text-ink">
                Build the <span className="text-brand-red">loud</span> internet.
              </h1>
              <p className="max-w-prose text-body-lg text-ink-2">
                A playground for @labmgm/* — every package is hot-reloaded from the monorepo. Pick a page to see the components in their natural habitat.
              </p>
              <div className="flex gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href="/components">Explore components</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/patterns">See patterns</Link>
                </Button>
              </div>
            </Stack>
            <PatternGrid rows={2} cols={8} tileSize={56} seed="home-hero" />
            <Grid cols={1} responsive={{ base: 1, md: 2, lg: 3 }} gap={4}>
              {PAGES.map((page) => (
                <Card key={page.href} interactive asChild={false}>
                  <Link href={page.href} className="block">
                    <CardHeader>
                      <CardTitle>{page.title}</CardTitle>
                      <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>
      <FooterStrip />
      <footer className="py-6">
        <Container>
          <p className="text-caption text-ink-3">© MGM Laboratory — design system playground.</p>
        </Container>
      </footer>
    </>
  );
}
