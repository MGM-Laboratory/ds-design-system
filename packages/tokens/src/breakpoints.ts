/** Tailwind defaults; documented here so they're accessible outside Tailwind. */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const maxWidths = {
  prose: '640px',
  container: '1200px',
  'container-wide': '1360px',
} as const;

export type BreakpointToken = keyof typeof breakpoints;
