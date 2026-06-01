import * as React from 'react';
import { cn } from '@labmgm/utils';

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20;

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: 'row' | 'col';
  gap?: Gap;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
}

const gapMap: Record<Gap, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
  20: 'gap-20',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
} as const;

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
} as const;

/**
 * Linear layout with consistent gap. `direction="col"` (default) stacks vertically; `row` stacks horizontally.
 * Helper `<VStack>` and `<HStack>` available for the common cases.
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(function Stack(
  {
    as: Tag = 'div',
    direction = 'col',
    gap = 4,
    align,
    justify,
    wrap,
    className,
    ...rest
  },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row',
        gapMap[gap],
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && 'flex-wrap',
        className,
      )}
      {...rest}
    />
  );
});

export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(function VStack(
  props,
  ref,
) {
  return <Stack ref={ref} {...props} direction="col" />;
});

export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(function HStack(
  props,
  ref,
) {
  return <Stack ref={ref} {...props} direction="row" />;
});
