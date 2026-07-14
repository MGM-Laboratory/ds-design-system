import * as React from 'react';
import { flexRender, type Table } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface DataTableProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>;
  /** Show sticky header. */
  stickyHeader?: boolean;
  /** Empty-state node when no rows. */
  empty?: React.ReactNode;
}

export function DataTable<TData>({
  table,
  stickyHeader,
  empty,
  className,
  ...rest
}: DataTableProps<TData>) {
  const rows = table.getRowModel().rows;
  return (
    <div
      className={cn('border-line bg-surface overflow-auto rounded-md border', className)}
      {...rest}
    >
      <table className="w-full border-collapse">
        <thead className={cn(stickyHeader && 'sticky top-0 z-10')}>
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id} className="border-line bg-surface-muted border-b">
              {group.headers.map((header) => {
                const sortable = header.column.getCanSort();
                const sorted = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.column.getSize() }}
                    className="text-eyebrow text-ink-3 px-3 py-2.5 text-left font-semibold uppercase"
                  >
                    {sortable ? (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className="hover:text-ink inline-flex items-center gap-1.5"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sorted === 'asc' ? (
                          <ArrowUp size={12} />
                        ) : sorted === 'desc' ? (
                          <ArrowDown size={12} />
                        ) : (
                          <ArrowUpDown size={12} className="opacity-60" />
                        )}
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={table.getAllLeafColumns().length}
                className="text-ink-3 py-10 text-center"
              >
                {empty ?? 'No results.'}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.id}
                data-selected={row.getIsSelected() || undefined}
                className="border-line hover:bg-surface-muted data-[selected]:bg-brand-blue-50 border-b transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="text-body-sm text-ink px-3 py-2.5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
