import { useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, useDataTable, createColumnHelper } from '@labmgm/data-table';
import { Badge } from '@labmgm/react';

interface Asset {
  id: string;
  name: string;
  engine: 'Unity' | 'Unreal' | 'Godot';
  downloads: number;
  status: 'published' | 'pending' | 'rejected';
}

const SAMPLE: Asset[] = [
  { id: '1', name: 'Forest Pack', engine: 'Unreal', downloads: 12420, status: 'published' },
  { id: '2', name: 'Urban Tiles', engine: 'Unity', downloads: 8421, status: 'published' },
  { id: '3', name: 'Sci-Fi Props', engine: 'Unity', downloads: 412, status: 'pending' },
  { id: '4', name: 'Cliff Faces', engine: 'Godot', downloads: 220, status: 'rejected' },
  { id: '5', name: 'VFX Bundle', engine: 'Unreal', downloads: 5432, status: 'published' },
  { id: '6', name: 'Stylized Trees', engine: 'Godot', downloads: 2100, status: 'pending' },
];

const meta = { title: 'Data display/DataTable', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const col = createColumnHelper<Asset>();

export const Default: Story = {
  render: () => {
    const columns = useMemo(
      () => [
        col.accessor('name', { header: 'Name' }),
        col.accessor('engine', { header: 'Engine' }),
        col.accessor('downloads', {
          header: 'Downloads',
          cell: (info) => info.getValue().toLocaleString(),
        }),
        col.accessor('status', {
          header: 'Status',
          cell: (info) => {
            const s = info.getValue();
            return (
              <Badge tone={s === 'published' ? 'success' : s === 'pending' ? 'warning' : 'danger'}>
                {s}
              </Badge>
            );
          },
        }),
      ],
      [],
    );
    const table = useDataTable<Asset>({ data: SAMPLE, columns });
    return <DataTable table={table} stickyHeader />;
  },
};
