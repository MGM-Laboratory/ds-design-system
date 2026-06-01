import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '@labmgm/react';
import { Info } from 'lucide-react';

const meta = {
  title: 'Feedback/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: { tone: { control: 'select', options: ['info', 'success', 'warning', 'danger', 'neutral'] } },
} satisfies Meta<typeof Callout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tone: 'info',
    title: 'Did you know?',
    icon: <Info size={18} />,
    children: 'Callouts are great for highlighting context inside long-form content.',
  },
};

export const AllTones: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Callout tone="info" title="Info">Informational note.</Callout>
      <Callout tone="success" title="Success">Operation completed.</Callout>
      <Callout tone="warning" title="Warning">Heads up — review the details.</Callout>
      <Callout tone="danger" title="Danger">Destructive action ahead.</Callout>
      <Callout tone="neutral" title="Neutral">Just plain context.</Callout>
    </div>
  ),
};
