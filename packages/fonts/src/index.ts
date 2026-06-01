/**
 * The official MGM font stack — references for consumers not using Next.js.
 * For Next.js apps, import from `@labmgm/fonts/next` to use `next/font/google` loaders.
 */

export const FONT_FAMILIES = {
  display: 'Bricolage Grotesque',
  sans: 'Geist',
  mono: 'Geist Mono',
} as const;

export const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&display=swap';

/**
 * Return the `<link>` tags as plain HTML strings — convenient for use in
 * non-React server renderers, RSS feeds, or testing.
 */
export function googleFontsLinkTags(): string {
  return [
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    `<link rel="stylesheet" href="${GOOGLE_FONTS_HREF}" />`,
  ].join('\n');
}

export const FONT_CSS_VARIABLES = {
  display: '--font-display',
  sans: '--font-sans',
  mono: '--font-mono',
} as const;
