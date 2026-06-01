'use client';

import { Container, Section, Stack, Grid } from '@labmgm/layout';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@labmgm/react';
import {
  Form,
  FormProvider,
  useMgmForm,
  Field,
  Input,
  Textarea,
  SearchInput,
  NumberInput,
  PinInput,
  Checkbox,
  Switch,
  Slider,
  Select,
  Combobox,
  MultiSelect,
  TagInput,
  FileDropzone,
  ColorPicker,
  RadioGroup,
  Radio,
  Wizard,
  WizardStep,
  StepRail,
  useWizard,
} from '@labmgm/forms';
import { emailSchema, passwordSchema, z } from '@labmgm/forms/schemas';
import { toast } from '@labmgm/toast';

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export default function FormsPage() {
  const form = useMgmForm(schema, { defaultValues: { email: '', password: '' } });

  return (
    <Section padding="lg">
      <Container>
        <Stack gap={10}>
          <Stack gap={2}>
            <span className="text-eyebrow uppercase text-ink-3">Examples</span>
            <h1 className="text-display-lg">Forms</h1>
          </Stack>

          <Grid cols={1} responsive={{ base: 1, lg: 2 }} gap={6}>
            <Card>
              <CardHeader>
                <CardTitle>Validated sign-up</CardTitle>
              </CardHeader>
              <CardContent>
                <FormProvider {...form}>
                  <Form
                    onSubmit={form.handleSubmit((v) => toast.success(`Welcome, ${v.email}`))}
                    className="space-y-4"
                  >
                    <Field
                      label="Email"
                      required
                      error={form.formState.errors.email?.message}
                    >
                      <Input type="email" placeholder="you@labmgm.com" {...form.register('email')} />
                    </Field>
                    <Field
                      label="Password"
                      required
                      help="At least 8 characters, with upper/lower/number."
                      error={form.formState.errors.password?.message}
                    >
                      <Input type="password" {...form.register('password')} />
                    </Field>
                    <Button type="submit" fullWidth>
                      Create account
                    </Button>
                  </Form>
                </FormProvider>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All inputs</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap={4}>
                  <Field label="Search"><SearchInput placeholder="Filter…" /></Field>
                  <Field label="Bio"><Textarea placeholder="Tell us about yourself" /></Field>
                  <Field label="Quantity"><NumberInput defaultValue={1} min={0} max={10} /></Field>
                  <Field label="Verify code"><PinInput length={6} /></Field>
                  <Field label="Engine">
                    <Select
                      options={[
                        { value: 'unity', label: 'Unity' },
                        { value: 'unreal', label: 'Unreal' },
                        { value: 'godot', label: 'Godot' },
                      ]}
                      placeholder="Select an engine"
                    />
                  </Field>
                  <Field label="Tags">
                    <Combobox
                      options={[
                        { value: 'environment', label: 'Environment' },
                        { value: 'character', label: 'Character' },
                        { value: 'prop', label: 'Prop' },
                      ]}
                      placeholder="Search…"
                    />
                  </Field>
                  <Field label="Platforms">
                    <MultiSelect
                      options={[
                        { value: 'mac', label: 'macOS' },
                        { value: 'win', label: 'Windows' },
                        { value: 'lin', label: 'Linux' },
                      ]}
                    />
                  </Field>
                  <Field label="Hashtags"><TagInput defaultValue={['#mgm']} /></Field>
                  <Field label="Color"><ColorPicker /></Field>
                  <Field label="Upload"><FileDropzone onFiles={(f) => toast(`${f.length} file(s)`)} /></Field>
                  <Checkbox label="I agree to the terms" />
                  <Switch label="Email notifications" />
                  <Field label="Volume"><Slider defaultValue={[60]} max={100} /></Field>
                  <Field label="Plan">
                    <RadioGroup defaultValue="pro">
                      <Radio value="free" label="Free" />
                      <Radio value="pro" label="Pro" description="$29/mo" />
                      <Radio value="enterprise" label="Enterprise" />
                    </RadioGroup>
                  </Field>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Card>
            <CardHeader>
              <CardTitle>Multi-step wizard</CardTitle>
            </CardHeader>
            <CardContent>
              <Wizard defaultCurrent={0}>
                <WizardStep>
                  <WizardBody step="Basics" />
                </WizardStep>
                <WizardStep>
                  <WizardBody step="Files" />
                </WizardStep>
                <WizardStep>
                  <WizardBody step="Review" />
                </WizardStep>
              </Wizard>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Section>
  );
}

function WizardBody({ step }: { step: string }) {
  const w = useWizard();
  return (
    <Grid cols={1} responsive={{ base: 1, md: 2 }} gap={6}>
      <StepRail
        navigable
        steps={[
          { title: 'Basics', description: 'Name and category' },
          { title: 'Files', description: 'Upload assets' },
          { title: 'Review', description: 'Confirm details' },
        ]}
      />
      <Stack gap={4}>
        <h3 className="text-h3">{step}</h3>
        <p className="text-body text-ink-2">Step {w.current + 1} of {w.count}</p>
        <div className="flex justify-between">
          <Button variant="ghost" onClick={w.prev} disabled={w.isFirst}>
            Back
          </Button>
          <Button onClick={w.next} disabled={w.isLast}>
            {w.isLast ? 'Finish' : 'Next'}
          </Button>
        </div>
      </Stack>
    </Grid>
  );
}
