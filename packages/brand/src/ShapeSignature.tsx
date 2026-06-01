import * as React from 'react';
import { cn } from '@labmgm/utils';
import { PatternGrid } from '@labmgm/patterns';

export interface ShapeSignatureProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cell edge length (px). */
  tileSize?: number;
  /** Grid dimensions. */
  rows?: number;
  cols?: number;
  /** Determines the pattern selection. */
  seed?: string | number;
}

/**
 * Compact "brand signature" composition — a small fixed-size pattern block, typically
 * used as an empty-state accent or favicon-scale brand mark.
 */
export const ShapeSignature = React.forwardRef<HTMLDivElement, ShapeSignatureProps>(
  function ShapeSignature({ tileSize = 28, rows = 2, cols = 2, seed = 'signature', className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn('inline-block', className)} {...rest}>
        <PatternGrid rows={rows} cols={cols} tileSize={tileSize} seed={seed} />
      </div>
    );
  },
);
