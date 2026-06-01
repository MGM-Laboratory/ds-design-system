import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar as CalIcon } from '@labmgm/icons';
import { cn } from '@labmgm/utils';
import { format } from 'date-fns';
import { Calendar } from './Calendar.js';

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface DateRangePickerProps {
  value?: DateRange;
  defaultValue?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  format?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function DateRangePicker({
  value,
  defaultValue,
  onChange,
  placeholder = 'Pick a date range',
  format: fmt = 'MMM d',
  disabled,
  className,
  id,
}: DateRangePickerProps) {
  const [internal, setInternal] = React.useState<DateRange | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function pick(next: DateRange | undefined) {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }

  const display = current?.from
    ? current.to
      ? `${format(current.from, fmt)} – ${format(current.to, fmt)}`
      : format(current.from, fmt)
    : placeholder;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          id={id}
          disabled={disabled}
          className={cn(
            'inline-flex h-10 w-full items-center justify-between gap-2 rounded-md border border-line bg-surface px-3 text-body text-ink outline-none transition-colors',
            'hover:border-line-strong focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:border-focus',
            'disabled:opacity-50',
            !current?.from && 'text-ink-4',
            className,
          )}
        >
          <span>{display}</span>
          <CalIcon size={16} className="text-ink-3" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={6}
          className="z-50 rounded-md border border-line bg-surface shadow-2 outline-none"
        >
          <Calendar
            mode="range"
            numberOfMonths={2}
            selected={current as unknown as { from: Date; to: Date }}
            onSelect={(range) => pick(range as DateRange | undefined)}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
