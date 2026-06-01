import * as React from 'react';
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartContainer } from './ChartContainer.js';
import { CHART_PALETTE } from './palette.js';

export interface BarChartProps {
  data: Array<Record<string, unknown>>;
  /** X-axis key (categorical). */
  xKey: string;
  /** One bar per `yKeys` entry. */
  yKeys: string[];
  colors?: readonly string[];
  height?: number;
  legend?: boolean;
  grid?: boolean;
  stacked?: boolean;
  className?: string;
}

export function BarChart({
  data,
  xKey,
  yKeys,
  colors = CHART_PALETTE,
  height,
  legend = true,
  grid = true,
  stacked,
  className,
}: BarChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsBarChart data={data}>
        {grid && <CartesianGrid stroke="#ececea" strokeDasharray="3 3" vertical={false} />}
        <XAxis
          dataKey={xKey}
          stroke="#6b7280"
          tick={{ fontSize: 12, fontFamily: 'var(--font-sans)' }}
          tickLine={false}
          axisLine={{ stroke: '#ececea' }}
        />
        <YAxis stroke="#6b7280" tick={{ fontSize: 12, fontFamily: 'var(--font-sans)' }} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={{ borderRadius: 8, borderColor: '#ececea', fontFamily: 'var(--font-sans)' }} />
        {legend && <Legend wrapperStyle={{ fontFamily: 'var(--font-sans)', fontSize: 12 }} />}
        {yKeys.map((key, i) => (
          <Bar
            key={key}
            dataKey={key}
            fill={colors[i % colors.length]}
            radius={[4, 4, 0, 0]}
            stackId={stacked ? 'a' : undefined}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
}
