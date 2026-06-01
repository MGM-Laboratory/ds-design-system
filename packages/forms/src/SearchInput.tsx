import * as React from 'react';
import { Search, X } from '@labmgm/icons';
import { Input, type InputProps } from './Input.js';

export interface SearchInputProps extends Omit<InputProps, 'leading' | 'trailing' | 'type'> {
  /** Show a clear (✕) button when the value is non-empty. */
  clearable?: boolean;
  onClear?: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { clearable = true, onClear, value, ...rest },
  ref,
) {
  const hasValue = typeof value === 'string' ? value.length > 0 : !!value;
  return (
    <Input
      ref={ref}
      type="search"
      value={value}
      leading={<Search size={16} />}
      trailing={
        clearable && hasValue ? (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="inline-flex h-5 w-5 items-center justify-center rounded-sm text-ink-3 hover:bg-surface-muted hover:text-ink"
          >
            <X size={14} />
          </button>
        ) : undefined
      }
      {...rest}
    />
  );
});
