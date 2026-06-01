import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, Card } from '@labmgm/react';

const meta = { title: 'Components/Skeleton', component: Skeleton, tags: ['autodocs'] } satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <Skeleton variant="circle" />
      <Skeleton variant="block" />
    </div>
  ),
};
export const LoadingCard: Story = {
  render: () => (
    <Card className="w-80">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton variant="circle" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-3/4" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
      </div>
      <Skeleton variant="block" className="h-32 mb-2" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-5/6 mt-2" />
    </Card>
  ),
};
