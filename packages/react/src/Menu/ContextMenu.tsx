import * as React from 'react';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { cn } from '@labmgm/utils';

export const ContextMenu = RadixContextMenu.Root;
export const ContextMenuTrigger = RadixContextMenu.Trigger;

export const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Content>
>(function ContextMenuContent({ className, ...rest }, ref) {
  return (
    <RadixContextMenu.Portal>
      <RadixContextMenu.Content
        ref={ref}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border border-line bg-surface p-1 text-ink shadow-2 data-[state=open]:animate-scale-in',
          className,
        )}
        {...rest}
      />
    </RadixContextMenu.Portal>
  );
});

export const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Item>
>(function ContextMenuItem({ className, ...rest }, ref) {
  return (
    <RadixContextMenu.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-body-sm outline-none',
        'data-[highlighted]:bg-surface-muted',
        className,
      )}
      {...rest}
    />
  );
});

export const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Label>
>(function ContextMenuLabel({ className, ...rest }, ref) {
  return (
    <RadixContextMenu.Label
      ref={ref}
      className={cn('px-2 py-1.5 text-eyebrow uppercase text-ink-3', className)}
      {...rest}
    />
  );
});

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixContextMenu.Separator>
>(function ContextMenuSeparator({ className, ...rest }, ref) {
  return (
    <RadixContextMenu.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-line', className)}
      {...rest}
    />
  );
});
