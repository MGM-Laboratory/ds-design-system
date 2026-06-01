import * as React from 'react';
import { DayPicker, type DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@labmgm/utils';

export type CalendarProps = DayPickerProps;

/**
 * MGM-styled day picker. All `react-day-picker` props pass through (mode="single" / "range" / "multiple").
 */
export function Calendar({ className, classNames, ...rest }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays
      className={cn('p-3 font-sans text-body-sm text-ink', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-4',
        month: 'space-y-3',
        caption: 'flex items-center justify-between px-1',
        caption_label: 'text-body-sm font-semibold text-ink',
        nav: 'flex items-center gap-1',
        button_previous: cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-sm text-ink-3 hover:bg-surface-muted hover:text-ink',
        ),
        button_next: cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-sm text-ink-3 hover:bg-surface-muted hover:text-ink',
        ),
        weeks: 'w-full',
        weekday: 'text-caption text-ink-3 font-medium w-9 text-center',
        day: 'p-0',
        day_button:
          'inline-flex h-9 w-9 items-center justify-center rounded-sm text-body-sm text-ink hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
        today: 'font-semibold text-brand-blue',
        selected: '!bg-ink !text-white',
        outside: 'text-ink-4',
        disabled: 'text-ink-4 opacity-50',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === 'left' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />,
      }}
      {...rest}
    />
  );
}
