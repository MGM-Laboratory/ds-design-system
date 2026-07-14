import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  inline?: boolean;
  gap?: number;
}

/**
 * Flexbox primitive. Lower-level than <Stack>: exposes every option but does no opinionated defaults.
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(function Flex(
  { as: Tag = 'div', direction = 'row', align, justify, wrap, inline, gap, className, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        inline ? 'inline-flex' : 'flex',
        `flex-${direction}`,
        align && `items-${align}`,
        justify && `justify-${justify}`,
        wrap && 'flex-wrap',
        gap != null && `gap-${gap}`,
        className,
      )}
      {...rest}
    />
  );
});
