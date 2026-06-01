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
      closeButton
      duration={4000}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'group pointer-events-auto flex gap-3 items-start w-[var(--width)] rounded-md border border-line bg-surface text-ink shadow-2 px-4 py-3 font-sans text-body-sm',
          title: 'font-semibold text-ink',
          description: 'text-ink-3 text-caption mt-1',
          icon: 'shrink-0 mt-0.5',
          actionButton: 'ml-auto bg-surface-inverse text-white px-2 py-1 rounded-sm text-caption',
          cancelButton: 'bg-surface-muted text-ink-2 px-2 py-1 rounded-sm text-caption',
          closeButton: 'absolute top-2 right-2 text-ink-3 hover:text-ink',
          success: 'bg-brand-green-50 border-brand-green/30 text-ink [&_[data-icon]]:text-brand-green',
          error: 'bg-brand-red-50 border-brand-red/30 text-ink [&_[data-icon]]:text-brand-red',
          warning: 'bg-brand-yellow-50 border-brand-yellow/40 text-ink [&_[data-icon]]:text-[#8a6d18]',
          info: 'bg-brand-blue-50 border-brand-blue/30 text-ink [&_[data-icon]]:text-brand-blue',
          loading: 'bg-surface border-line text-ink [&_[data-icon]]:text-brand-blue',
        },
      }}
      {...props}
    />
  );
}
