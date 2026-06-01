import * as React from 'react';
import type { LucideIcon, LucideProps } from 'lucide-react';
import { DEFAULT_STROKE_WIDTH, ICON_SIZE, type IconSize } from './constants.js';

export interface IconProps extends Omit<LucideProps, 'size'> {
  /** The Lucide icon component to render. */
  icon: LucideIcon;
  /** Predefined size token (sm/md/lg) or a raw pixel number. Defaults to `md` (20px). */
  size?: IconSize | number;
}

/**
 * Polymorphic icon wrapper. Prefer the named re-exports for individual icons:
 *
 *   import { ArrowRight } from '@labmgm/icons';
 *   <ArrowRight />
 *
 * Use <Icon icon={…}> when the icon is data-driven (e.g., from an API response).
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { icon: IconComponent, size = 'md', strokeWidth = DEFAULT_STROKE_WIDTH, ...rest },
  ref,
) {
  const pixelSize = typeof size === 'number' ? size : ICON_SIZE[size];
  return (
    <IconComponent
      ref={ref}
      size={pixelSize}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth={false}
      {...rest}
    />
  );
});
