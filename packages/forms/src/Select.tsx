import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { Check, ChevronDown } from '@labmgm/icons';
import { cn } from '@labmgm/utils';

export interface SelectOption {
  value: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  id?: string;
  /** Accessible label, only used if you don't pair with <Field>. */
  'aria-label'?: string;
}

/**
 * Native-feeling Select built on Radix Select. For freeform autocomplete with filtering,
 * use <Combobox> instead.
 */
export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(function Select(
  { options, value, defaultValue, onChange, placeholder, disabled, invalid, className, id, ...rest },
  ref,
) {
  return (
    <RadixSelect.Root value={value} defaultValue={defaultValue} onValueChange={onChange} disabled={disabled}>
      <RadixSelect.Trigger
        ref={ref}
        id={id}
        aria-invalid={invalid || undefined}
        className={cn(
          'flex h-10 w-full items-center justify-between gap-2 rounded-md border bg-surface px-3 text-body text-ink outline-none transition-colors',
          'data-[placeholder]:text-ink-4',
          'focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:border-focus',
          invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown size={16} className="text-ink-3" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={6}
          className="z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-line bg-surface shadow-2"
        >
          <RadixSelect.Viewport className="p-1">
            {options.map((opt) => (
              <RadixSelect.Item
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
                className={cn(
                  'relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-body-sm outline-none',
                  'data-[highlighted]:bg-surface-muted',
                  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                )}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <RadixSelect.ItemIndicator>
                    <Check size={14} />
                  </RadixSelect.ItemIndicator>
                </span>
                <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
                {opt.description && (
                  <span className="ml-auto text-caption text-ink-3">{opt.description}</span>
                )}
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
});
