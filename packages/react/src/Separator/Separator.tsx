import * as React from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';
import { cn } from '@labmgm/utils';

export const Separator = React.forwardRef<
  React.ElementRef<typeof RadixSeparator.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSeparator.Root>
>(function Separator({ className, orientation = 'horizontal', decorative = true, ...rest }, ref) {
  return (
    <RadixSeparator.Root
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'shrink-0 bg-line',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...rest}
    />
  );
});
