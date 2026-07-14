import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, Step } from '@labmgm/react';

const meta = { title: 'Navigation/Stepper', component: Stepper, tags: ['autodocs'] } satisfies Meta<
  typeof Stepper
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { current: 2 },
  render: () => (
    <Stepper current={2}>
      <Step label="Basics" description="Name and category" />
      <Step label="Files" description="Upload assets" />
      <Step label="Review" description="Confirm details" />
      <Step label="Publish" description="Go live" />
    </Stepper>
  ),
};

export const Vertical: Story = {
  args: { current: 1 },
  render: () => (
    <Stepper current={1} orientation="vertical">
      <Step label="Account" description="Sign up" />
      <Step label="Profile" description="Tell us about yourself" />
      <Step label="Preferences" description="Customize" />
    </Stepper>
  ),
};
