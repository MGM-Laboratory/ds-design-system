import * as React from 'react';
import { PatternGrid } from '../PatternGrid.js';
import type { PatternColor } from '../catalog.js';

export interface PatternStripProps {
  /** Number of tiles wide. */
  tiles?: number;
  tileSize?: number;
  seed?: string | number;
  colors?: readonly PatternColor[];
  className?: string;
}

/**
 * Single-row strip of pattern tiles. Use as a hairline accent under a hero title or above a footer.
 */
export function PatternStrip({
  tiles = 12,
  tileSize = 56,
  seed = 'strip',
  colors,
  className,
}: PatternStripProps) {
  return (
    <PatternGrid
      rows={1}
      cols={tiles}
      tileSize={tileSize}
      seed={seed}
      colors={colors}
      className={className}
    />
  );
}
