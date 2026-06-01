# `@labmgm/data-table`

MGM-styled data table built on TanStack Table v8.

```tsx
import { DataTable, useDataTable, createColumnHelper } from '@labmgm/data-table';

interface User { id: string; name: string; email: string; }
const col = createColumnHelper<User>();
const columns = [
  col.accessor('name', { header: 'Name' }),
  col.accessor('email', { header: 'Email' }),
];

function Users({ data }: { data: User[] }) {
  const table = useDataTable({ data, columns, pageSize: 20 });
  return <DataTable table={table} stickyHeader />;
}
```
