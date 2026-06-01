import * as React from 'react';
import { cn } from '@labmgm/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const sectionVariants = cva('w-full', {
  variants: {
    padding: {
      none: '',
      sm: 'py-10',
      md: 'py-16 sm:py-20',
      lg: 'py-24 sm:py-32',
      xl: 'py-32 sm:py-40',
    },
    tone: {
      default: 'bg-bg text-ink',
      muted: 'bg-surface-muted text-ink',
      inverse: 'bg-surface-inverse text-ink',
    },
  },
  defaultVariants: { padding: 'lg', tone: 'default' },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

/**
 * Vertical section with brand-correct padding. Set `tone="inverse"` to switch surfaces.
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { as: Tag = 'section', padding, tone, className, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref}
      data-surface={tone === 'default' || !tone ? undefined : tone}
      className={cn(sectionVariants({ padding, tone }), className)}
      {...rest}
    />
  );
});
