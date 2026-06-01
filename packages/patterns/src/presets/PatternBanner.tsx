import * as React from 'react';
import { PatternGrid } from '../PatternGrid.js';
import type { PatternColor } from '../catalog.js';

export interface PatternBannerProps {
  /** Cell edge length (px). */
  tileSize?: number;
  /** Rows (default 2). */
  rows?: number;
  /** Columns (default 6). */
  cols?: number;
  seed?: string | number;
  colors?: readonly PatternColor[];
  className?: string;
}

/**
 * Wide 2×6 banner block of patterns. Often used as a divider between marketing sections.
 */
export function PatternBanner({
  tileSize = 64,
  rows = 2,
  cols = 6,
  seed = 'banner',
  colors,
  className,
}: PatternBannerProps) {
  return (
    <PatternGrid
      rows={rows}
      cols={cols}
      tileSize={tileSize}
      seed={seed}
      colors={colors}
      className={className}
    />
  );
}
