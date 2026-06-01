import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@labmgm/utils';

export const badgeVariants = cva(
  [
    'inline-flex items-center gap-1 whitespace-nowrap select-none',
    'font-medium tracking-tight',
    'border',
  ],
  {
    variants: {
      tone: {
        neutral: 'bg-surface-muted text-ink-2 border-line',
        info: 'bg-brand-blue-50 text-brand-blue border-brand-blue/20',
        success: 'bg-brand-green-50 text-brand-green border-brand-green/20',
        warning: 'bg-brand-yellow-50 text-[#8a6d18] border-brand-yellow/30',
        danger: 'bg-brand-red-50 text-brand-red border-brand-red/20',
        outline: 'bg-transparent text-ink border-line',
        solid: 'bg-surface-inverse text-white border-surface-inverse',
        'solid-blue': 'bg-brand-blue text-white border-brand-blue',
        'solid-yellow': 'bg-brand-yellow text-[#0e1116] border-brand-yellow',
        'solid-red': 'bg-brand-red text-white border-brand-red',
        'solid-green': 'bg-brand-green text-white border-brand-green',
      },
      size: {
        sm: 'text-[11px] leading-none px-1.5 py-1',
        md: 'text-caption px-2 py-1',
        lg: 'text-body-sm px-2.5 py-1.5',
      },
      shape: {
        pill: 'rounded-full',
        square: 'rounded-sm',
      },
      uppercase: {
        true: 'uppercase tracking-[0.05em]',
      },
    },
    defaultVariants: { tone: 'neutral', size: 'md', shape: 'pill' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone, size, shape, uppercase, className, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ tone, size, shape, uppercase }), className)}
      {...rest}
    />
  );
});
