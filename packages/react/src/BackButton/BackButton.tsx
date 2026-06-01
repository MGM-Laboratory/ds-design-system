import * as React from 'react';
import { ArrowLeft } from '@labmgm/icons';
import { Button, type ButtonProps } from '../Button/Button.js';

export interface BackButtonProps extends Omit<ButtonProps, 'leadingIcon'> {
  label?: string;
}

export const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(function BackButton(
  { label = 'Back', children, ...rest },
  ref,
) {
  return (
    <Button ref={ref} variant="ghost" size="sm" leadingIcon={<ArrowLeft size={16} />} {...rest}>
      {children ?? label}
    </Button>
  );
});
