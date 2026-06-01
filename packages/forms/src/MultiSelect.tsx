import * as React from 'react';
import { Command } from 'cmdk';
import { Check, ChevronDown, Search, X } from '@labmgm/icons';
import { cn } from '@labmgm/utils';
import type { ComboboxOption } from './Combobox.js';

export interface MultiSelectProps {
  options: ComboboxOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  /** Max number of selected chips to render before collapsing into "+N". */
  maxVisible?: number;
}

export function MultiSelect({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select…',
  emptyMessage = 'No results found.',
  disabled,
  invalid,
  className,
  maxVisible = 4,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState<string[]>(defaultValue ?? []);
  const isControlled = value !== undefined;
  const current = isControlled ? (value ?? []) : internal;

  function toggle(v: string) {
    const next = current.includes(v) ? current.filter((x) => x !== v) : [...current, v];
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }

  const visible = options.filter((o) => current.includes(o.value)).slice(0, maxVisible);
  const overflow = current.length - visible.length;

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
          'flex min-h-10 w-full items-center justify-between gap-2 rounded-md border bg-surface px-2 py-1.5 text-body text-ink outline-none transition-colors',
          'focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:border-focus',
          invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
          'disabled:opacity-50',
        )}
      >
        <div className="flex flex-1 flex-wrap items-center gap-1">
          {current.length === 0 && <span className="px-1 text-ink-4">{placeholder}</span>}
          {visible.map((opt) => (
            <span
              key={opt.value}
              className="inline-flex items-center gap-1 rounded-sm bg-surface-muted px-1.5 py-0.5 text-caption text-ink"
            >
              {opt.label}
              <span
                role="button"
                tabIndex={-1}
                aria-label={`Remove ${opt.label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(opt.value);
                }}
                className="cursor-pointer text-ink-3 hover:text-ink"
              >
                <X size={12} />
              </span>
            </span>
          ))}
          {overflow > 0 && <span className="text-caption text-ink-3">+{overflow}</span>}
        </div>
        <ChevronDown size={16} className="text-ink-3" />
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-md border border-line bg-surface shadow-2 animate-scale-in">
          <Command shouldFilter>
            <div className="flex items-center gap-2 border-b border-line px-3">
              <Search size={14} className="text-ink-3" />
              <Command.Input
                autoFocus
                placeholder="Search…"
                className="h-10 w-full bg-transparent text-body text-ink outline-none placeholder:text-ink-4"
              />
            </div>
            <Command.List className="max-h-72 overflow-auto p-1">
              <Command.Empty className="p-2 text-center text-caption text-ink-3">{emptyMessage}</Command.Empty>
              {options.map((opt) => {
                const checked = current.includes(opt.value);
                return (
                  <Command.Item
                    key={opt.value}
                    value={`${opt.label} ${opt.description ?? ''}`}
                    disabled={opt.disabled}
                    onSelect={() => toggle(opt.value)}
                    className={cn(
                      'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-body-sm text-ink',
                      'data-[selected=true]:bg-surface-muted',
                    )}
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-line">
                      {checked && <Check size={12} className="text-ink" />}
                    </span>
                    <span>{opt.label}</span>
                  </Command.Item>
                );
              })}
            </Command.List>
          </Command>
        </div>
      )}
    </div>
  );
}
