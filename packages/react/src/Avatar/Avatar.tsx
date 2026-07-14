import * as React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { cn, initials } from '@labmgm/utils';

const sizeMap = {
  sm: 'h-6 w-6 text-[11px]',
  md: 'h-9 w-9 text-body-sm',
  lg: 'h-12 w-12 text-body-lg',
} as const;

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** Falls back to this name's initials if `src` fails. */
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { src, alt, name, size = 'md', className, ...rest },
  ref,
) {
  return (
    <RadixAvatar.Root
      ref={ref}
      className={cn(
        'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-surface-muted font-medium text-ink-2',
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      {src && (
        <RadixAvatar.Image
          src={src}
          alt={alt ?? name ?? 'Avatar'}
          className="aspect-square h-full w-full object-cover"
        />
      )}
      <RadixAvatar.Fallback
        delayMs={300}
        className="flex h-full w-full items-center justify-center"
      >
        {name ? initials(name) : '?'}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
});

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum avatars to show before collapsing into a "+N" indicator. */
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(function AvatarGroup(
  { max = 4, size = 'md', className, children, ...rest },
  ref,
) {
  const items = React.Children.toArray(children);
  const visible = items.slice(0, max);
  const hidden = items.length - visible.length;
  return (
    <div ref={ref} className={cn('inline-flex items-center -space-x-2', className)} {...rest}>
      {visible.map((child, i) =>
        React.isValidElement(child) ? (
          <span key={i} className="rounded-full ring-2 ring-bg">
            {child}
          </span>
        ) : null,
      )}
      {hidden > 0 && (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-surface-muted font-medium text-ink-2 ring-2 ring-bg',
            sizeMap[size],
          )}
        >
          +{hidden}
        </span>
      )}
    </div>
  );
});
