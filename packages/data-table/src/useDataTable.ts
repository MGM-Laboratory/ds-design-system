import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type RowSelectionState,
  type VisibilityState,
} from '@tanstack/react-table';

export interface UseDataTableOptions<TData> {
  data: TData[];
  // TanStack column definitions are invariant in TValue. `any` is intentional
  // here so one table can combine accessors for strings, numbers, and JSX cells.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  pageSize?: number;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableSelection?: boolean;
}

export function useDataTable<TData>({
  data,
  columns,
  pageSize = 20,
  enableSorting = true,
  enableFiltering = true,
  enableSelection = false,
}: UseDataTableOptions<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filters, setFilters] = useState<ColumnFiltersState>([]);
  const [selection, setSelection] = useState<RowSelectionState>({});
  const [visibility, setVisibility] = useState<VisibilityState>({});

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      columnFilters: filters,
      rowSelection: selection,
      columnVisibility: visibility,
    },
    initialState: { pagination: { pageSize } },
    enableRowSelection: enableSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilters,
    onRowSelectionChange: setSelection,
    onColumnVisibilityChange: setVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    getPaginationRowModel: getPaginationRowModel(),
  });

  return table;
}
