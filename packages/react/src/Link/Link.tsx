import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@labmgm/utils';

export const linkVariants = cva(
  [
    'inline-flex items-center gap-1 transition-colors duration-200 ease-out-soft',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:rounded-sm',
  ],
  {
    variants: {
      tone: {
        default: 'text-brand-blue hover:text-brand-blue/80',
        muted: 'text-ink-2 hover:text-ink',
        inverse: 'text-white hover:text-white/80',
      },
      underline: {
        always: 'underline underline-offset-[3px] decoration-from-font',
        hover: 'no-underline hover:underline underline-offset-[3px]',
        none: 'no-underline',
      },
    },
    defaultVariants: { tone: 'default', underline: 'hover' },
  },
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
  asChild?: boolean;
  /** Open in new tab. Automatically adds `rel="noopener noreferrer"`. */
  external?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { asChild, tone, underline, external, className, target, rel, children, ...rest },
  ref,
) {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      ref={ref}
      target={external ? '_blank' : target}
      rel={external ? 'noopener noreferrer' : rel}
      className={cn(linkVariants({ tone, underline }), className)}
      {...rest}
    >
      {children}
    </Comp>
  );
});
