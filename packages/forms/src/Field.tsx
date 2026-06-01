import * as React from 'react';
import { cn } from '@labmgm/utils';
import { Label } from './Label.js';

export interface FieldContextValue {
  id: string;
  helpId: string;
  errorId: string;
  invalid: boolean;
}

export const FieldCtx = React.createContext<FieldContextValue | null>(null);

export function useFieldContext(): FieldContextValue {
  const ctx = React.useContext(FieldCtx);
  if (!ctx) throw new Error('useFieldContext must be used inside a <Field>');
  return ctx;
}

/** Safe variant that returns null outside a <Field>. */
export function useOptionalFieldContext(): FieldContextValue | null {
  return React.useContext(FieldCtx);
}

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stable id; we derive helpId / errorId from this. */
  id?: string;
  /** Visible field label. */
  label?: React.ReactNode;
  /** Required indicator. */
  required?: boolean;
  /** Helper text (rendered when no error). */
  help?: React.ReactNode;
  /** Error message — sets invalid styling automatically. */
  error?: React.ReactNode;
}

/**
 * Wires Label + Input + help/error text together with proper aria-* attributes.
 *
 *   <Field label="Email" required help="We'll never share it" error={errors.email?.message}>
 *     <Input type="email" {...register('email')} />
 *   </Field>
 */
export const Field = React.forwardRef<HTMLDivElement, FieldProps>(function Field(
  { id, label, required, help, error, className, children, ...rest },
  ref,
) {
  const generated = React.useId();
  const fieldId = id ?? generated;
  const helpId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;
  const value = React.useMemo(
    () => ({ id: fieldId, helpId, errorId, invalid: !!error }),
    [fieldId, helpId, errorId, error],
  );
  return (
    <FieldCtx.Provider value={value}>
      <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...rest}>
        {label && (
          <Label htmlFor={fieldId} required={required}>
            {label}
          </Label>
        )}
        {children}
        {error ? (
          <FieldError id={errorId}>{error}</FieldError>
        ) : help ? (
          <FieldHelp id={helpId}>{help}</FieldHelp>
        ) : null}
      </div>
    </FieldCtx.Provider>
  );
});

export function FieldError({ id, className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      id={id}
      role="alert"
      className={cn('text-caption text-brand-red', className)}
      {...rest}
    />
  );
}

export function FieldHelp({ id, className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p id={id} className={cn('text-caption text-ink-3', className)} {...rest} />;
}
