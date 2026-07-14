import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar as CalIcon } from 'lucide-react';
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
            'border-line bg-surface text-body text-ink inline-flex h-10 w-full items-center justify-between gap-2 rounded-md border px-3 transition-colors outline-none',
            'hover:border-line-strong focus-visible:ring-focus focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-offset-1',
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
          className="border-line bg-surface shadow-2 z-50 rounded-md border outline-none"
        >
          <Calendar mode="single" selected={current} onSelect={pick} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
