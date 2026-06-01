import * as React from 'react';
import { Toaster as SonnerToaster, type ToasterProps as SonnerToasterProps } from 'sonner';

export type ToasterProps = SonnerToasterProps;

/**
 * Mount once at the root of your app. Use `toast(message)` (or `.success`, `.error`, …) from anywhere.
 */
export function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      position="bottom-right"
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        classNames: {
          toast:
            'rounded-md border border-line bg-surface text-ink shadow-2 px-4 py-3 font-sans text-body-sm',
          title: 'font-semibold text-ink',
          description: 'text-ink-3 text-caption mt-1',
          actionButton: 'bg-ink text-white px-2 py-1 rounded-sm text-caption',
          cancelButton: 'bg-surface-muted text-ink-2 px-2 py-1 rounded-sm text-caption',
          success: '!bg-brand-green-50 !border-brand-green/20 !text-ink',
          error: '!bg-brand-red-50 !border-brand-red/20 !text-ink',
          warning: '!bg-brand-yellow-50 !border-brand-yellow/30 !text-ink',
          info: '!bg-brand-blue-50 !border-brand-blue/20 !text-ink',
        },
      }}
      {...props}
    />
  );
}
