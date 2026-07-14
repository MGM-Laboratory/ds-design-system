import * as React from 'react';
import { cn } from '@labmgm/utils';
import { ResponsiveContainer } from 'recharts';

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
}

export function ChartContainer({
  height = 240,
  className,
  children,
  ...rest
}: ChartContainerProps) {
  return (
    <div className={cn('w-full', className)} style={{ height }} {...rest}>
      <ResponsiveContainer width="100%" height="100%">
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  );
}
