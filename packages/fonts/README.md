# `@labmgm/fonts`

The MGM Laboratory type stack — Bricolage Grotesque (display), Geist (UI), Geist Mono (code).

```bash
pnpm add @labmgm/fonts
```

## Next.js

```tsx
import { bricolageGrotesque, geist, geistMono } from '@labmgm/fonts/next';

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

## Other React frameworks (Vite, Remix, etc.)

```ts
import '@labmgm/fonts/fonts.css';
```

## Or hand-roll the link tags

```ts
import { googleFontsLinkTags, GOOGLE_FONTS_HREF } from '@labmgm/fonts';
```
