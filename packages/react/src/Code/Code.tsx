import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

export const Code = React.forwardRef<HTMLElement, CodeProps>(function Code(
  { className, ...rest },
  ref,
) {
  return (
    <code
      ref={ref}
      className={cn(
        'rounded-sm bg-surface-muted px-1.5 py-0.5 font-mono text-mono text-ink-2 border border-line',
        className,
      )}
      {...rest}
    />
  );
});
