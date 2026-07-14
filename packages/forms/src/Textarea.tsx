import * as React from 'react';
import { cn } from '@labmgm/utils';
import { useOptionalFieldContext } from './Field.js';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid: invalidProp, className, id, 'aria-describedby': describedByProp, ...rest },
  ref,
) {
  const field = useOptionalFieldContext();
  const invalid = invalidProp ?? field?.invalid ?? false;
  return (
    <textarea
      ref={ref}
      id={id ?? field?.id}
      aria-invalid={invalid || undefined}
      aria-describedby={
        [describedByProp, field?.invalid ? field.errorId : field?.helpId]
          .filter(Boolean)
          .join(' ') || undefined
      }
      className={cn(
        'bg-surface text-body text-ink block min-h-[88px] w-full resize-y rounded-md border px-3 py-2 transition-colors outline-none',
        'placeholder:text-ink-4',
        'focus-visible:ring-focus focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-offset-1',
        invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
        className,
      )}
      {...rest}
    />
  );
});
