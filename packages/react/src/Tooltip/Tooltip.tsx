import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { cn } from '@labmgm/utils';

export const TooltipProvider = RadixTooltip.Provider;
export const Tooltip = RadixTooltip.Root;
export const TooltipTrigger = RadixTooltip.Trigger;

export interface TooltipProps extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Root> {}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof RadixTooltip.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTooltip.Content>
>(function TooltipContent({ className, sideOffset = 6, ...rest }, ref) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        ref={ref}
        sideOffset={sideOffset}
        data-surface="inverse"
        className={cn(
          'z-50 max-w-xs select-none rounded-sm bg-surface-inverse px-2 py-1 text-caption text-white shadow-2',
          'data-[state=closed]:animate-fade-in data-[state=delayed-open]:animate-fade-in',
          className,
        )}
        {...rest}
      />
    </RadixTooltip.Portal>
  );
});
