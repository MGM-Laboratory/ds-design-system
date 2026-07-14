# `@labmgm/fonts`

> The MGM Laboratory type stack.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Ffonts?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/fonts)

**Bricolage Grotesque** (display) · **Geist** (UI) · **Geist Mono** (code). Loaded from Google Fonts.

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

## Vite, Remix, plain React, etc.

```ts
import '@labmgm/fonts/fonts.css';
```

This injects `@font-face` declarations for Bricolage Grotesque + Geist + Geist Mono via Google Fonts, and sets `--font-display`, `--font-sans`, `--font-mono` on `:root`.

## Hand-rolled link tags

```ts
import {
  googleFontsLinkTags,
  GOOGLE_FONTS_HREF,
  FONT_FAMILIES,
  FONT_CSS_VARIABLES,
} from '@labmgm/fonts';
```

## Brand rule

> **No substitutes.** Inter, Roboto, Arial, Helvetica, Poppins, Montserrat, system defaults — all flatten the brand. Use the prescribed three families.

## License

MIT © MGM Laboratory
