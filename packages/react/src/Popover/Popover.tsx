import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { cn } from '@labmgm/utils';

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;
export const PopoverAnchor = RadixPopover.Anchor;
export const PopoverClose = RadixPopover.Close;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>(function PopoverContent({ className, align = 'center', sideOffset = 8, ...rest }, ref) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border border-line bg-surface p-4 text-ink shadow-2 outline-none',
          'data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-in',
          className,
        )}
        {...rest}
      />
    </RadixPopover.Portal>
  );
});
