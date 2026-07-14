import * as React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { cn } from '@labmgm/utils';
import { buttonVariants, type ButtonProps } from '../Button/Button.js';

export const AlertDialog = RadixAlertDialog.Root;
export const AlertDialogTrigger = RadixAlertDialog.Trigger;

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Content>
>(function AlertDialogContent({ className, ...rest }, ref) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className="bg-surface-inverse/40 fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fade-in" />
      <RadixAlertDialog.Content
        ref={ref}
        data-surface="default"
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[480px] -translate-x-1/2 -translate-y-1/2 gap-4',
          'rounded-lg border border-line bg-surface p-6 text-ink shadow-3 focus:outline-none',
          'data-[state=open]:animate-scale-in',
          className,
        )}
        {...rest}
      />
    </RadixAlertDialog.Portal>
  );
});

export const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function AlertDialogHeader({ className, ...rest }, ref) {
  return <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...rest} />;
});

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Title>
>(function AlertDialogTitle({ className, ...rest }, ref) {
  return (
    <RadixAlertDialog.Title
      ref={ref}
      className={cn('text-h3 font-semibold text-ink', className)}
      {...rest}
    />
  );
});

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Description>
>(function AlertDialogDescription({ className, ...rest }, ref) {
  return (
    <RadixAlertDialog.Description
      ref={ref}
      className={cn('text-body-sm text-ink-3', className)}
      {...rest}
    />
  );
});

export const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function AlertDialogFooter({ className, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end',
        className,
      )}
      {...rest}
    />
  );
});

export interface AlertDialogActionProps
  extends
    React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Action>,
    Pick<ButtonProps, 'variant'> {}

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Action>,
  AlertDialogActionProps
>(function AlertDialogAction({ variant = 'primary', className, ...rest }, ref) {
  return (
    <RadixAlertDialog.Action
      ref={ref}
      className={cn(buttonVariants({ variant }), className)}
      {...rest}
    />
  );
});

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Cancel>,
  React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Cancel>
>(function AlertDialogCancel({ className, ...rest }, ref) {
  return (
    <RadixAlertDialog.Cancel
      ref={ref}
      className={cn(buttonVariants({ variant: 'secondary' }), className)}
      {...rest}
    />
  );
});
