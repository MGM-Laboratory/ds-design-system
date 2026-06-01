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
        // Toasts mount in a body-level Sonner portal. If a consumer toggled
        // body[data-surface="inverse"], CSS-variable-routed classes like
        // `text-ink` would flip to white on the toast's own light tint.
        // Use literal hex colors so toasts always read correctly regardless
        // of the surrounding scope.
        classNames: {
          toast:
            'group pointer-events-auto flex gap-3 items-start w-[var(--width)] rounded-md border border-[#ececea] bg-white text-[#0e1116] shadow-2 px-4 py-3 font-sans text-body-sm',
          title: 'font-semibold text-[#0e1116]',
          description: 'text-[#6b7280] text-caption mt-1',
          icon: 'shrink-0 mt-0.5',
          actionButton: 'ml-auto bg-[#0e1116] text-white px-2 py-1 rounded-sm text-caption',
          cancelButton: 'bg-[#f7f7f5] text-[#3b4150] px-2 py-1 rounded-sm text-caption',
          closeButton: 'absolute top-2 right-2 text-[#6b7280] hover:text-[#0e1116]',
          success: 'bg-brand-green-50 border-brand-green/30 text-[#0e1116] [&_[data-icon]]:text-brand-green',
          error: 'bg-brand-red-50 border-brand-red/30 text-[#0e1116] [&_[data-icon]]:text-brand-red',
          warning: 'bg-brand-yellow-50 border-brand-yellow/40 text-[#0e1116] [&_[data-icon]]:text-[#8a6d18]',
          info: 'bg-brand-blue-50 border-brand-blue/30 text-[#0e1116] [&_[data-icon]]:text-brand-blue',
          loading: 'bg-white border-[#ececea] text-[#0e1116] [&_[data-icon]]:text-brand-blue',
        },
      }}
      {...props}
    />
  );
}
