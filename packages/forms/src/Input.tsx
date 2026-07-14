import * as React from 'react';
import { cn } from '@labmgm/utils';
import { useOptionalFieldContext } from './Field.js';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  /** Force invalid styling without a Field wrapper. */
  invalid?: boolean;
}

const sizeMap = {
  sm: 'h-8 text-body-sm',
  md: 'h-10 text-body',
  lg: 'h-12 text-body-lg',
} as const;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'md',
    leading,
    trailing,
    invalid: invalidProp,
    className,
    id,
    'aria-describedby': describedByProp,
    ...rest
  },
  ref,
) {
  const field = useOptionalFieldContext();
  const invalid = invalidProp ?? field?.invalid ?? false;
  const inputId = id ?? field?.id;
  const describedBy =
    [describedByProp, field?.invalid ? field.errorId : field?.helpId].filter(Boolean).join(' ') ||
    undefined;

  if (leading || trailing) {
    return (
      <div
        className={cn(
          'bg-surface flex items-stretch rounded-md border transition-colors',
          'focus-within:ring-focus focus-within:border-focus focus-within:ring-2 focus-within:ring-offset-1',
          invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
          sizeMap[size],
        )}
      >
        {leading && <span className="text-ink-3 inline-flex items-center pl-3">{leading}</span>}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(
            'placeholder:text-ink-4 text-ink w-full bg-transparent px-3 outline-none',
            className,
          )}
          {...rest}
        />
        {trailing && <span className="text-ink-3 inline-flex items-center pr-3">{trailing}</span>}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      id={inputId}
      aria-invalid={invalid || undefined}
      aria-describedby={describedBy}
      className={cn(
        'bg-surface block w-full rounded-md border px-3 transition-colors outline-none',
        'placeholder:text-ink-4 text-ink',
        'focus-visible:ring-focus focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-offset-1',
        invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
        sizeMap[size],
        className,
      )}
      {...rest}
    />
  );
});
