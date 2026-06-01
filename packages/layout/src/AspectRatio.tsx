import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width / Height (e.g., 16 / 9 ≈ 1.778). */
  ratio: number;
}

/**
 * Lock children to a width-to-height ratio. Common presets: 1 (square), 16/9 (video), 4/3, 21/9.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(function AspectRatio(
  { ratio, className, style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('relative w-full overflow-hidden', className)}
      style={{ aspectRatio: String(ratio), ...style }}
      {...rest}
    >
      {children}
    </div>
  );
});
