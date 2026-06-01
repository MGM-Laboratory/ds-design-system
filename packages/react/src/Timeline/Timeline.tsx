import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {}

export const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(function Timeline(
  { className, ...rest },
  ref,
) {
  return (
    <ol
      ref={ref}
      className={cn('relative space-y-6 border-l border-line pl-6', className)}
      {...rest}
    />
  );
});

export interface TimelineItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'title'> {
  title: React.ReactNode;
  time?: React.ReactNode;
  icon?: React.ReactNode;
}

export const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(function TimelineItem(
  { title, time, icon, className, children, ...rest },
  ref,
) {
  return (
    <li ref={ref} className={cn('relative', className)} {...rest}>
      <span className="absolute -left-[31px] top-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-bg ring-2 ring-line">
        {icon && <span className="text-ink">{icon}</span>}
      </span>
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="text-body-sm font-medium text-ink">{title}</h4>
          {time && <time className="text-caption text-ink-3">{time}</time>}
        </div>
        {children && <div className="text-body-sm text-ink-2">{children}</div>}
      </div>
    </li>
  );
});
