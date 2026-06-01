import type { Meta, StoryObj } from '@storybook/react';
import { Banner, Button } from '@labmgm/react';

const meta = {
  title: 'Feedback/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: { tone: { control: 'select', options: ['info', 'success', 'warning', 'danger', 'inverse'] } },
} satisfies Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { tone: 'info', children: 'New feature: collaborative editing is now live.' } };
export const AllTones: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Banner tone="info">Info: announcing collaborative editing.</Banner>
      <Banner tone="success">Success: your asset is now live.</Banner>
      <Banner tone="warning">Warning: low storage available.</Banner>
      <Banner tone="danger">Danger: scheduled maintenance in 30 minutes.</Banner>
      <Banner tone="inverse">Inverse: dark mode announcement.</Banner>
    </div>
  ),
};
export const WithAction: Story = {
  render: () => (
    <Banner tone="info" action={<Button size="sm" variant="secondary">Learn more</Button>}>
      Now in public beta.
    </Banner>
  ),
};
