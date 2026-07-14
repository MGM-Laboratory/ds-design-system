import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the chip is active/selected. */
  active?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

/** Clickable filter chip with active state. */
export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { active, leading, trailing, className, children, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-body-sm transition-colors duration-200 ease-out-soft',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
        active
          ? 'border-surface-inverse bg-surface-inverse text-white'
          : 'border-line bg-surface text-ink-2 hover:border-line-strong hover:bg-surface-muted',
        className,
      )}
      {...rest}
    >
      {leading}
      <span>{children}</span>
      {trailing}
    </button>
  );
});
