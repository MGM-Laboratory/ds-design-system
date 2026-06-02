# `@labmgm/data-table`

> MGM-styled data table built on TanStack Table v8.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fdata-table?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/data-table)

```bash
pnpm add @labmgm/data-table
```

> [Storybook (Data display / DataTable)](https://ds.labmgm.org/?path=/docs/data-display-datatable--docs) · [Source](./src)

---

## Quick example

```tsx
import { DataTable, useDataTable, createColumnHelper } from '@labmgm/data-table';
import { Badge } from '@labmgm/react';

interface Asset {
  id: string;
  name: string;
  engine: string;
  downloads: number;
  status: 'published' | 'pending';
}

const col = createColumnHelper<Asset>();
const columns = [
  col.accessor('name', { header: 'Name' }),
  col.accessor('engine', { header: 'Engine' }),
  col.accessor('downloads', {
    header: 'Downloads',
    cell: (info) => info.getValue().toLocaleString(),
  }),
  col.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <Badge tone={info.getValue() === 'published' ? 'success' : 'warning'}>
        {info.getValue()}
      </Badge>
    ),
  }),
];

function Assets({ data }: { data: Asset[] }) {
  const table = useDataTable({ data, columns, pageSize: 20 });
  return <DataTable table={table} stickyHeader />;
}
```

## API

| Export | Purpose |
|---|---|
| `useDataTable({ data, columns, pageSize, enableSorting, enableFiltering, enableSelection })` | Wraps `useReactTable` with MGM defaults |
| `<DataTable table stickyHeader empty>` | Renders the table with brand styling |
| `createColumnHelper`, `flexRender` + type re-exports | Pass-throughs from `@tanstack/react-table` |

Built-in features: sorting (click header), filtering, pagination, column visibility, row selection, sticky header.

## License

MIT © MGM Laboratory
