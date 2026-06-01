'use client';

import { useMemo } from 'react';
import { Container, Section, Stack } from '@labmgm/layout';
import { Badge } from '@labmgm/react';
import { DataTable, useDataTable, createColumnHelper } from '@labmgm/data-table';

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
];

const col = createColumnHelper<Asset>();

export default function DataTablePage() {
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
          const status = info.getValue();
          return (
            <Badge
              tone={status === 'published' ? 'success' : status === 'pending' ? 'warning' : 'danger'}
            >
              {status}
            </Badge>
          );
        },
      }),
    ],
    [],
  );

  const table = useDataTable<Asset>({ data: SAMPLE, columns });

  return (
    <Section padding="lg">
      <Container>
        <Stack gap={6}>
          <h1 className="text-display-lg">Data table</h1>
          <DataTable table={table} stickyHeader />
        </Stack>
      </Container>
    </Section>
  );
}
