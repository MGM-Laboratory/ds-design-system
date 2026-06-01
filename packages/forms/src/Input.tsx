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
  { size = 'md', leading, trailing, invalid: invalidProp, className, id, 'aria-describedby': describedByProp, ...rest },
  ref,
) {
  const field = useOptionalFieldContext();
  const invalid = invalidProp ?? field?.invalid ?? false;
  const inputId = id ?? field?.id;
  const describedBy = [describedByProp, field?.invalid ? field.errorId : field?.helpId].filter(Boolean).join(' ') || undefined;

  if (leading || trailing) {
    return (
      <div
        className={cn(
          'flex items-stretch rounded-md border bg-surface transition-colors',
          'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-1 focus-within:border-focus',
          invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
          sizeMap[size],
        )}
      >
        {leading && (
          <span className="inline-flex items-center pl-3 text-ink-3">{leading}</span>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full bg-transparent px-3 outline-none placeholder:text-ink-4 text-ink',
            className,
          )}
          {...rest}
        />
        {trailing && (
          <span className="inline-flex items-center pr-3 text-ink-3">{trailing}</span>
        )}
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
        'block w-full rounded-md border bg-surface px-3 outline-none transition-colors',
        'placeholder:text-ink-4 text-ink',
        'focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:border-focus',
        invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
        sizeMap[size],
        className,
      )}
      {...rest}
    />
  );
});

