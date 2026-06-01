import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: 14 | 16 | 18 | 20 | 24 | 32;
  /** Label for screen readers. */
  label?: string;
}

/** Spinning ring loader. Inherits `currentColor`. */
export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(function Spinner(
  { size = 20, label, className, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('animate-spin', className)}
      role={label ? 'status' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.25" opacity="0.2" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
});
