import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface RichTextRendererProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Trusted HTML output from the editor. */
  html: string;
}

/**
 * Read-only renderer for editor HTML. Make sure the input is sanitized — this uses
 * `dangerouslySetInnerHTML` directly. Use a sanitizer at the boundary (e.g., DOMPurify).
 */
export const RichTextRenderer = React.forwardRef<HTMLDivElement, RichTextRendererProps>(
  function RichTextRenderer({ html, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'prose prose-sm max-w-prose',
          '[&_h1]:text-h1 [&_h2]:text-h2 [&_h3]:text-h3',
          '[&_a]:text-brand-blue [&_a]:underline [&_a]:underline-offset-[3px]',
          '[&_blockquote]:border-line-strong [&_blockquote]:border-l-2 [&_blockquote]:pl-3 [&_blockquote]:italic',
          '[&_code]:bg-surface-muted [&_code]:text-mono [&_code]:rounded-sm [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono',
          '[&_pre]:bg-surface-muted [&_pre]:text-mono [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:font-mono',
          className,
        )}
        dangerouslySetInnerHTML={{ __html: html }}
        {...rest}
      />
    );
  },
);
