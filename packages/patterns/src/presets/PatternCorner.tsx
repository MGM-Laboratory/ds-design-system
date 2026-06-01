import * as React from 'react';
import { cn } from '@labmgm/utils';
import { PatternGrid } from '../PatternGrid.js';
import type { PatternColor } from '../catalog.js';

export interface PatternCornerProps {
  /** Where this corner sits in its parent. Affects radial alignment. */
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Cell edge length in pixels. */
  tileSize?: number;
  /** Number of rows × cols in the corner (default 2×2). */
  size?: 2 | 3 | 4;
  seed?: string | number;
  colors?: readonly PatternColor[];
  className?: string;
}

/**
 * A small 2×2 (or 3×3 / 4×4) pattern block anchored to a corner. Use as a decorative accent
 * on hero sections, marketing pages, or error states.
 */
export function PatternCorner({
  placement = 'top-left',
  tileSize = 64,
  size = 2,
  seed,
  colors,
  className,
}: PatternCornerProps) {
  const placementClasses: Record<NonNullable<PatternCornerProps['placement']>, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };
  return (
    <PatternGrid
      rows={size}
      cols={size}
      tileSize={tileSize}
      seed={seed ?? `corner-${placement}`}
      colors={colors}
      className={cn('absolute pointer-events-none', placementClasses[placement], className)}
    />
  );
}
