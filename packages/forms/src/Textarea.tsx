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
      aria-describedby={[describedByProp, field?.invalid ? field.errorId : field?.helpId].filter(Boolean).join(' ') || undefined}
      className={cn(
        'block w-full min-h-[88px] resize-y rounded-md border bg-surface px-3 py-2 text-body text-ink outline-none transition-colors',
        'placeholder:text-ink-4',
        'focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:border-focus',
        invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
        className,
      )}
      {...rest}
    />
  );
});
