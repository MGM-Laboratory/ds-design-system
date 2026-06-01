import * as React from 'react';
import * as RadixHoverCard from '@radix-ui/react-hover-card';
import { cn } from '@labmgm/utils';

export const HoverCard = RadixHoverCard.Root;
export const HoverCardTrigger = RadixHoverCard.Trigger;

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof RadixHoverCard.Content>,
  React.ComponentPropsWithoutRef<typeof RadixHoverCard.Content>
>(function HoverCardContent({ className, align = 'center', sideOffset = 8, ...rest }, ref) {
  return (
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        data-surface="default"
        className={cn(
          'z-50 w-72 rounded-md border border-line bg-surface p-4 text-ink shadow-2 outline-none',
          'data-[state=open]:animate-scale-in',
          className,
        )}
        {...rest}
      />
    </RadixHoverCard.Portal>
  );
});
