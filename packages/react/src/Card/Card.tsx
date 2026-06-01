import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@labmgm/utils';

export const cardVariants = cva(
  ['rounded-lg overflow-hidden transition-all duration-200 ease-out-soft'],
  {
    variants: {
      variant: {
        outlined: 'bg-surface border border-line',
        flat: 'bg-surface',
        tinted: 'bg-surface-muted border border-line',
        'tint-blue': 'bg-brand-blue-50 border border-brand-blue/20',
        'tint-yellow': 'bg-brand-yellow-50 border border-brand-yellow/30',
        'tint-red': 'bg-brand-red-50 border border-brand-red/20',
        'tint-green': 'bg-brand-green-50 border border-brand-green/20',
        inverse: 'bg-surface-inverse text-white border border-white/10',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      interactive: {
        true: 'cursor-pointer hover:-translate-y-px hover:shadow-2 focus-visible:-translate-y-px focus-visible:shadow-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
      },
    },
    defaultVariants: { variant: 'outlined', padding: 'md' },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { as: Tag = 'div', variant, padding, interactive, className, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...rest}
    />
  );
});

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CardHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...rest} />;
  },
);

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  function CardTitle({ className, ...rest }, ref) {
    return <h3 ref={ref} className={cn('text-h3 font-semibold text-ink', className)} {...rest} />;
  },
);

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  function CardDescription({ className, ...rest }, ref) {
    return <p ref={ref} className={cn('text-body-sm text-ink-3', className)} {...rest} />;
  },
);

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CardContent({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('text-body text-ink-2', className)} {...rest} />;
  },
);

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CardFooter({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cn('flex items-center justify-between gap-3 pt-4', className)} {...rest} />
    );
  },
);
