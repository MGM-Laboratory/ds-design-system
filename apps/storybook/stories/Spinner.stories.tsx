import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@labmgm/react';

const meta = { title: 'Components/Spinner', component: Spinner, tags: ['autodocs'] } satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { size: 20 } };
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size={14} />
      <Spinner size={16} />
      <Spinner size={20} />
      <Spinner size={24} />
      <Spinner size={32} />
    </div>
  ),
};
export const Colored: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="text-brand-blue" />
      <Spinner className="text-brand-green" />
      <Spinner className="text-brand-red" />
      <Spinner className="text-brand-yellow" />
      <Spinner className="text-ink" />
    </div>
  ),
};
