import * as React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@labmgm/utils';

export const alertVariants = cva(
  [
    'relative flex items-start gap-3 rounded-md border p-4',
    'text-body-sm',
  ],
  {
    variants: {
      tone: {
        // Literal text colors so Alerts read correctly even when nested
        // inside an inverse Surface (their backgrounds are always light).
        info: 'border-brand-blue/20 bg-brand-blue-50 text-[#0e1116]',
        success: 'border-brand-green/20 bg-brand-green-50 text-[#0e1116]',
        warning: 'border-brand-yellow/30 bg-brand-yellow-50 text-[#0e1116]',
        danger: 'border-brand-red/20 bg-brand-red-50 text-[#0e1116]',
        neutral: 'border-[#ececea] bg-[#f7f7f5] text-[#0e1116]',
      },
    },
    defaultVariants: { tone: 'info' },
  },
);

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: AlertCircle,
  neutral: Info,
} as const;

const iconColorMap = {
  info: 'text-brand-blue',
  success: 'text-brand-green',
  warning: 'text-[#8a6d18]',
  danger: 'text-brand-red',
  neutral: 'text-ink-3',
} as const;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Show the tone-appropriate icon. @default true */
  showIcon?: boolean;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { tone = 'info', showIcon = true, className, children, ...rest },
  ref,
) {
  const Icon = iconMap[tone ?? 'info'];
  return (
    <div ref={ref} role="alert" data-surface="default" className={cn(alertVariants({ tone }), className)} {...rest}>
      {showIcon && (
        <Icon
          size={18}
          strokeWidth={2.25}
          className={cn('mt-0.5 shrink-0', iconColorMap[tone ?? 'info'])}
        />
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
});

export const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  function AlertTitle({ className, ...rest }, ref) {
    return <h5 ref={ref} className={cn('mb-1 font-semibold leading-none', className)} {...rest} />;
  },
);

export const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function AlertDescription({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('text-[#3b4150]', className)} {...rest} />;
  },
);
