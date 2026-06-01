import * as React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Checkbox = React.forwardRef<React.ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  function Checkbox({ label, description, className, id, ...rest }, ref) {
    const generated = React.useId();
    const checkboxId = id ?? generated;
    const content = (
      <RadixCheckbox.Root
        ref={ref}
        id={checkboxId}
        className={cn(
          'peer inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-line bg-surface text-white',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
          'data-[state=checked]:bg-ink data-[state=checked]:border-ink',
          'data-[state=indeterminate]:bg-ink data-[state=indeterminate]:border-ink',
          'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        <RadixCheckbox.Indicator className="inline-flex">
          {rest.checked === 'indeterminate' ? <Minus size={12} /> : <Check size={12} />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
    if (!label && !description) return content;
    return (
      <div className="inline-flex items-start gap-2">
        {content}
        <div className="flex flex-col gap-0.5 leading-none">
          {label && (
            <label htmlFor={checkboxId} className="text-body-sm text-ink cursor-pointer select-none">
              {label}
            </label>
          )}
          {description && <span className="text-caption text-ink-3">{description}</span>}
        </div>
      </div>
    );
  },
);
