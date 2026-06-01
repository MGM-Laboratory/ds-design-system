import './globals.css';
import Link from 'next/link';
import { bricolageGrotesque, geist, geistMono } from '@labmgm/fonts/next';
import { ThemeProvider } from '@labmgm/theme';
import { Wordmark, FooterStrip } from '@labmgm/brand';
import { Container } from '@labmgm/layout';
import { Badge } from '@labmgm/react';

export const metadata = {
  title: 'MGM Design System',
  description: 'Documentation for the @labmgm design system.',
};

const NAV = [
  { href: '/', label: 'Introduction' },
  { href: '/brand', label: 'Brand' },
  { href: '/color', label: 'Color' },
  { href: '/typography', label: 'Typography' },
  { href: '/motion', label: 'Motion' },
  { href: '/iconography', label: 'Iconography' },
  { href: '/patterns', label: 'Patterns' },
  { href: '/getting-started', label: 'Getting started' },
  { href: '/installation', label: 'Installation' },
  { href: '/migrating', label: 'Migrating' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider>
          <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
            <Container>
              <div className="flex h-14 items-center justify-between">
                <Wordmark href="/" />
                <div className="hidden items-center gap-3 sm:flex">
                  <Badge tone="info" size="sm">v0.1</Badge>
                  <a
                    href="https://github.com/labmgm/ds-design-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-ink-2 hover:text-ink"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Container>
          </header>
          <div className="mx-auto grid max-w-container-wide grid-cols-[240px_1fr] gap-12 px-6 py-10">
            <aside className="sticky top-20 self-start">
              <nav className="flex flex-col gap-1">
                <span className="px-2 pb-2 text-eyebrow uppercase text-ink-3">Foundations</span>
                {NAV.slice(0, 7).map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-sm px-2 py-1.5 text-body-sm text-ink-2 hover:bg-surface-muted hover:text-ink">
                    {item.label}
                  </Link>
                ))}
                <span className="px-2 pb-2 pt-4 text-eyebrow uppercase text-ink-3">Guides</span>
                {NAV.slice(7).map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-sm px-2 py-1.5 text-body-sm text-ink-2 hover:bg-surface-muted hover:text-ink">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>
            <main className="min-w-0">{children}</main>
          </div>
          <FooterStrip />
          <footer className="py-8">
            <Container>
              <p className="text-caption text-ink-3">© MGM Laboratory — design system documentation.</p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
