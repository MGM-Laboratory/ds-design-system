import * as React from 'react';
import { cn } from '@labmgm/utils';
import { CATALOG, type PatternScheme, type PatternShape } from './catalog.js';

export interface PatternTileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  shape: PatternShape;
  scheme: PatternScheme;
  /** Size in pixels for this single tile. Default 100 (the SVG's native viewBox). */
  size?: number;
}

/**
 * A single 100×100 pattern tile rendered from the inlined SVG catalog.
 * Use this when you only need one tile; for grids, prefer <PatternGrid>.
 */
export const PatternTile = React.forwardRef<HTMLDivElement, PatternTileProps>(function PatternTile(
  { shape, scheme, size = 100, className, style, ...rest },
  ref,
) {
  const entry = CATALOG[`${shape}-${scheme}`];
  if (!entry) return null;
  return (
    <div
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn('inline-block leading-none', className)}
      style={{ width: size, height: size, ...style }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: entry.svg.replace(/width="100"/, `width="${size}"`).replace(/height="100"/, `height="${size}"`),
      }}
      {...rest}
    />
  );
});
