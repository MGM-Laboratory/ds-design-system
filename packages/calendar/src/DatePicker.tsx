import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar as CalIcon } from '@labmgm/icons';
import { cn } from '@labmgm/utils';
import { format } from 'date-fns';
import { Calendar } from './Calendar.js';

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  format?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function DatePicker({
  value,
  defaultValue,
  onChange,
  placeholder = 'Pick a date',
  format: fmt = 'MMM d, yyyy',
  disabled,
  className,
  id,
}: DatePickerProps) {
  const [internal, setInternal] = React.useState<Date | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function pick(next: Date | undefined) {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }

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
            !current && 'text-ink-4',
            className,
          )}
        >
          <span>{current ? format(current, fmt) : placeholder}</span>
          <CalIcon size={16} className="text-ink-3" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={6}
          className="z-50 rounded-md border border-line bg-surface shadow-2 outline-none"
        >
          <Calendar mode="single" selected={current} onSelect={pick} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
