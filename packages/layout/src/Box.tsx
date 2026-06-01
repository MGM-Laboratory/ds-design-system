import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * A polymorphic <div>. Use when you want a styled wrapper without semantic meaning.
 * Prefer <Stack>, <Grid>, <Flex>, <Container>, or <Section> when their semantics fit.
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(function Box(
  { as: Tag = 'div', className, ...rest },
  ref,
) {
  return <Tag ref={ref} className={cn(className)} {...rest} />;
});
