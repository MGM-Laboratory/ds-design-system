import * as React from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { cn } from '@labmgm/utils';

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Root> {
  /** Orientation of the visible scrollbar. */
  orientation?: 'vertical' | 'horizontal' | 'both';
}

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea.Root>,
  ScrollAreaProps
>(function ScrollArea({ orientation = 'vertical', className, children, ...rest }, ref) {
  return (
    <RadixScrollArea.Root ref={ref} className={cn('overflow-hidden', className)} {...rest}>
      <RadixScrollArea.Viewport className="h-full w-full">{children}</RadixScrollArea.Viewport>
      {(orientation === 'vertical' || orientation === 'both') && (
        <RadixScrollArea.Scrollbar
          orientation="vertical"
          className="flex touch-none select-none p-0.5 transition-colors hover:bg-surface-muted"
        >
          <RadixScrollArea.Thumb className="relative flex-1 rounded-full bg-line-strong" />
        </RadixScrollArea.Scrollbar>
      )}
      {(orientation === 'horizontal' || orientation === 'both') && (
        <RadixScrollArea.Scrollbar
          orientation="horizontal"
          className="flex touch-none select-none flex-col p-0.5 transition-colors hover:bg-surface-muted"
        >
          <RadixScrollArea.Thumb className="relative flex-1 rounded-full bg-line-strong" />
        </RadixScrollArea.Scrollbar>
      )}
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  );
});
