import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  /** Use a slightly stronger line color. */
  strong?: boolean;
}

/** Hairline rule using MGM line color. */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { orientation = 'horizontal', strong, className, ...rest },
  ref,
) {
  return (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'border-0',
        strong ? 'bg-line-strong' : 'bg-line',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...rest}
    />
  );
});
