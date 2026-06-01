import * as React from 'react';
import { cn } from '@labmgm/utils';
import { PatternDado } from '@labmgm/patterns';

export interface FooterStripProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tile size for the dado strip (px). */
  tileSize?: number;
  seed?: string | number;
}

/**
 * Thin brand-colored strip used above page footers. Renders the `<PatternDado>` filling the available width.
 */
export const FooterStrip = React.forwardRef<HTMLDivElement, FooterStripProps>(function FooterStrip(
  { tileSize = 8, seed = 'footer', className, ...rest },
  ref,
) {
  // 200 tiles is enough to cover ultrawide displays without measuring. Overflow is hidden.
  return (
    <div ref={ref} className={cn('w-full overflow-hidden', className)} {...rest}>
      <PatternDado tiles={200} tileSize={tileSize} seed={seed} />
    </div>
  );
});
