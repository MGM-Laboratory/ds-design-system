/**
 * Next.js font loaders. Import from `@labmgm/fonts/next`.
 *
 * Usage:
 *   import { bricolageGrotesque, geist, geistMono } from '@labmgm/fonts/next';
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="en" className={`${bricolageGrotesque.variable} ${geist.variable} ${geistMono.variable}`}>
 *         <body>{children}</body>
 *       </html>
 *     );
 *   }
 */
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google';

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
});

export const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

export const fontVariables = `${bricolageGrotesque.variable} ${geist.variable} ${geistMono.variable}`;
