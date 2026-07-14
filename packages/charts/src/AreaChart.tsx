import * as React from 'react';
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartContainer } from './ChartContainer.js';
import { CHART_PALETTE } from './palette.js';

export interface AreaChartProps {
  data: Array<Record<string, unknown>>;
  xKey: string;
  yKeys: string[];
  colors?: readonly string[];
  height?: number;
  legend?: boolean;
  grid?: boolean;
  stacked?: boolean;
  className?: string;
}

export function AreaChart({
  data,
  xKey,
  yKeys,
  colors = CHART_PALETTE,
  height,
  legend = true,
  grid = true,
  stacked,
  className,
}: AreaChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsAreaChart data={data}>
        <defs>
          {yKeys.map((key, i) => (
            <linearGradient key={key} id={`mgm-area-${key}-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={colors[i % colors.length]} stopOpacity={0.4} />
              <stop offset="100%" stopColor={colors[i % colors.length]} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        {grid && <CartesianGrid stroke="#ececea" strokeDasharray="3 3" vertical={false} />}
        <XAxis
          dataKey={xKey}
          stroke="#6b7280"
          tick={{ fontSize: 12, fontFamily: 'var(--font-sans)' }}
          tickLine={false}
        />
        <YAxis
          stroke="#6b7280"
          tick={{ fontSize: 12, fontFamily: 'var(--font-sans)' }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{ borderRadius: 8, borderColor: '#ececea', fontFamily: 'var(--font-sans)' }}
        />
        {legend && <Legend wrapperStyle={{ fontFamily: 'var(--font-sans)', fontSize: 12 }} />}
        {yKeys.map((key, i) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[i % colors.length]}
            strokeWidth={2.25}
            fill={`url(#mgm-area-${key}-${i})`}
            stackId={stacked ? 'a' : undefined}
          />
        ))}
      </RechartsAreaChart>
    </ChartContainer>
  );
}
