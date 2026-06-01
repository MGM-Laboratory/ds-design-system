import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@labmgm/react';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'flat', 'tinted', 'tint-blue', 'tint-yellow', 'tint-red', 'tint-green', 'inverse'],
    },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    interactive: { control: 'boolean' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <CardHeader>
        <CardTitle>Project Atlas</CardTitle>
        <CardDescription>A portfolio dashboard for MGM Laboratory.</CardDescription>
      </CardHeader>
      <CardContent>Bauhaus-inspired components on a calm, premium surface.</CardContent>
      <CardFooter>
        <Button size="sm">Open</Button>
      </CardFooter>
    </Card>
  ),
};

export const Tinted: Story = { ...Default, args: { variant: 'tint-blue' } };
export const Interactive: Story = { ...Default, args: { interactive: true } };
