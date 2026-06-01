import * as React from 'react';
import { ChevronRight } from '@labmgm/icons';
import { cn } from '@labmgm/utils';

export const Breadcrumb = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function Breadcrumb({ className, ...rest }, ref) {
    return <nav ref={ref} aria-label="Breadcrumb" className={cn(className)} {...rest} />;
  },
);

export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.OlHTMLAttributes<HTMLOListElement>>(
  function BreadcrumbList({ className, ...rest }, ref) {
    return (
      <ol
        ref={ref}
        className={cn('flex flex-wrap items-center gap-1.5 text-body-sm text-ink-3', className)}
        {...rest}
      />
    );
  },
);

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  function BreadcrumbItem({ className, ...rest }, ref) {
    return <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...rest} />;
  },
);

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  function BreadcrumbLink({ className, ...rest }, ref) {
    return (
      <a
        ref={ref}
        className={cn('transition-colors hover:text-ink', className)}
        {...rest}
      />
    );
  },
);

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  function BreadcrumbPage({ className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        role="link"
        aria-current="page"
        aria-disabled="true"
        className={cn('font-medium text-ink', className)}
        {...rest}
      />
    );
  },
);

export function BreadcrumbSeparator({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('inline-flex text-ink-4', className)}
      {...rest}
    >
      <ChevronRight size={14} />
    </span>
  );
}
