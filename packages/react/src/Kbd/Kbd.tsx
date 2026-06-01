import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md';
}

/** Renders a keyboard key visualization. */
export const Kbd = React.forwardRef<HTMLElement, KbdProps>(function Kbd(
  { size = 'sm', className, children, ...rest },
  ref,
) {
  return (
    <kbd
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-mono text-ink-2 bg-surface-muted border border-line rounded-sm',
        size === 'sm' ? 'min-w-5 h-5 px-1.5 text-[11px]' : 'min-w-6 h-6 px-2 text-mono',
        className,
      )}
      {...rest}
    >
      {children}
    </kbd>
  );
});
