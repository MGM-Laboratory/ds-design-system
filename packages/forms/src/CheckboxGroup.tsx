import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group label rendered as a `<legend>`. */
  legend?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  function CheckboxGroup({ legend, orientation = 'vertical', className, children, ...rest }, ref) {
    return (
      <fieldset className={cn('border-0 p-0 m-0', className)}>
        {legend && <legend className="text-caption font-medium text-ink-2 mb-2">{legend}</legend>}
        <div
          ref={ref}
          role="group"
          className={cn(
            'flex',
            orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-4 flex-wrap',
          )}
          {...rest}
        >
          {children}
        </div>
      </fieldset>
    );
  },
);
