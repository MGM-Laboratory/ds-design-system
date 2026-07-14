import * as React from 'react';
import { Command } from 'cmdk';
import { Check, ChevronDown, Search } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
}

/**
 * Filterable single-select. Use <MultiSelect> when multiple values are required.
 */
export function Combobox({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select…',
  emptyMessage = 'No results found.',
  disabled,
  invalid,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const selected = options.find((o) => o.value === current);

  function pick(next: string) {
    if (!isControlled) setInternal(next);
    onChange?.(next);
    setOpen(false);
  }

  return (
    <div className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'bg-surface text-body text-ink flex h-10 w-full items-center justify-between gap-2 rounded-md border px-3 transition-colors outline-none',
          'focus-visible:ring-focus focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-offset-1',
          invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
          'disabled:opacity-50',
        )}
      >
        <span className={cn(!selected && 'text-ink-4')}>{selected?.label ?? placeholder}</span>
        <ChevronDown size={16} className="text-ink-3" />
      </button>
      {open && (
        <div className="border-line bg-surface shadow-2 animate-scale-in absolute z-50 mt-2 w-full overflow-hidden rounded-md border">
          <Command shouldFilter>
            <div className="border-line flex items-center gap-2 border-b px-3">
              <Search size={14} className="text-ink-3" />
              <Command.Input
                autoFocus
                placeholder="Search…"
                className="text-body text-ink placeholder:text-ink-4 h-10 w-full bg-transparent outline-none"
              />
            </div>
            <Command.List className="max-h-72 overflow-auto p-1">
              <Command.Empty className="text-caption text-ink-3 p-2 text-center">
                {emptyMessage}
              </Command.Empty>
              {options.map((opt) => (
                <Command.Item
                  key={opt.value}
                  value={`${opt.label} ${opt.description ?? ''}`}
                  disabled={opt.disabled}
                  onSelect={() => pick(opt.value)}
                  className={cn(
                    'text-body-sm text-ink relative flex cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-1.5 select-none',
                    'data-[selected=true]:bg-surface-muted',
                  )}
                >
                  <div className="flex items-center gap-2">
                    {opt.value === current && <Check size={14} />}
                    <span>{opt.label}</span>
                  </div>
                  {opt.description && (
                    <span className="text-caption text-ink-3">{opt.description}</span>
                  )}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </div>
      )}
    </div>
  );
}
