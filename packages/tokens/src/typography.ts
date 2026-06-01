/**
 * MGM type scale, fonts, and weights.
 * Source: DESIGN_SYSTEM.md §3.
 */

export const fontFamilies = {
  display: ['"Bricolage Grotesque"', '"Söhne"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  sans: ['"Geist"', '"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export type TypographyToken =
  | 'display-2xl'
  | 'display-xl'
  | 'display-lg'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'mono'
  | 'eyebrow';

export interface TypographyStyle {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
  textTransform?: 'uppercase';
}

export const typography: Record<TypographyToken, TypographyStyle> = {
  'display-2xl': { fontSize: '4.5rem', lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: 600 },
  'display-xl': { fontSize: '3.5rem', lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: 600 },
  'display-lg': { fontSize: '2.5rem', lineHeight: '1.10', letterSpacing: '-0.02em', fontWeight: 600 },
  h1: { fontSize: '2rem', lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: 600 },
  h2: { fontSize: '1.5rem', lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: 600 },
  h3: { fontSize: '1.25rem', lineHeight: '1.30', letterSpacing: '-0.005em', fontWeight: 600 },
  h4: { fontSize: '1.0625rem', lineHeight: '1.40', letterSpacing: '0', fontWeight: 600 },
  'body-lg': { fontSize: '1.125rem', lineHeight: '1.60', letterSpacing: '0', fontWeight: 400 },
  body: { fontSize: '1rem', lineHeight: '1.60', letterSpacing: '0', fontWeight: 400 },
  'body-sm': { fontSize: '0.9375rem', lineHeight: '1.55', letterSpacing: '0', fontWeight: 400 },
  caption: { fontSize: '0.8125rem', lineHeight: '1.50', letterSpacing: '0.005em', fontWeight: 500 },
  mono: { fontSize: '0.875rem', lineHeight: '1.50', letterSpacing: '0', fontWeight: 400 },
  eyebrow: { fontSize: '0.75rem', lineHeight: '1.40', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' },
};

/** Fluid clamp() values for hero headlines (DESIGN_SYSTEM.md §3.4). */
export const fluidTypography = {
  'display-2xl': 'clamp(2.5rem, 6vw + 1rem, 4.5rem)',
  'display-xl': 'clamp(2rem, 4.5vw + 1rem, 3.5rem)',
  'display-lg': 'clamp(1.75rem, 3vw + 1rem, 2.5rem)',
} as const;
