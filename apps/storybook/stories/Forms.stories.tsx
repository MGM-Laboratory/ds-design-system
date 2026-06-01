import type { Meta, StoryObj } from '@storybook/react';
import { Field, Input, Textarea, Checkbox, Switch, Slider, Select } from '@labmgm/forms';

const meta = { title: 'Forms/Primitives', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  name: 'Input',
  render: () => (
    <Field label="Email" required help="We'll never share it.">
      <Input type="email" placeholder="you@labmgm.com" />
    </Field>
  ),
};

export const InvalidInput: Story = {
  render: () => (
    <Field label="Email" required error="Enter a valid email">
      <Input type="email" defaultValue="not-an-email" />
    </Field>
  ),
};

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <Field label="Bio">
      <Textarea placeholder="Tell us about yourself" />
    </Field>
  ),
};

export const CheckboxStory: Story = {
  name: 'Checkbox',
  render: () => <Checkbox label="I agree to the terms" description="You can revoke this at any time." />,
};

export const SwitchStory: Story = {
  name: 'Switch',
  render: () => <Switch label="Email notifications" description="Get pinged when assets you follow update." />,
};

export const SliderStory: Story = {
  name: 'Slider',
  render: () => (
    <Field label="Volume">
      <Slider defaultValue={[64]} max={100} />
    </Field>
  ),
};

export const SelectStory: Story = {
  name: 'Select',
  render: () => (
    <Field label="Engine">
      <Select
        options={[
          { value: 'unity', label: 'Unity' },
          { value: 'unreal', label: 'Unreal' },
          { value: 'godot', label: 'Godot' },
        ]}
        placeholder="Select…"
      />
    </Field>
  ),
};
