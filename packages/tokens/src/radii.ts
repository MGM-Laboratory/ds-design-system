export const radii = {
  none: '0px',
  sm: '8px',
  md: '12px',
  lg: '20px',
  xl: '28px',
  '2xl': '32px',
  full: '9999px',
} as const;

export type RadiusToken = keyof typeof radii;
