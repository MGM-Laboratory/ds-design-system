import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: 'plain' | 'divided' | 'bullet' | 'number';
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(function List(
  { variant = 'plain', className, ...rest },
  ref,
) {
  const Tag: 'ul' | 'ol' = variant === 'number' ? 'ol' : 'ul';
  const Comp = Tag as 'ul';
  return (
    <Comp
      ref={ref as React.Ref<HTMLUListElement>}
      className={cn(
        'text-body text-ink-2',
        variant === 'bullet' && 'list-disc space-y-1 pl-5',
        variant === 'number' && 'list-decimal space-y-1 pl-5',
        variant === 'divided' && 'divide-y divide-line [&>li]:py-3',
        variant === 'plain' && 'space-y-1',
        className,
      )}
      {...rest}
    />
  );
});

export const ListItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  function ListItem({ className, ...rest }, ref) {
    return <li ref={ref} className={cn(className)} {...rest} />;
  },
);
