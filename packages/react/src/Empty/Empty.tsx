import * as React from 'react';
import { ShapeSignature } from '@labmgm/brand';
import { cn } from '@labmgm/utils';

export interface EmptyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Custom slot for the visual on top — defaults to a 2×2 ShapeSignature. */
  visual?: React.ReactNode;
  /** Optional action row (typically a primary button). */
  action?: React.ReactNode;
}

/**
 * Empty state with a pattern accent on top, large title, description, and optional action.
 * The accent uses MGM brand patterns — the "spice" referenced in DESIGN_SYSTEM.md §1.
 */
export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(function Empty(
  { title, description, visual, action, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('mx-auto flex max-w-md flex-col items-center gap-5 py-12 text-center', className)}
      {...rest}
    >
      {visual ?? <ShapeSignature rows={2} cols={2} tileSize={28} seed="empty" />}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-h3 font-semibold text-ink">{title}</h3>
        {description && <p className="text-body text-ink-3">{description}</p>}
      </div>
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
});
