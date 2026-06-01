import * as React from 'react';
import { Check, Copy } from '@labmgm/icons';
import { IconButton } from '../Button/IconButton.js';
import type { ButtonProps } from '../Button/Button.js';

export interface CopyButtonProps extends Omit<ButtonProps, 'children' | 'onClick' | 'onCopy'> {
  /** Text to copy to clipboard. */
  value: string;
  /** How long to show the "copied" state. */
  duration?: number;
  /** Optional callback when the copy succeeds. */
  onCopy?: (value: string) => void;
}

/** One-click copy. Renders an IconButton that flips to a checkmark for ~1.6s after copy. */
export const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(function CopyButton(
  { value, duration = 1600, onCopy, ...rest },
  ref,
) {
  const [copied, setCopied] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <IconButton
      ref={ref}
      variant="ghost"
      size="icon-sm"
      icon={copied ? <Check size={16} /> : <Copy size={16} />}
      label={copied ? 'Copied' : 'Copy to clipboard'}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          onCopy?.(value);
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setCopied(false), duration);
        } catch {
          /* user-rejected or older browser */
        }
      }}
      {...rest}
    />
  );
});
