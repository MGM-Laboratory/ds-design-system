import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { cn } from '@labmgm/utils';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Switch = React.forwardRef<React.ElementRef<typeof RadixSwitch.Root>, SwitchProps>(
  function Switch({ label, description, className, id, ...rest }, ref) {
    const generated = React.useId();
    const switchId = id ?? generated;
    const control = (
      <RadixSwitch.Root
        ref={ref}
        id={switchId}
        className={cn(
          'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
          'data-[state=checked]:bg-ink data-[state=unchecked]:bg-line-strong',
          'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        <RadixSwitch.Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-1 ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
      </RadixSwitch.Root>
    );
    if (!label && !description) return control;
    return (
      <div className="inline-flex items-start gap-3">
        {control}
        <div className="flex flex-col gap-0.5 leading-none">
          {label && (
            <label htmlFor={switchId} className="text-body-sm text-ink cursor-pointer select-none">
              {label}
            </label>
          )}
          {description && <span className="text-caption text-ink-3">{description}</span>}
        </div>
      </div>
    );
  },
);
