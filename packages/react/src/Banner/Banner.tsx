import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'inverse';
  /** If provided, renders a dismiss button. */
  onDismiss?: () => void;
  action?: React.ReactNode;
}

const toneMap = {
  info: 'bg-brand-blue text-white',
  success: 'bg-brand-green text-white',
  warning: 'bg-brand-yellow text-ink',
  danger: 'bg-brand-red text-white',
  inverse: 'bg-ink text-white',
} as const;

/** Wide, top-of-page announcement banner. */
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(function Banner(
  { tone = 'info', action, onDismiss, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="status"
      className={cn(
        'flex flex-wrap items-center justify-center gap-3 px-4 py-2 text-body-sm',
        toneMap[tone],
        className,
      )}
      {...rest}
    >
      <span className="text-center">{children}</span>
      {action && <span className="shrink-0">{action}</span>}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-sm hover:bg-black/10"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
});
