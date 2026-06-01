import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from '@labmgm/icons';
import { cn } from '@labmgm/utils';
import { Button } from '../Button/Button.js';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  page: number;
  pageCount: number;
  /** Maximum numeric buttons to display (excluding chevrons + ellipses). */
  siblings?: number;
  onChange: (page: number) => void;
}

function buildRange(current: number, total: number, siblings: number): Array<number | 'ellipsis'> {
  const result: Array<number | 'ellipsis'> = [];
  if (total <= siblings * 2 + 5) {
    for (let i = 1; i <= total; i++) result.push(i);
    return result;
  }
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  result.push(1);
  if (left > 2) result.push('ellipsis');
  for (let i = left; i <= right; i++) result.push(i);
  if (right < total - 1) result.push('ellipsis');
  result.push(total);
  return result;
}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { page, pageCount, siblings = 1, onChange, className, ...rest },
  ref,
) {
  const items = buildRange(page, pageCount, siblings);
  return (
    <nav
      ref={ref}
      role="navigation"
      aria-label="Pagination"
      className={cn('inline-flex items-center gap-1', className)}
      {...rest}
    >
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </Button>
      {items.map((item, i) =>
        item === 'ellipsis' ? (
          <span key={`e-${i}`} className="px-1 text-ink-3" aria-hidden="true">
            <MoreHorizontal size={16} />
          </span>
        ) : (
          <Button
            key={item}
            variant={item === page ? 'primary' : 'ghost'}
            size="icon-sm"
            onClick={() => onChange(item)}
            aria-current={item === page ? 'page' : undefined}
            aria-label={`Go to page ${item}`}
          >
            {item}
          </Button>
        ),
      )}
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => onChange(Math.min(pageCount, page + 1))}
        disabled={page >= pageCount}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </Button>
    </nav>
  );
});
