import * as React from 'react';
import { Cell, Legend, Pie, PieChart as RechartsPieChart, Tooltip } from 'recharts';
import { ChartContainer } from './ChartContainer.js';
import { CHART_PALETTE } from './palette.js';

export interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  colors?: readonly string[];
  height?: number;
  legend?: boolean;
  className?: string;
  innerRadius?: number;
  outerRadius?: number;
}

export function PieChart({
  data,
  colors = CHART_PALETTE,
  height = 240,
  legend = true,
  className,
  innerRadius = 0,
  outerRadius = 90,
}: PieChartProps) {
  return (
    <ChartContainer height={height} className={className}>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ borderRadius: 8, borderColor: '#ececea', fontFamily: 'var(--font-sans)' }}
        />
        {legend && <Legend wrapperStyle={{ fontFamily: 'var(--font-sans)', fontSize: 12 }} />}
      </RechartsPieChart>
    </ChartContainer>
  );
}
