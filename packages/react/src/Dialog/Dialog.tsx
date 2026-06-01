import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@labmgm/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogClose = RadixDialog.Close;

const dialogContentVariants = cva(
  [
    'fixed left-[50%] top-[50%] z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4',
    'rounded-lg border border-line bg-surface p-6 text-ink shadow-3',
    'focus:outline-none',
    'data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-in',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-[480px]',
        md: 'max-w-[560px]',
        lg: 'max-w-[720px]',
        xl: 'max-w-[920px]',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixDialog.Content>,
    VariantProps<typeof dialogContentVariants> {
  /** Render a close (✕) button in the top-right. @default true */
  showClose?: boolean;
}

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DialogContentProps
>(function DialogContent({ size, showClose = true, className, children, ...rest }, ref) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay
        className={cn(
          'fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm',
          'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-in',
        )}
      />
      <RadixDialog.Content ref={ref} className={cn(dialogContentVariants({ size }), className)} {...rest}>
        {children}
        {showClose && (
          <RadixDialog.Close
            className="absolute right-4 top-4 rounded-sm text-ink-3 transition-colors hover:bg-surface-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 h-7 w-7 inline-flex items-center justify-center"
            aria-label="Close"
          >
            <X size={18} />
          </RadixDialog.Close>
        )}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
});

export const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function DialogHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...rest} />;
  },
);

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(function DialogTitle({ className, ...rest }, ref) {
  return <RadixDialog.Title ref={ref} className={cn('text-h3 font-semibold text-ink', className)} {...rest} />;
});

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(function DialogDescription({ className, ...rest }, ref) {
  return (
    <RadixDialog.Description
      ref={ref}
      className={cn('text-body-sm text-ink-3', className)}
      {...rest}
    />
  );
});

export const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function DialogFooter({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2', className)}
        {...rest}
      />
    );
  },
);
