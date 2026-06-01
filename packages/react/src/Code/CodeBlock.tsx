import * as React from 'react';
import { cn } from '@labmgm/utils';
import { CopyButton } from '../CopyButton/CopyButton.js';

export interface CodeBlockProps extends Omit<React.HTMLAttributes<HTMLPreElement>, 'children'> {
  /** Raw source as a string. */
  code: string;
  /** Optional language hint for the toolbar (no built-in highlighting; for that use @labmgm/rich-text). */
  language?: string;
  /** Show a copy button. */
  copyable?: boolean;
  /** File name or label shown above the code. */
  filename?: string;
}

/** Plain code block with optional copy button. For syntax highlighting use @labmgm/rich-text. */
export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(function CodeBlock(
  { code, language, copyable = true, filename, className, ...rest },
  ref,
) {
  return (
    <div className={cn('relative rounded-md border border-line bg-surface-muted', className)}>
      {(filename || language) && (
        <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-1.5 text-caption text-ink-3">
          <span>{filename ?? language}</span>
          {copyable && <CopyButton value={code} />}
        </div>
      )}
      <pre
        ref={ref}
        className={cn('overflow-x-auto p-4 font-mono text-mono text-ink-2 leading-relaxed', className)}
        {...rest}
      >
        <code>{code}</code>
      </pre>
      {!filename && !language && copyable && (
        <div className="absolute right-2 top-2">
          <CopyButton value={code} />
        </div>
      )}
    </div>
  );
});
