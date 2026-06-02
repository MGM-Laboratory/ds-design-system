# `@labmgm/forms`

> The full forms toolkit for MGM Laboratory.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fforms?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/forms)

Field primitives, **React Hook Form + Zod** wiring, a polished `<Field>` wrapper, and a `<Wizard>` for multi-step flows.

```bash
pnpm add @labmgm/forms
```

> [Storybook (Forms / Primitives)](https://mgm-laboratory.github.io/ds-design-system/?path=/docs/forms-primitives--docs) · [Source](./src)

---

## Quick example — validated signup form

```tsx
import { Form, FormProvider, useMgmForm, Field, Input } from '@labmgm/forms';
import { emailSchema, passwordSchema, z } from '@labmgm/forms/schemas';
import { Button } from '@labmgm/react';
import { toast } from '@labmgm/toast';

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export function SignupForm() {
  const form = useMgmForm(schema, { defaultValues: { email: '', password: '' } });
  return (
    <FormProvider {...form}>
      <Form
        onSubmit={form.handleSubmit(({ email }) => toast.success(`Welcome, ${email}`))}
        className="space-y-4 max-w-md"
      >
        <Field label="Email" required error={form.formState.errors.email?.message}>
          <Input type="email" placeholder="you@labmgm.com" {...form.register('email')} />
        </Field>
        <Field
          label="Password"
          required
          help="≥8 chars, with upper/lower/number."
          error={form.formState.errors.password?.message}
        >
          <Input type="password" {...form.register('password')} />
        </Field>
        <Button type="submit" fullWidth>Create account</Button>
      </Form>
    </FormProvider>
  );
}
```

---

## Primitive components

| Component | Purpose |
|---|---|
| `Label` | `<label>` with optional `required` asterisk |
| `Field` | Wraps Label + input + help/error, wires `aria-invalid` / `aria-describedby` |
| `FieldError` · `FieldHelp` | Sub-components for custom layouts |
| `Input` | Text/email/url input with optional `leading` / `trailing` slots |
| `Textarea` | Multi-line input |
| `SearchInput` | Pre-wired with search icon + clear button |
| `NumberInput` | Spinner with min/max/step, optional `controls={false}` |
| `PinInput` | One-time-code input (default 6 digits) |
| `Checkbox` · `CheckboxGroup` | Radix-backed, label + description slots |
| `Radio` · `RadioGroup` | Radix-backed |
| `Switch` | Radix-backed toggle |
| `Slider` | Radix-backed range |
| `Select` | Native-feeling Radix Select |
| `Combobox` | Filterable single-select (cmdk) |
| `MultiSelect` | Filterable multi-select with chip display |
| `TagInput` | Free-form tag entry — Enter/comma to add |
| `FileDropzone` | Drag-and-drop file picker with `accept` / `maxSize` |
| `ColorPicker` | Brand presets + native color picker fallback |

---

## `useMgmForm()` — React Hook Form + Zod

A thin wrapper around `useForm()` that wires the `zodResolver` for you:

```tsx
import { useMgmForm } from '@labmgm/forms';
import { z } from '@labmgm/forms/schemas';

const schema = z.object({ name: z.string().min(2) });
const form = useMgmForm(schema, { defaultValues: { name: '' } });
//    ^? UseFormReturn<{ name: string }>
```

The returned object has the full React Hook Form API. Validation is automatic.

---

## Multi-step `<Wizard>` + `<StepRail>`

```tsx
import { Wizard, WizardStep, StepRail, useWizard } from '@labmgm/forms';
import { Button } from '@labmgm/react';

<Wizard defaultCurrent={0}>
  <WizardStep><Step title="Basics" /></WizardStep>
  <WizardStep><Step title="Files" /></WizardStep>
  <WizardStep><Step title="Review" /></WizardStep>
</Wizard>

function Step({ title }) {
  const w = useWizard();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-[200px_1fr]">
      <StepRail
        navigable
        steps={[
          { title: 'Basics', description: 'Name and category' },
          { title: 'Files', description: 'Upload assets' },
          { title: 'Review', description: 'Confirm details' },
        ]}
      />
      <div>
        <h2 className="text-h2">{title}</h2>
        <div className="flex justify-between mt-6">
          <Button variant="ghost" onClick={w.prev} disabled={w.isFirst}>Back</Button>
          <Button onClick={w.next} disabled={w.isLast}>
            {w.isLast ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
```

`useWizard()` exposes `{ current, count, next, prev, goTo, isFirst, isLast, setCurrent }`.

---

## Zod schemas

```ts
import {
  emailSchema,
  urlSchema,
  phoneSchema,
  slugSchema,
  passwordSchema,
  nonEmptyString,
  z,
} from '@labmgm/forms/schemas';

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,        // ≥8 chars, with upper/lower/number
  slug: slugSchema,                // lowercase-with-hyphens
  url: urlSchema,
  phone: phoneSchema,
  name: nonEmptyString('Name'),    // configurable error message
});
```

---

## See also

- [`@labmgm/react`](../react) — Button, Card, etc. (the form examples above use these)
- [`@labmgm/calendar`](../calendar) — DatePicker, DateRangePicker, TimePicker
- [`@labmgm/toast`](../toast) — feedback on submit

## License

MIT © MGM Laboratory
