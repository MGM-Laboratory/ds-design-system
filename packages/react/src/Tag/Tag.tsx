import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** If provided, renders a small close button that fires this callback. */
  onRemove?: () => void;
  /** Optional leading element (icon, dot). */
  leading?: React.ReactNode;
}

/** A removable label, typically used in filter/tagging interfaces. */
export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { onRemove, leading, className, children, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 rounded-sm border border-line bg-surface px-2 py-1 text-caption text-ink-2',
        className,
      )}
      {...rest}
    >
      {leading && <span className="shrink-0">{leading}</span>}
      <span className="truncate">{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="-mr-0.5 inline-flex h-4 w-4 items-center justify-center rounded-sm text-ink-3 hover:bg-surface-muted hover:text-ink"
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
});
