import * as React from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import { cn } from '@labmgm/utils';

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof RadixLabel.Root> {
  /** If true, render a red asterisk next to the label. */
  required?: boolean;
}

export const Label = React.forwardRef<React.ElementRef<typeof RadixLabel.Root>, LabelProps>(
  function Label({ required, className, children, ...rest }, ref) {
    return (
      <RadixLabel.Root
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 text-caption font-medium text-ink leading-none select-none',
          className,
        )}
        {...rest}
      >
        {children}
        {required && <span className="text-brand-red" aria-hidden="true">*</span>}
      </RadixLabel.Root>
    );
  },
);
