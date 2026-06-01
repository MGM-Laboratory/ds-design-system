import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface CalloutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

const toneClasses = {
  info: 'border-l-brand-blue bg-brand-blue-50',
  success: 'border-l-brand-green bg-brand-green-50',
  warning: 'border-l-brand-yellow bg-brand-yellow-50',
  danger: 'border-l-brand-red bg-brand-red-50',
  neutral: 'border-l-line-strong bg-surface-muted',
} as const;

/** Bauhaus-style sidebar callout, often used inside long-form content. */
export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(function Callout(
  { tone = 'info', title, icon, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex gap-3 rounded-r-md border-l-4 px-4 py-3 text-body-sm text-ink-2',
        toneClasses[tone],
        className,
      )}
      {...rest}
    >
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <div className="flex-1">
        {title && <div className="mb-1 font-semibold text-ink">{title}</div>}
        {children}
      </div>
    </div>
  );
});
