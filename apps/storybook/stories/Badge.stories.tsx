import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@labmgm/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: [
        'neutral', 'info', 'success', 'warning', 'danger', 'outline',
        'solid', 'solid-blue', 'solid-yellow', 'solid-red', 'solid-green',
      ],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    shape: { control: 'select', options: ['pill', 'square'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'New' } };
export const AllTones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Neutral</Badge>
      <Badge tone="info">Info</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
      <Badge tone="solid">Solid</Badge>
      <Badge tone="solid-blue">Blue</Badge>
      <Badge tone="solid-yellow">Yellow</Badge>
      <Badge tone="solid-red">Red</Badge>
      <Badge tone="solid-green">Green</Badge>
    </div>
  ),
};
