import * as React from 'react';
import { cn } from '@labmgm/utils';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: Cols;
  /** Responsive cols: `{ base: 1, md: 2, lg: 3 }`. */
  responsive?: Partial<Record<'base' | 'sm' | 'md' | 'lg' | 'xl', Cols>>;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  gapX?: number;
  gapY?: number;
}

const colsClass: Record<Cols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const responsiveColsClass = {
  sm: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    6: 'sm:grid-cols-6',
    12: 'sm:grid-cols-12',
  },
  md: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    6: 'md:grid-cols-6',
    12: 'md:grid-cols-12',
  },
  lg: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    6: 'lg:grid-cols-6',
    12: 'lg:grid-cols-12',
  },
  xl: {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    6: 'xl:grid-cols-6',
    12: 'xl:grid-cols-12',
  },
} as const;

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { as: Tag = 'div', cols = 1, responsive, gap = 4, gapX, gapY, className, ...rest },
  ref,
) {
  const responsiveClasses: string[] = [];
  if (responsive) {
    if (responsive.base) responsiveClasses.push(colsClass[responsive.base]);
    for (const bp of ['sm', 'md', 'lg', 'xl'] as const) {
      const v = responsive[bp];
      if (v) {
        const mapping = responsiveColsClass[bp] as Record<number, string | undefined>;
        const cls = mapping[v];
        if (cls) responsiveClasses.push(cls);
      }
    }
  }
  return (
    <Tag
      ref={ref}
      className={cn(
        'grid',
        responsive ? responsiveClasses.join(' ') : colsClass[cols],
        gapX ? `gap-x-${gapX}` : '',
        gapY ? `gap-y-${gapY}` : '',
        !gapX && !gapY ? `gap-${gap}` : '',
        className,
      )}
      {...rest}
    />
  );
});
