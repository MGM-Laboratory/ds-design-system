import * as React from 'react';
import { flexRender, type Table } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown } from '@labmgm/icons';
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
    <div className={cn('overflow-auto rounded-md border border-line bg-surface', className)} {...rest}>
      <table className="w-full border-collapse">
        <thead className={cn(stickyHeader && 'sticky top-0 z-10')}>
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id} className="border-b border-line bg-surface-muted">
              {group.headers.map((header) => {
                const sortable = header.column.getCanSort();
                const sorted = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.column.getSize() }}
                    className="px-3 py-2.5 text-left text-eyebrow uppercase text-ink-3 font-semibold"
                  >
                    {sortable ? (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className="inline-flex items-center gap-1.5 hover:text-ink"
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
              <td colSpan={table.getAllLeafColumns().length} className="py-10 text-center text-ink-3">
                {empty ?? 'No results.'}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.id}
                data-selected={row.getIsSelected() || undefined}
                className="border-b border-line transition-colors hover:bg-surface-muted data-[selected]:bg-brand-blue-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-2.5 text-body-sm text-ink">
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
