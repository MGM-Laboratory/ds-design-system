import type { Meta, StoryObj } from '@storybook/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@labmgm/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'accent', 'danger', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon', 'icon-sm', 'icon-lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: 'Continue', variant: 'primary' } };
export const Secondary: Story = { args: { children: 'Save', variant: 'secondary' } };
export const Outline: Story = { args: { children: 'Cancel', variant: 'outline' } };
export const Ghost: Story = { args: { children: 'Skip', variant: 'ghost' } };
export const Accent: Story = { args: { children: 'Subscribe', variant: 'accent' } };
export const Danger: Story = { args: { children: 'Delete', variant: 'danger' } };
export const Loading: Story = { args: { children: 'Saving…', loading: true } };
export const WithLeadingIcon: Story = {
  args: { children: 'Generate', leadingIcon: <Sparkles size={16} /> },
};
export const WithTrailingIcon: Story = {
  args: { children: 'Next', trailingIcon: <ArrowRight size={16} /> },
};
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};
