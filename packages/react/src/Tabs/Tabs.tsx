import * as React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { cn } from '@labmgm/utils';

export const Tabs = RadixTabs.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(function TabsList({ className, ...rest }, ref) {
  return (
    <RadixTabs.List
      ref={ref}
      className={cn('inline-flex items-center gap-1 border-b border-line', className)}
      {...rest}
    />
  );
});

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
>(function TabsTrigger({ className, ...rest }, ref) {
  return (
    <RadixTabs.Trigger
      ref={ref}
      className={cn(
        'relative inline-flex items-center gap-1.5 px-3 py-2 text-body-sm font-medium text-ink-3',
        'transition-colors hover:text-ink',
        'data-[state=active]:text-ink',
        'data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:-bottom-px data-[state=active]:after:h-0.5 data-[state=active]:after:bg-surface-inverse',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:rounded-sm',
        className,
      )}
      {...rest}
    />
  );
});

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(function TabsContent({ className, ...rest }, ref) {
  return (
    <RadixTabs.Content
      ref={ref}
      className={cn('mt-4 focus-visible:outline-none', className)}
      {...rest}
    />
  );
});
