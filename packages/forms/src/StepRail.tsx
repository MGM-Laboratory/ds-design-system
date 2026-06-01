import * as React from 'react';
import { Check } from '@labmgm/icons';
import { cn } from '@labmgm/utils';
import { useWizard } from './Wizard.js';

export interface StepRailProps {
  steps: Array<{ title: React.ReactNode; description?: React.ReactNode }>;
  /** Allow clicking a step to jump back/forward. */
  navigable?: boolean;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Render a step indicator that reads from the surrounding <Wizard> context.
 */
export function StepRail({ steps, navigable, orientation = 'vertical', className }: StepRailProps) {
  const wizard = useWizard();
  return (
    <ol
      className={cn(
        orientation === 'vertical' ? 'flex flex-col gap-4' : 'flex flex-row items-center gap-4',
        className,
      )}
    >
      {steps.map((s, i) => {
        const status = i < wizard.current ? 'complete' : i === wizard.current ? 'active' : 'pending';
        const content = (
          <div className="flex items-start gap-3">
            <span
              className={cn(
                'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-caption font-semibold',
                status === 'complete' && 'bg-brand-green border-brand-green text-white',
                status === 'active' && 'bg-ink border-ink text-white',
                status === 'pending' && 'bg-surface border-line text-ink-3',
              )}
            >
              {status === 'complete' ? <Check size={14} /> : i + 1}
            </span>
            <div className="flex flex-col text-left">
              <span
                className={cn(
                  'text-body-sm font-medium',
                  status === 'pending' ? 'text-ink-3' : 'text-ink',
                )}
              >
                {s.title}
              </span>
              {s.description && <span className="text-caption text-ink-3">{s.description}</span>}
            </div>
          </div>
        );
        return (
          <li key={i}>
            {navigable ? (
              <button
                type="button"
                onClick={() => wizard.goTo(i)}
                className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:rounded-sm"
              >
                {content}
              </button>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ol>
  );
}
