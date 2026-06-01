import * as React from 'react';
import { cn } from '@labmgm/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva('mx-auto w-full', {
  variants: {
    width: {
      prose: 'max-w-prose',
      default: 'max-w-container',
      wide: 'max-w-container-wide',
      full: 'max-w-none',
    },
    padding: {
      none: '',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8 sm:px-10',
    },
  },
  defaultVariants: { width: 'default', padding: 'md' },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

/** Centered content wrapper with brand max-widths. */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { as: Tag = 'div', width, padding, className, ...rest },
  ref,
) {
  return <Tag ref={ref} className={cn(containerVariants({ width, padding }), className)} {...rest} />;
});
