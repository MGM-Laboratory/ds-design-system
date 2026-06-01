import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface ProgressCircleProps extends React.SVGAttributes<SVGSVGElement> {
  /** 0–100. */
  value: number;
  size?: number;
  strokeWidth?: number;
  tone?: 'brand-blue' | 'brand-green' | 'brand-red' | 'ink';
  /** Renders the percentage in the center. */
  showValue?: boolean;
}

const toneColor = {
  'brand-blue': '#3a6dc5',
  'brand-green': '#0f8657',
  'brand-red': '#f94141',
  ink: '#0e1116',
} as const;

export const ProgressCircle = React.forwardRef<SVGSVGElement, ProgressCircleProps>(
  function ProgressCircle(
    { value, size = 56, strokeWidth = 5, tone = 'ink', showValue, className, ...rest },
    ref,
  ) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;
    return (
      <div className={cn('relative inline-flex items-center justify-center', className)}>
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-label={`${Math.round(value)}%`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          {...rest}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#ececea"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={toneColor[tone]}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 320ms cubic-bezier(0.22, 1, 0.36, 1)' }}
          />
        </svg>
        {showValue && (
          <span className="absolute font-mono text-caption font-medium tabular-nums">
            {Math.round(value)}%
          </span>
        )}
      </div>
    );
  },
);
