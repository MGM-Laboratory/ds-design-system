import * as React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { cn } from '@labmgm/utils';

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<
  typeof RadixRadioGroup.Root
> {
  orientation?: 'horizontal' | 'vertical';
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  RadioGroupProps
>(function RadioGroup({ orientation = 'vertical', className, ...rest }, ref) {
  return (
    <RadixRadioGroup.Root
      ref={ref}
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row flex-wrap gap-4',
        className,
      )}
      {...rest}
    />
  );
});

export interface RadioProps extends React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Radio = React.forwardRef<React.ElementRef<typeof RadixRadioGroup.Item>, RadioProps>(
  function Radio({ label, description, className, id, value, ...rest }, ref) {
    const generated = React.useId();
    const radioId = id ?? generated;
    const control = (
      <RadixRadioGroup.Item
        ref={ref}
        id={radioId}
        value={value}
        className={cn(
          'peer border-line bg-surface inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border',
          'focus-visible:ring-focus focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'data-[state=checked]:border-surface-inverse',
          'data-[disabled]:opacity-50',
          className,
        )}
        {...rest}
      >
        <RadixRadioGroup.Indicator className="bg-surface-inverse block h-2 w-2 rounded-full" />
      </RadixRadioGroup.Item>
    );
    if (!label && !description) return control;
    return (
      <div className="inline-flex items-start gap-2">
        {control}
        <div className="flex flex-col gap-0.5 leading-none">
          {label && (
            <label htmlFor={radioId} className="text-body-sm text-ink cursor-pointer select-none">
              {label}
            </label>
          )}
          {description && <span className="text-caption text-ink-3">{description}</span>}
        </div>
      </div>
    );
  },
);
