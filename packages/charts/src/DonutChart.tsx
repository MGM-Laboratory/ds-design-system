import * as React from 'react';
import { PieChart, type PieChartProps } from './PieChart.js';

export interface DonutChartProps extends Omit<PieChartProps, 'innerRadius'> {
  innerRadius?: number;
}

export function DonutChart({ innerRadius = 60, ...rest }: DonutChartProps) {
  return <PieChart {...rest} innerRadius={innerRadius} />;
}
