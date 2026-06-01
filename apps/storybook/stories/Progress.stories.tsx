import type { Meta, StoryObj } from '@storybook/react';
import { Progress, ProgressCircle } from '@labmgm/react';

const meta = { title: 'Feedback/Progress', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} tone="brand-blue" />
      <Progress value={75} tone="brand-green" />
      <Progress value={100} tone="brand-red" />
      <Progress value={60} size={10} />
    </div>
  ),
};

export const Circle: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <ProgressCircle value={0} showValue />
      <ProgressCircle value={25} showValue />
      <ProgressCircle value={50} showValue tone="brand-blue" />
      <ProgressCircle value={75} showValue tone="brand-green" />
      <ProgressCircle value={100} showValue tone="brand-red" />
    </div>
  ),
};
