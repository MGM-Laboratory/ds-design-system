import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  /** Active step index (0-based). */
  current: number;
  orientation?: 'horizontal' | 'vertical';
}

export interface StepProps extends React.HTMLAttributes<HTMLLIElement> {
  label: React.ReactNode;
  description?: React.ReactNode;
  status?: 'pending' | 'active' | 'complete';
  index?: number;
}

const StepperCtx = React.createContext<{ orientation: 'horizontal' | 'vertical' }>({
  orientation: 'horizontal',
});

export const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(function Stepper(
  { current, orientation = 'horizontal', className, children, ...rest },
  ref,
) {
  return (
    <StepperCtx.Provider value={{ orientation }}>
      <ol
        ref={ref}
        aria-label="Progress"
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row items-center gap-4' : 'flex-col gap-4',
          className,
        )}
        {...rest}
      >
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<StepProps>(child)) return child;
          const status: StepProps['status'] = i < current ? 'complete' : i === current ? 'active' : 'pending';
          return React.cloneElement(child, { index: i + 1, status });
        })}
      </ol>
    </StepperCtx.Provider>
  );
});

export const Step = React.forwardRef<HTMLLIElement, StepProps>(function Step(
  { label, description, status = 'pending', index, className, ...rest },
  ref,
) {
  const { orientation } = React.useContext(StepperCtx);
  return (
    <li
      ref={ref}
      aria-current={status === 'active' ? 'step' : undefined}
      className={cn(
        'flex items-start gap-3',
        orientation === 'horizontal' && 'flex-1',
        className,
      )}
      {...rest}
    >
      <span
        className={cn(
          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-caption font-semibold',
          status === 'complete' && 'bg-brand-green border-brand-green text-white',
          status === 'active' && 'bg-ink border-ink text-white',
          status === 'pending' && 'bg-surface border-line text-ink-3',
        )}
      >
        {status === 'complete' ? <Check size={14} /> : index}
      </span>
      <div className="flex flex-col">
        <span
          className={cn(
            'text-body-sm font-medium',
            status === 'pending' ? 'text-ink-3' : 'text-ink',
          )}
        >
          {label}
        </span>
        {description && <span className="text-caption text-ink-3">{description}</span>}
      </div>
    </li>
  );
});
