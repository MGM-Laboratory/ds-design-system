import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface TimePickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  step?: number;
  disabled?: boolean;
  className?: string;
  id?: string;
}

/** Simple native time input wrapped in MGM styling. For full hour/minute scroll wheels, see @labmgm/forms. */
export function TimePicker({
  value,
  defaultValue,
  onChange,
  step = 60,
  disabled,
  className,
  id,
}: TimePickerProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? '');
  const isControlled = value !== undefined;
  const current = isControlled ? (value ?? '') : internal;

  return (
    <input
      id={id}
      type="time"
      value={current}
      step={step}
      disabled={disabled}
      onChange={(e) => {
        const next = e.target.value;
        if (!isControlled) setInternal(next);
        onChange?.(next);
      }}
      className={cn(
        'border-line bg-surface text-body text-ink inline-flex h-10 rounded-md border px-3 transition-colors outline-none',
        'hover:border-line-strong focus-visible:ring-focus focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-offset-1',
        'font-mono tabular-nums disabled:opacity-50',
        className,
      )}
    />
  );
}
