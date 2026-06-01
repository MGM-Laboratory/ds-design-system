# `@labmgm/forms`

The full forms toolkit for MGM Laboratory — input primitives, React Hook Form integration, Zod schema helpers, and a `<Wizard>` for multi-step flows.

```bash
pnpm add @labmgm/forms
```

## Quick example

```tsx
import { Form, FormProvider, useMgmForm, Field, Input, Button } from '@labmgm/react';
import { emailSchema, z } from '@labmgm/forms/schemas';

const schema = z.object({ email: emailSchema });

function SignupForm() {
  const form = useMgmForm(schema, { defaultValues: { email: '' } });
  return (
    <FormProvider {...form}>
      <Form onSubmit={form.handleSubmit(({ email }) => console.log(email))}>
        <Field label="Email" required error={form.formState.errors.email?.message}>
          <Input type="email" placeholder="you@labmgm.com" {...form.register('email')} />
        </Field>
        <Button type="submit">Sign up</Button>
      </Form>
    </FormProvider>
  );
}
```

## Primitives

`Label`, `Field`, `FieldError`, `FieldHelp`, `Input`, `Textarea`, `SearchInput`, `NumberInput`, `PinInput`, `Checkbox`, `CheckboxGroup`, `Radio`, `RadioGroup`, `Switch`, `Slider`, `Select`, `Combobox`, `MultiSelect`, `TagInput`, `FileDropzone`, `ColorPicker`.

## Multi-step `<Wizard>`

```tsx
import { Wizard, WizardStep, StepRail, useWizard } from '@labmgm/forms';

<Wizard defaultCurrent={0}>
  <WizardStep title="Basics">…</WizardStep>
  <WizardStep title="Files">…</WizardStep>
  <WizardStep title="Review">…</WizardStep>
</Wizard>
```

The `<StepRail>` reads from the same context and supports navigable steps.

## Schemas

```ts
import { emailSchema, urlSchema, phoneSchema, slugSchema, passwordSchema } from '@labmgm/forms/schemas';
```
