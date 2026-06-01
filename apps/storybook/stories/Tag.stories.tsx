import type { Meta, StoryObj } from '@storybook/react';
import { Tag, Chip } from '@labmgm/react';
import { Hash } from 'lucide-react';

const meta = { title: 'Components/Tag & Chip', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Tags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>plain</Tag>
      <Tag leading={<Hash size={12} />}>with-icon</Tag>
      <Tag onRemove={() => console.log('remove')}>removable</Tag>
    </div>
  ),
};

export const Chips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip>Unselected</Chip>
      <Chip active>Active</Chip>
      <Chip leading={<Hash size={14} />}>With icon</Chip>
    </div>
  ),
};
