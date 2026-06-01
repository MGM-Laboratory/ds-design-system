import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface CalloutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

// Light backgrounds + literal dark text so callouts read correctly even
// when nested inside an inverse Surface.
const toneClasses = {
  info: 'border-l-brand-blue bg-brand-blue-50',
  success: 'border-l-brand-green bg-brand-green-50',
  warning: 'border-l-brand-yellow bg-brand-yellow-50',
  danger: 'border-l-brand-red bg-brand-red-50',
  neutral: 'border-l-[#d8d8d2] bg-[#f7f7f5]',
} as const;

/** Bauhaus-style sidebar callout, often used inside long-form content. */
export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(function Callout(
  { tone = 'info', title, icon, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      data-surface="default"
      className={cn(
        'flex gap-3 rounded-r-md border-l-4 px-4 py-3 text-body-sm text-[#3b4150]',
        toneClasses[tone],
        className,
      )}
      {...rest}
    >
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <div className="flex-1">
        {title && <div className="mb-1 font-semibold text-[#0e1116]">{title}</div>}
        {children}
      </div>
    </div>
  );
});
