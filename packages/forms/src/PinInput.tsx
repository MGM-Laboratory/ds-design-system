import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface PinInputProps {
  /** Number of digits. */
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  /** Mask the digits like a password. */
  mask?: boolean;
  className?: string;
}

export function PinInput({
  length = 6,
  value,
  defaultValue = '',
  onChange,
  onComplete,
  disabled,
  invalid,
  mask,
  className,
}: PinInputProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? (value ?? '') : internal;
  const refs = React.useRef<Array<HTMLInputElement | null>>([]);

  function update(next: string) {
    if (!isControlled) setInternal(next);
    onChange?.(next);
    if (next.length === length) onComplete?.(next);
  }

  function handleChange(i: number, raw: string) {
    const digit = raw.replace(/\D/g, '').slice(-1);
    if (!digit) return;
    const arr = current.split('');
    arr[i] = digit;
    const next = arr.join('').slice(0, length);
    update(next);
    if (i < length - 1) refs.current[i + 1]?.focus();
  }

  function handleKey(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace') {
      const arr = current.split('');
      if (arr[i]) {
        arr[i] = '';
        update(arr.join(''));
      } else if (i > 0) {
        refs.current[i - 1]?.focus();
      }
    }
    if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1]?.focus();
    if (e.key === 'ArrowRight' && i < length - 1) refs.current[i + 1]?.focus();
  }

  return (
    <div className={cn('inline-flex gap-2', className)} role="group" aria-label="One-time code">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type={mask ? 'password' : 'text'}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          value={current[i] ?? ''}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKey(i, e)}
          className={cn(
            'bg-surface text-body-lg text-ink h-12 w-10 rounded-md border text-center font-mono transition-colors outline-none',
            'focus-visible:ring-focus focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-offset-1',
            invalid ? 'border-brand-red' : 'border-line',
            disabled && 'opacity-50',
          )}
        />
      ))}
    </div>
  );
}
