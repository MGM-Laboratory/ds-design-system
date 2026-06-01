export { colors, type ColorToken } from './colors.js';
export {
  fontFamilies,
  fontWeights,
  typography,
  fluidTypography,
  type TypographyToken,
  type TypographyStyle,
} from './typography.js';
export { shadows, type ShadowToken } from './shadows.js';
export { radii, type RadiusToken } from './radii.js';
export { durations, easings, type DurationToken, type EasingToken } from './motion.js';
export { spacing, type SpacingToken } from './spacing.js';
export { breakpoints, maxWidths, type BreakpointToken } from './breakpoints.js';

import { colors } from './colors.js';
import { fontFamilies, typography, fluidTypography } from './typography.js';
import { shadows } from './shadows.js';
import { radii } from './radii.js';
import { durations, easings } from './motion.js';
import { spacing } from './spacing.js';
import { breakpoints, maxWidths } from './breakpoints.js';

/** Aggregate token object — useful for snapshot tests and design-tool exporters. */
export const tokens = {
  colors,
  fontFamilies,
  typography,
  fluidTypography,
  shadows,
  radii,
  durations,
  easings,
  spacing,
  breakpoints,
  maxWidths,
} as const;

export type Tokens = typeof tokens;
