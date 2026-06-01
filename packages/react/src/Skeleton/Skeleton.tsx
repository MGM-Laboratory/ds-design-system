import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'block' | 'text' | 'circle';
}

/** Shimmering placeholder used while content loads. */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { variant = 'block', className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      role="presentation"
      className={cn(
        'mgm-shimmer',
        variant === 'block' && 'h-24 w-full rounded-md',
        variant === 'text' && 'h-3.5 w-full rounded-sm',
        variant === 'circle' && 'h-10 w-10 rounded-full',
        className,
      )}
      {...rest}
    />
  );
});
