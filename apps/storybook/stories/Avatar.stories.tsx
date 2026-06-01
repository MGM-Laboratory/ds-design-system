import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from '@labmgm/react';

const meta = { title: 'Components/Avatar', component: Avatar, tags: ['autodocs'] } satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: 'Jane Doe' } };
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="Jane Doe" size="sm" />
      <Avatar name="Bob Smith" size="md" />
      <Avatar name="Carol Jones" size="lg" />
    </div>
  ),
};
export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar name="Jane Doe" />
      <Avatar name="Bob Smith" />
      <Avatar name="Carol Jones" />
      <Avatar name="Dave Patel" />
      <Avatar name="Eve Lee" />
      <Avatar name="Frank Wu" />
    </AvatarGroup>
  ),
};
