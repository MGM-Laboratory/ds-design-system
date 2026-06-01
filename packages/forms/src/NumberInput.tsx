import * as React from 'react';
import { Minus, Plus } from '@labmgm/icons';
import { cn } from '@labmgm/utils';
import { Input, type InputProps } from './Input.js';

export interface NumberInputProps extends Omit<InputProps, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  /** Show – / + buttons. */
  controls?: boolean;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput(
  { value, defaultValue, min, max, step = 1, onChange, controls = true, className, ...rest },
  ref,
) {
  const [internal, setInternal] = React.useState<number>(defaultValue ?? 0);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function update(next: number) {
    let clamped = next;
    if (min !== undefined) clamped = Math.max(min, clamped);
    if (max !== undefined) clamped = Math.min(max, clamped);
    if (!isControlled) setInternal(clamped);
    onChange?.(clamped);
  }

  if (!controls) {
    return (
      <Input
        ref={ref}
        type="number"
        value={current}
        min={min}
        max={max}
        step={step}
        onChange={(e) => update(Number(e.target.value))}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <div className={cn('inline-flex items-stretch rounded-md border border-line bg-surface', className)}>
      <button
        type="button"
        aria-label="Decrement"
        onClick={() => update(current - step)}
        className="inline-flex h-10 w-10 items-center justify-center text-ink-3 hover:bg-surface-muted hover:text-ink"
        disabled={min !== undefined && current <= min}
      >
        <Minus size={16} />
      </button>
      <input
        ref={ref}
        type="number"
        value={current}
        min={min}
        max={max}
        step={step}
        onChange={(e) => update(Number(e.target.value))}
        className="h-10 w-16 border-x border-line bg-transparent text-center font-mono tabular-nums text-body text-ink outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />
      <button
        type="button"
        aria-label="Increment"
        onClick={() => update(current + step)}
        className="inline-flex h-10 w-10 items-center justify-center text-ink-3 hover:bg-surface-muted hover:text-ink"
        disabled={max !== undefined && current >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
});
