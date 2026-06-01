import type { Meta, StoryObj } from '@storybook/react';
import { Stat, Card } from '@labmgm/react';

const meta = { title: 'Components/Stat', component: Stat, tags: ['autodocs'] } satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { args: { label: 'MRR', value: '$24,820', description: 'vs last month' } };
export const WithDelta: Story = {
  args: {
    label: 'Active users',
    value: '3,142',
    delta: { value: '+12%', direction: 'up' },
    description: 'vs last week',
  },
};
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Card><Stat label="MRR" value="$24,820" delta={{ value: '+12%', direction: 'up' }} description="vs last month" /></Card>
      <Card><Stat label="Active users" value="3,142" delta={{ value: '-3%', direction: 'down' }} description="vs last week" /></Card>
      <Card><Stat label="Avg session" value="6m 22s" /></Card>
    </div>
  ),
};
