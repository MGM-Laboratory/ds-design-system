import * as React from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import { cn } from '@labmgm/utils';

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof RadixProgress.Root> {
  /** 0–100. Set to null for indeterminate. */
  value?: number | null;
  /** Visual height (px). */
  size?: number;
  tone?: 'brand-blue' | 'brand-green' | 'brand-red' | 'ink';
}

const toneFill = {
  'brand-blue': 'bg-brand-blue',
  'brand-green': 'bg-brand-green',
  'brand-red': 'bg-brand-red',
  ink: 'bg-ink',
} as const;

export const Progress = React.forwardRef<React.ElementRef<typeof RadixProgress.Root>, ProgressProps>(
  function Progress({ value = 0, size = 6, tone = 'ink', className, ...rest }, ref) {
    return (
      <RadixProgress.Root
        ref={ref}
        value={value ?? undefined}
        className={cn('relative w-full overflow-hidden rounded-full bg-line', className)}
        style={{ height: size }}
        {...rest}
      >
        <RadixProgress.Indicator
          className={cn('h-full w-full rounded-full transition-transform duration-320 ease-out-soft', toneFill[tone])}
          style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
        />
      </RadixProgress.Root>
    );
  },
);
