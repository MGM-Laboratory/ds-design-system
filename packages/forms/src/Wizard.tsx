import * as React from 'react';
import { cn } from '@labmgm/utils';

interface WizardContextValue {
  current: number;
  setCurrent: (i: number) => void;
  count: number;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
  isFirst: boolean;
  isLast: boolean;
}

const WizardCtx = React.createContext<WizardContextValue | null>(null);

export function useWizard(): WizardContextValue {
  const ctx = React.useContext(WizardCtx);
  if (!ctx) throw new Error('useWizard must be used inside a <Wizard>');
  return ctx;
}

export interface WizardProps {
  current?: number;
  defaultCurrent?: number;
  onChange?: (i: number) => void;
  /** Children must be <WizardStep>s. */
  children: React.ReactNode;
  className?: string;
}

export function Wizard({
  current,
  defaultCurrent = 0,
  onChange,
  children,
  className,
}: WizardProps) {
  const [internal, setInternal] = React.useState(defaultCurrent);
  const isControlled = current !== undefined;
  const value = isControlled ? (current ?? 0) : internal;
  const steps = React.Children.toArray(children).filter(React.isValidElement);

  function update(next: number) {
    const clamped = Math.max(0, Math.min(steps.length - 1, next));
    if (!isControlled) setInternal(clamped);
    onChange?.(clamped);
  }

  const ctx: WizardContextValue = {
    current: value,
    setCurrent: update,
    count: steps.length,
    next: () => update(value + 1),
    prev: () => update(value - 1),
    goTo: update,
    isFirst: value === 0,
    isLast: value === steps.length - 1,
  };

  return (
    <WizardCtx.Provider value={ctx}>
      <div className={cn('flex flex-col gap-6', className)}>{steps[value]}</div>
    </WizardCtx.Provider>
  );
}

export interface WizardStepProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export function WizardStep({ children }: WizardStepProps) {
  return <>{children}</>;
}
