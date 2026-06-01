import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Show a shimmer skeleton while loading. */
  showSkeleton?: boolean;
  /** Aspect ratio (width / height). */
  ratio?: number;
  /** Object-fit mode. */
  fit?: 'cover' | 'contain';
}

/**
 * Image with built-in loading shimmer and aspect ratio lock.
 * For Next.js apps, prefer `next/image` for src-set + lazy loading; this is the framework-agnostic fallback.
 */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(
  { showSkeleton = true, ratio, fit = 'cover', className, onLoad, ...rest },
  ref,
) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div
      className={cn('relative overflow-hidden bg-surface-muted', ratio && 'w-full')}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {showSkeleton && !loaded && <div className="absolute inset-0 mgm-shimmer" aria-hidden="true" />}
      <img
        ref={ref}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          'h-full w-full transition-opacity duration-320 ease-out-soft',
          fit === 'cover' ? 'object-cover' : 'object-contain',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        {...rest}
      />
    </div>
  );
});
