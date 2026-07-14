import * as React from 'react';
import {
  useForm,
  type FieldValues,
  type Resolver,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

// Preserve React Hook Form's own declaration rather than baking the workspace's
// installed version into our emitted .d.ts file.
export { FormProvider } from 'react-hook-form';

/**
 * Wrapper around React Hook Form that pre-wires the Zod resolver. Use this for any form
 * with validation.
 *
 *   const schema = z.object({ email: z.string().email() });
 *   const form = useMgmForm(schema, { defaultValues: { email: '' } });
 *
 *   <FormProvider {...form}>
 *     <Form onSubmit={form.handleSubmit(onSubmit)}>
 *       <Field label="Email"><Input {...form.register('email')} /></Field>
 *     </Form>
 *   </FormProvider>
 */
type FormValues<TSchema extends z.ZodType> = z.output<TSchema> & FieldValues;

export function useMgmForm<TSchema extends z.ZodType>(
  schema: TSchema,
  options?: Omit<UseFormProps<FormValues<TSchema>>, 'resolver'>,
): UseFormReturn<FormValues<TSchema>> {
  return useForm<FormValues<TSchema>>({
    ...options,
    // Resolver v5 detects Zod 3 and Zod 4 at runtime. Its overloads use separate
    // version-specific types, so expose the shared inferred form-value contract here.
    resolver: zodResolver(schema as never) as Resolver<FormValues<TSchema>>,
  });
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(function Form(
  { className, ...rest },
  ref,
) {
  return <form ref={ref} noValidate className={className} {...rest} />;
});

export type { FieldValues, UseFormReturn };
