import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Field,
  Input,
  Textarea,
  SearchInput,
  NumberInput,
  PinInput,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Select,
  Combobox,
  MultiSelect,
  TagInput,
  FileDropzone,
  ColorPicker,
  Form,
  FormProvider,
  useMgmForm,
  Wizard,
  WizardStep,
  StepRail,
  useWizard,
} from '@labmgm/forms';
import { emailSchema, passwordSchema, z } from '@labmgm/forms/schemas';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@labmgm/react';

const meta = { title: 'Forms/Primitives', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const ENGINE_OPTIONS = [
  { value: 'unity', label: 'Unity' },
  { value: 'unreal', label: 'Unreal' },
  { value: 'godot', label: 'Godot', description: 'Open source' },
];

export const InputStory: Story = {
  name: 'Input',
  render: () => (
    <div className="grid grid-cols-1 gap-4 max-w-md">
      <Field label="Default"><Input placeholder="Type here" /></Field>
      <Field label="With helper" help="We'll never share it."><Input type="email" placeholder="you@labmgm.com" /></Field>
      <Field label="Required" required><Input /></Field>
      <Field label="Invalid" error="Field is invalid"><Input defaultValue="bad" /></Field>
      <Field label="Disabled"><Input disabled defaultValue="Locked" /></Field>
      <Field label="Sizes">
        <div className="flex flex-col gap-2">
          <Input size="sm" placeholder="sm" />
          <Input size="md" placeholder="md" />
          <Input size="lg" placeholder="lg" />
        </div>
      </Field>
    </div>
  ),
};

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <Field label="Bio" help="A short description.">
      <Textarea placeholder="Tell us about yourself" />
    </Field>
  ),
};

export const SearchInputStory: Story = {
  name: 'SearchInput',
  render: () => {
    const [v, setV] = useState('');
    return <SearchInput value={v} onChange={(e) => setV(e.target.value)} onClear={() => setV('')} placeholder="Search assets…" />;
  },
};

export const NumberInputStory: Story = {
  name: 'NumberInput',
  render: () => (
    <div className="flex flex-col gap-3 max-w-xs">
      <NumberInput defaultValue={1} min={0} max={10} />
      <NumberInput defaultValue={50} min={0} max={100} step={5} controls={false} />
    </div>
  ),
};

export const PinInputStory: Story = {
  name: 'PinInput',
  render: () => <PinInput length={6} />,
};

export const CheckboxStory: Story = {
  name: 'Checkbox',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="I agree to the terms" />
      <Checkbox label="Send me updates" description="You can opt out anytime." defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Indeterminate" checked="indeterminate" />
    </div>
  ),
};

export const CheckboxGroupStory: Story = {
  name: 'CheckboxGroup',
  render: () => (
    <CheckboxGroup legend="Platforms">
      <Checkbox label="macOS" defaultChecked />
      <Checkbox label="Windows" />
      <Checkbox label="Linux" />
    </CheckboxGroup>
  ),
};

export const RadioStory: Story = {
  name: 'Radio',
  render: () => (
    <RadioGroup defaultValue="pro">
      <Radio value="free" label="Free" />
      <Radio value="pro" label="Pro" description="$29/month" />
      <Radio value="enterprise" label="Enterprise" description="Contact sales" />
    </RadioGroup>
  ),
};

export const SwitchStory: Story = {
  name: 'Switch',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Email notifications" />
      <Switch label="Marketing emails" description="Updates about new features." defaultChecked />
      <Switch label="Disabled" disabled />
    </div>
  ),
};

export const SliderStory: Story = {
  name: 'Slider',
  render: () => (
    <Field label="Volume">
      <Slider defaultValue={[60]} max={100} />
    </Field>
  ),
};

export const SelectStory: Story = {
  name: 'Select',
  render: () => (
    <Field label="Engine">
      <Select options={ENGINE_OPTIONS} placeholder="Select an engine" />
    </Field>
  ),
};

export const ComboboxStory: Story = {
  name: 'Combobox',
  render: () => (
    <Field label="Filter">
      <Combobox options={ENGINE_OPTIONS} placeholder="Search engines…" />
    </Field>
  ),
};

export const MultiSelectStory: Story = {
  name: 'MultiSelect',
  render: () => (
    <Field label="Platforms">
      <MultiSelect
        options={[
          { value: 'mac', label: 'macOS' },
          { value: 'win', label: 'Windows' },
          { value: 'lin', label: 'Linux' },
          { value: 'ios', label: 'iOS' },
          { value: 'and', label: 'Android' },
        ]}
      />
    </Field>
  ),
};

export const TagInputStory: Story = {
  name: 'TagInput',
  render: () => (
    <Field label="Hashtags" help="Press Enter or comma to add a tag.">
      <TagInput defaultValue={['#mgm', '#design']} />
    </Field>
  ),
};

export const FileDropzoneStory: Story = {
  name: 'FileDropzone',
  render: () => (
    <FileDropzone
      onFiles={(files) => alert(`Selected ${files.length} file(s)`)}
      maxSize={5 * 1024 * 1024}
    />
  ),
};

export const ColorPickerStory: Story = {
  name: 'ColorPicker',
  render: () => {
    const [color, setColor] = useState('#3a6dc5');
    return (
      <div className="flex items-center gap-3">
        <ColorPicker value={color} onChange={setColor} />
        <span className="text-caption font-mono text-ink-3">{color}</span>
      </div>
    );
  },
};

const signupSchema = z.object({ email: emailSchema, password: passwordSchema });

export const ValidatedForm: Story = {
  name: 'Validated form (React Hook Form + Zod)',
  render: () => {
    const form = useMgmForm(signupSchema, { defaultValues: { email: '', password: '' } });
    return (
      <Card className="max-w-md">
        <CardHeader><CardTitle>Sign up</CardTitle></CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <Form
              onSubmit={form.handleSubmit((v) => alert(`Welcome, ${v.email}`))}
              className="space-y-4"
            >
              <Field
                label="Email"
                required
                error={form.formState.errors.email?.message}
              >
                <Input type="email" {...form.register('email')} />
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
        </CardContent>
      </Card>
    );
  },
};

function WizardBody({ step }: { step: string }) {
  const w = useWizard();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <StepRail
        navigable
        steps={[
          { title: 'Basics', description: 'Name and category' },
          { title: 'Files', description: 'Upload assets' },
          { title: 'Review', description: 'Confirm details' },
        ]}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-h3">{step}</h3>
        <p className="text-body text-ink-2">Step {w.current + 1} of {w.count}</p>
        <div className="flex justify-between">
          <Button variant="ghost" onClick={w.prev} disabled={w.isFirst}>Back</Button>
          <Button onClick={w.next} disabled={w.isLast}>{w.isLast ? 'Finish' : 'Next'}</Button>
        </div>
      </div>
    </div>
  );
}

export const WizardStory: Story = {
  name: 'Wizard + StepRail',
  render: () => (
    <Card>
      <CardHeader><CardTitle>Multi-step form</CardTitle></CardHeader>
      <CardContent>
        <Wizard defaultCurrent={0}>
          <WizardStep><WizardBody step="Basics" /></WizardStep>
          <WizardStep><WizardBody step="Files" /></WizardStep>
          <WizardStep><WizardBody step="Review" /></WizardStep>
        </Wizard>
      </CardContent>
    </Card>
  ),
};
