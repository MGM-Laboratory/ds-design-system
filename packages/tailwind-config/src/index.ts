import {
  colors,
  fontFamilies,
  typography,
  shadows,
  radii,
  durations,
  easings,
  breakpoints,
  maxWidths,
} from '@labmgm/tokens';
import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

// Map ColorToken → Tailwind nested color object.
//
// Contextual tokens (bg, surface, ink, line, focus) route through CSS variables
// so they automatically flip inside `[data-surface="inverse"]` scopes — that
// scope is defined in @labmgm/tokens/tokens.css and redefines --ink, --bg, etc.
// to their inverse counterparts. This is how nested children (e.g. a CardTitle
// using `text-ink`) correctly read as white when inside a dark Surface.
//
// Brand colors stay literal — the brand palette is fixed and does NOT flip.
function buildTailwindColors(): Record<string, unknown> {
  return {
    bg: 'var(--bg)',
    surface: {
      DEFAULT: 'var(--surface)',
      muted: 'var(--surface-muted)',
      inverse: 'var(--surface-inverse)',
    },
    ink: {
      DEFAULT: 'var(--ink)',
      2: 'var(--ink-2)',
      3: 'var(--ink-3)',
      4: 'var(--ink-4)',
    },
    line: {
      DEFAULT: 'var(--line)',
      strong: 'var(--line-strong)',
    },
    focus: 'var(--focus)',
    brand: {
      blue: { DEFAULT: colors['brand-blue'], 50: colors['brand-blue-50'] },
      yellow: { DEFAULT: colors['brand-yellow'], 50: colors['brand-yellow-50'] },
      red: { DEFAULT: colors['brand-red'], 50: colors['brand-red-50'] },
      green: { DEFAULT: colors['brand-green'], 50: colors['brand-green-50'] },
    },
  };
}

function buildFontSize(): Record<string, [string, Record<string, string | number>]> {
  const out: Record<string, [string, Record<string, string | number>]> = {};
  for (const [token, style] of Object.entries(typography)) {
    out[token] = [
      style.fontSize,
      {
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing,
        fontWeight: style.fontWeight,
        ...(style.textTransform ? { textTransform: style.textTransform } : {}),
      },
    ];
  }
  return out;
}

const preset = {
  darkMode: ['selector', '[data-surface="inverse"]'],
  theme: {
    extend: {
      colors: buildTailwindColors() as Record<string, string | Record<string, string>>,
      fontFamily: {
        display: [...fontFamilies.display],
        sans: [...fontFamilies.sans],
        mono: [...fontFamilies.mono],
      },
      fontSize: buildFontSize(),
      borderRadius: {
        none: radii.none,
        sm: radii.sm,
        DEFAULT: radii.md,
        md: radii.md,
        lg: radii.lg,
        xl: radii.xl,
        '2xl': radii['2xl'],
        full: radii.full,
      },
      boxShadow: {
        1: shadows['1'],
        2: shadows['2'],
        3: shadows['3'],
        focus: `0 0 0 2px ${colors.focus}33`,
      },
      transitionTimingFunction: {
        'out-soft': easings['out-soft'],
        'in-out-soft': easings['in-out-soft'],
        spring: easings.spring,
      },
      transitionDuration: {
        '120': durations['1'],
        '200': durations['2'],
        '320': durations['3'],
        '520': durations['4'],
        '800': durations['5'],
      },
      maxWidth: {
        prose: maxWidths.prose,
        container: maxWidths.container,
        'container-wide': maxWidths['container-wide'],
      },
      screens: breakpoints,
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-in-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-in-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': `fade-in ${durations['2']} ${easings['out-soft']}`,
        'fade-up': `fade-up ${durations['3']} ${easings['out-soft']}`,
        'scale-in': `scale-in ${durations['2']} ${easings['out-soft']}`,
        'slide-in-right': `slide-in-right ${durations['3']} ${easings['out-soft']}`,
        'slide-in-left': `slide-in-left ${durations['3']} ${easings['out-soft']}`,
        'slide-in-up': `slide-in-up ${durations['3']} ${easings['out-soft']}`,
        'slide-in-down': `slide-in-down ${durations['3']} ${easings['out-soft']}`,
        shimmer: `shimmer 1.6s linear infinite`,
        spin: `spin 600ms linear infinite`,
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Partial<Config>;

export default preset;
