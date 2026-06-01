import './globals.css';
import { bricolageGrotesque, geist, geistMono } from '@labmgm/fonts/next';
import { ThemeProvider } from '@labmgm/theme';
import { Toaster } from '@labmgm/toast';

export const metadata = {
  title: 'MGM Design System — Playground',
  description: 'Internal sandbox for dogfooding @labmgm/* packages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
