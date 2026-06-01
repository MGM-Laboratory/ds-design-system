import * as React from 'react';
import {
  FormProvider as RHFProvider,
  useForm,
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodTypeAny, infer as ZodInfer } from 'zod';

export const FormProvider = RHFProvider;

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
export function useMgmForm<TSchema extends ZodTypeAny>(
  schema: TSchema,
  options?: Omit<UseFormProps<ZodInfer<TSchema>>, 'resolver'>,
): UseFormReturn<ZodInfer<TSchema>> {
  return useForm<ZodInfer<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
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
