import * as React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { cn } from '@labmgm/utils';
import { buttonVariants, type ButtonProps } from './Button.js';

export interface ToggleButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Toggle.Root>, 'asChild'>,
    Pick<ButtonProps, 'variant' | 'size'> {
  label?: string;
}

/**
 * A button that toggles between pressed and unpressed states. Backed by Radix Toggle.
 */
export const ToggleButton = React.forwardRef<
  React.ElementRef<typeof Toggle.Root>,
  ToggleButtonProps
>(function ToggleButton({ variant = 'ghost', size = 'md', className, label, children, ...rest }, ref) {
  return (
    <Toggle.Root
      ref={ref}
      aria-label={label}
      className={cn(
        buttonVariants({ variant, size }),
        'data-[state=on]:bg-ink data-[state=on]:text-white',
        className,
      )}
      {...rest}
    >
      {children}
    </Toggle.Root>
  );
});
