import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@labmgm/react';

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { page: 3, pageCount: 10, onChange: () => {} },
  render: () => {
    const [page, setPage] = useState(3);
    return <Pagination page={page} pageCount={10} onChange={setPage} />;
  },
};

export const ManyPages: Story = {
  args: { page: 42, pageCount: 100, onChange: () => {}, siblings: 1 },
  render: () => {
    const [page, setPage] = useState(42);
    return <Pagination page={page} pageCount={100} onChange={setPage} siblings={1} />;
  },
};
