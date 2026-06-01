import * as React from 'react';
import { PatternPyramid, type PatternPyramidProps } from './PatternPyramid.js';

export interface PatternTriangleProps extends PatternPyramidProps {
  /** Where the triangle points. */
  direction?: 'up' | 'down';
}

/**
 * Triangle composition. Just a pyramid with an optional inversion (`direction="down"`).
 */
export function PatternTriangle({ direction = 'up', className, ...rest }: PatternTriangleProps) {
  return (
    <PatternPyramid
      {...rest}
      className={[direction === 'down' ? 'rotate-180' : '', className].filter(Boolean).join(' ')}
    />
  );
}
