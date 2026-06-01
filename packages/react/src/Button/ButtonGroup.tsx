import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  /** Visually attach buttons (no gap, shared borders). */
  attached?: boolean;
}

/**
 * Group buttons together. When `attached`, inner buttons share borders for a segmented look.
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(
  { orientation = 'horizontal', attached, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="group"
      className={cn(
        'inline-flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        attached
          ? [
              orientation === 'horizontal'
                ? '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:last-child)]:-mr-px'
                : '[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:last-child)]:-mb-px',
            ]
          : 'gap-2',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
