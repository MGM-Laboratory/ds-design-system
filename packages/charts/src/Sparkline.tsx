import * as React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { cn } from '@labmgm/utils';
import { BRAND_COLORS } from './palette.js';

export interface SparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
}

/** Compact inline trend chart with no axes. Inherit colors via `color`. */
export function Sparkline({
  data,
  color = BRAND_COLORS.blue,
  width = 96,
  height = 28,
  strokeWidth = 2,
  className,
}: SparklineProps) {
  const points = data.map((value, i) => ({ i, value }));
  return (
    <div className={cn('inline-block', className)} style={{ width, height }} aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={strokeWidth}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
