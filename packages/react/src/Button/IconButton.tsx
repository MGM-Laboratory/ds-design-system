import * as React from 'react';
import { Button, type ButtonProps } from './Button.js';

export interface IconButtonProps extends Omit<ButtonProps, 'leadingIcon' | 'trailingIcon' | 'children'> {
  /** The single icon rendered inside. */
  icon: React.ReactNode;
  /** Required label for assistive tech. */
  label: string;
}

/**
 * Square-aspect button containing a single icon. Always pass `label` — there is no visible text.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, size = 'icon', ...rest },
  ref,
) {
  return (
    <Button ref={ref} size={size} aria-label={label} {...rest}>
      {icon}
    </Button>
  );
});
