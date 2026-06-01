import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@labmgm/react';

const meta = { title: 'Navigation/Pagination', component: Pagination, tags: ['autodocs'] } satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(3);
    return <Pagination page={page} pageCount={10} onChange={setPage} />;
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(42);
    return <Pagination page={page} pageCount={100} onChange={setPage} siblings={1} />;
  },
};
