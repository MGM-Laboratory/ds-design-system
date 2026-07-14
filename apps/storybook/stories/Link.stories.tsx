import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@labmgm/react';

const meta = { title: 'Components/Link', component: Link, tags: ['autodocs'] } satisfies Meta<
  typeof Link
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Documentation', href: '#' } };
export const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" tone="default">
        Default link
      </Link>
      <Link href="#" tone="muted">
        Muted link
      </Link>
      <Link href="#" underline="always">
        Always underlined
      </Link>
      <Link href="#" underline="hover">
        Underline on hover
      </Link>
      <Link href="https://npmjs.com/org/labmgm" external>
        External link (new tab)
      </Link>
    </div>
  ),
};
