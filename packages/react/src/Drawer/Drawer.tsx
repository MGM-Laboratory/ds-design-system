import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@labmgm/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const Drawer = RadixDialog.Root;
export const DrawerTrigger = RadixDialog.Trigger;
export const DrawerClose = RadixDialog.Close;

const drawerVariants = cva(
  [
    'fixed z-50 flex flex-col bg-surface text-ink shadow-3 outline-none',
    'transition-transform duration-320 ease-out-soft',
  ],
  {
    variants: {
      side: {
        right:
          'top-0 right-0 h-full w-full max-w-md border-l border-line data-[state=closed]:translate-x-full data-[state=open]:animate-slide-in-right',
        left: 'top-0 left-0 h-full w-full max-w-md border-r border-line data-[state=closed]:-translate-x-full data-[state=open]:animate-slide-in-left',
        top: 'top-0 left-0 right-0 max-h-[80vh] border-b border-line data-[state=closed]:-translate-y-full data-[state=open]:animate-slide-in-down',
        bottom:
          'bottom-0 left-0 right-0 max-h-[80vh] border-t border-line data-[state=closed]:translate-y-full data-[state=open]:animate-slide-in-up',
      },
    },
    defaultVariants: { side: 'right' },
  },
);

export interface DrawerContentProps
  extends
    React.ComponentPropsWithoutRef<typeof RadixDialog.Content>,
    VariantProps<typeof drawerVariants> {
  showClose?: boolean;
}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DrawerContentProps
>(function DrawerContent({ side, showClose = true, className, children, ...rest }, ref) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-surface-inverse/40 fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fade-in" />
      <RadixDialog.Content
        ref={ref}
        data-surface="default"
        className={cn(drawerVariants({ side }), className)}
        {...rest}
      >
        {showClose && (
          <RadixDialog.Close
            className="absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-sm text-ink-3 transition-colors hover:bg-surface-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
            aria-label="Close"
          >
            <X size={18} />
          </RadixDialog.Close>
        )}
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
});

export const DrawerHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function DrawerHeader({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5 border-b border-line p-6', className)}
        {...rest}
      />
    );
  },
);

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(function DrawerTitle({ className, ...rest }, ref) {
  return (
    <RadixDialog.Title
      ref={ref}
      className={cn('text-h3 font-semibold text-ink', className)}
      {...rest}
    />
  );
});

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(function DrawerDescription({ className, ...rest }, ref) {
  return (
    <RadixDialog.Description
      ref={ref}
      className={cn('text-body-sm text-ink-3', className)}
      {...rest}
    />
  );
});

export const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function DrawerFooter({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'mt-auto flex flex-col-reverse gap-2 border-t border-line p-6 sm:flex-row sm:justify-end',
          className,
        )}
        {...rest}
      />
    );
  },
);
