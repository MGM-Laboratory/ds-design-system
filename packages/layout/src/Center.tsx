import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** If true, also fills the parent height. */
  fill?: boolean;
}

/** Center content both axes. */
export const Center = React.forwardRef<HTMLDivElement, CenterProps>(function Center(
  { as: Tag = 'div', fill, className, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn('flex items-center justify-center', fill && 'h-full w-full', className)}
      {...rest}
    />
  );
});
