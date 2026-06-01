import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@labmgm/react';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['info', 'success', 'warning', 'danger', 'neutral'] },
  },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { tone: 'info' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>This is an informational alert.</AlertDescription>
    </Alert>
  ),
};
export const AllTones: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(['info', 'success', 'warning', 'danger', 'neutral'] as const).map((tone) => (
        <Alert key={tone} tone={tone}>
          <AlertTitle>{tone.charAt(0).toUpperCase() + tone.slice(1)} alert</AlertTitle>
          <AlertDescription>Description text for the {tone} tone.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
};
