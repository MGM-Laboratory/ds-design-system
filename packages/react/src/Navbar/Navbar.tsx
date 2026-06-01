import * as React from 'react';
import { cn } from '@labmgm/utils';

export const Navbar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function Navbar({ className, ...rest }, ref) {
    return (
      <header
        ref={ref}
        className={cn(
          'sticky top-0 z-40 w-full border-b border-line bg-bg/90 backdrop-blur',
          className,
        )}
        {...rest}
      />
    );
  },
);

export const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function NavbarBrand({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('flex items-center gap-2.5', className)} {...rest} />;
  },
);

export const NavbarSection = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function NavbarSection({ className, ...rest }, ref) {
    return <div ref={ref} className={cn('flex items-center gap-2', className)} {...rest} />;
  },
);

export const NavbarItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  function NavbarItem({ className, ...rest }, ref) {
    return (
      <a
        ref={ref}
        className={cn(
          'inline-flex h-9 items-center rounded-sm px-3 text-body-sm font-medium text-ink-2 transition-colors',
          'hover:bg-surface-muted hover:text-ink',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
          'aria-[current=page]:text-ink aria-[current=page]:bg-surface-muted',
          className,
        )}
        {...rest}
      />
    );
  },
);
