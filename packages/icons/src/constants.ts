/** Brand-mandated stroke width — slightly heavier than Lucide's default 2. */
export const DEFAULT_STROKE_WIDTH = 2.25;

/** Canonical icon sizes (DESIGN_SYSTEM.md §4). */
export const ICON_SIZE = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type IconSize = keyof typeof ICON_SIZE;
