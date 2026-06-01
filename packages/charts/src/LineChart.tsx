import * as React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartContainer } from './ChartContainer.js';
import { CHART_PALETTE } from './palette.js';

export interface LineChartProps {
  data: Array<Record<string, unknown>>;
  xKey: string;
  yKeys: string[];
  colors?: readonly string[];
  height?: number;
  legend?: boolean;
  grid?: boolean;
  curve?: 'linear' | 'monotone';
  className?: string;
}

export function LineChart({
  data,
  xKey,
  yKeys,
  colors = CHART_PALETTE,
  height,
  legend = true,
  grid = true,
  curve = 'monotone',
  className,
}: LineChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsLineChart data={data}>
        {grid && <CartesianGrid stroke="#ececea" strokeDasharray="3 3" vertical={false} />}
        <XAxis
          dataKey={xKey}
          stroke="#6b7280"
          tick={{ fontSize: 12, fontFamily: 'var(--font-sans)' }}
          tickLine={false}
        />
        <YAxis stroke="#6b7280" tick={{ fontSize: 12, fontFamily: 'var(--font-sans)' }} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={{ borderRadius: 8, borderColor: '#ececea', fontFamily: 'var(--font-sans)' }} />
        {legend && <Legend wrapperStyle={{ fontFamily: 'var(--font-sans)', fontSize: 12 }} />}
        {yKeys.map((key, i) => (
          <Line
            key={key}
            type={curve}
            dataKey={key}
            stroke={colors[i % colors.length]}
            strokeWidth={2.25}
            dot={false}
            activeDot={{ r: 5 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
}
