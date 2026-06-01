import * as React from 'react';
import { ArrowDown, ArrowUp } from '@labmgm/icons';
import { cn } from '@labmgm/utils';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Eyebrow label above the value. */
  label: React.ReactNode;
  /** The big number / metric. */
  value: React.ReactNode;
  /** Optional helper text below. */
  description?: React.ReactNode;
  /** Show a positive/negative delta indicator. */
  delta?: { value: string | number; direction: 'up' | 'down' };
  align?: 'left' | 'center';
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(function Stat(
  { label, value, description, delta, align = 'left', className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-1.5 tabular-nums',
        align === 'center' && 'items-center text-center',
        className,
      )}
      {...rest}
    >
      <div className="text-eyebrow uppercase text-ink-3">{label}</div>
      <div className="flex items-baseline gap-2">
        <div className="text-display-lg font-semibold text-ink leading-none">{value}</div>
        {delta && (
          <span
            className={cn(
              'inline-flex items-center gap-0.5 text-caption font-medium',
              delta.direction === 'up' ? 'text-brand-green' : 'text-brand-red',
            )}
          >
            {delta.direction === 'up' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            {delta.value}
          </span>
        )}
      </div>
      {description && <div className="text-body-sm text-ink-3">{description}</div>}
    </div>
  );
});
