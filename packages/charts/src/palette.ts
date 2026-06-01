import { colors } from '@labmgm/tokens';

export const BRAND_COLORS = {
  blue: colors['brand-blue'],
  yellow: colors['brand-yellow'],
  red: colors['brand-red'],
  green: colors['brand-green'],
  ink: colors.ink,
} as const;

/** Default categorical palette for charts. Order respects brand prominence. */
export const CHART_PALETTE = [
  colors['brand-blue'],
  colors['brand-green'],
  colors['brand-yellow'],
  colors['brand-red'],
  colors.ink,
] as const;
