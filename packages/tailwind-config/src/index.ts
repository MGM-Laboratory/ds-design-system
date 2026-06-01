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

// Map ColorToken → Tailwind nested color object (so `bg-brand-blue` works).
function buildTailwindColors(): Record<string, unknown> {
  return {
    bg: colors.bg,
    surface: {
      DEFAULT: colors.surface,
      muted: colors['surface-muted'],
      inverse: colors['surface-inverse'],
    },
    ink: {
      DEFAULT: colors.ink,
      2: colors['ink-2'],
      3: colors['ink-3'],
      4: colors['ink-4'],
    },
    line: {
      DEFAULT: colors.line,
      strong: colors['line-strong'],
    },
    focus: colors.focus,
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
