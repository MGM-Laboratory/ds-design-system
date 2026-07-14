import * as React from 'react';
import { cn } from '@labmgm/utils';

export const DescriptionList = React.forwardRef<
  HTMLDListElement,
  React.HTMLAttributes<HTMLDListElement>
>(function DescriptionList({ className, ...rest }, ref) {
  return (
    <dl
      ref={ref}
      className={cn('grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2', className)}
      {...rest}
    />
  );
});

export const DescriptionTerm = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function DescriptionTerm({ className, ...rest }, ref) {
    return (
      <dt
        ref={ref}
        className={cn('text-caption uppercase tracking-wide text-ink-3', className)}
        {...rest}
      />
    );
  },
);

export const DescriptionDetails = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function DescriptionDetails({ className, ...rest }, ref) {
    return <dd ref={ref} className={cn('text-body text-ink', className)} {...rest} />;
  },
);
