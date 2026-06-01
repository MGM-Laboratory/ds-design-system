import type { Meta, StoryObj } from '@storybook/react';
import { Empty, Button } from '@labmgm/react';
import { Plus } from 'lucide-react';

const meta = { title: 'Components/Empty', component: Empty, tags: ['autodocs'] } satisfies Meta<typeof Empty>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No assets yet',
    description: 'Publish your first asset to get started.',
    action: <Button leadingIcon={<Plus size={16} />}>Publish asset</Button>,
  },
};
