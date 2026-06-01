import * as React from 'react';
import { cn } from '@labmgm/utils';
import { SurfaceContext } from './surface-context.js';

export type SurfaceTone = 'default' | 'muted' | 'inverse';

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual tone of this section. */
  tone?: SurfaceTone;
  /** Render as a different element. */
  as?: React.ElementType;
}

/**
 * Apply MGM surface tokens to a region.
 *
 *   tone="default" — page surface (#ffffff, ink black)
 *   tone="muted"   — subtle off-white zoning (#f7f7f5)
 *   tone="inverse" — high-contrast dark section (#0e1116, white text). DESIGN_SYSTEM.md §2.2.
 *
 * Surface should be used at most once per long page with tone="inverse".
 */
export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(function Surface(
  { tone = 'default', as: Tag = 'div', className, children, ...rest },
  ref,
) {
  const toneClasses: Record<SurfaceTone, string> = {
    default: 'bg-bg text-ink',
    muted: 'bg-surface-muted text-ink',
    inverse: 'bg-surface-inverse text-ink',
  };
  return (
    <SurfaceContext.Provider value={tone}>
      <Tag
        ref={ref}
        data-surface={tone === 'default' ? undefined : tone}
        className={cn(toneClasses[tone], className)}
        {...rest}
      >
        {children}
      </Tag>
    </SurfaceContext.Provider>
  );
});
