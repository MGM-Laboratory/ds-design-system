import * as React from 'react';
import { cn } from '@labmgm/utils';
import { Logo } from './Logo.js';

export interface WordmarkProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  /** Render as an `<a>` linking to this href. Defaults to a div. */
  href?: string;
  /** Show the company name to the right of the mark. */
  showName?: boolean;
  /** Override the displayed name. */
  name?: string;
  /** Logo size in px. */
  size?: number;
}

/**
 * Logo + "MGM Laboratory" wordmark lockup. Used in nav bars, footers, and login screens.
 */
export const Wordmark = React.forwardRef<HTMLElement, WordmarkProps>(function Wordmark(
  { href, showName = true, name = 'MGM Laboratory', size = 28, className, ...rest },
  ref,
) {
  const content = (
    <>
      <Logo size={size} label="MGM Laboratory" />
      {showName && (
        <span className="font-display text-ink text-h3 leading-none font-semibold tracking-tight">
          {name}
        </span>
      )}
    </>
  );
  const wrapperClass = cn('inline-flex items-center gap-2.5', className);
  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={wrapperClass}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={wrapperClass}
      {...(rest as React.HTMLAttributes<HTMLDivElement>)}
    >
      {content}
    </div>
  );
});
