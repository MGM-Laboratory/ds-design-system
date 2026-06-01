import * as React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { cn } from '@labmgm/utils';
import { buttonVariants, type ButtonProps } from './Button.js';

type ToggleGroupRootProps = React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>;

export interface ToggleButtonGroupProps
  extends Omit<ToggleGroupRootProps, 'asChild'>,
    Pick<ButtonProps, 'size'> {
  itemClassName?: string;
}

export const ToggleButtonGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  ToggleButtonGroupProps
>(function ToggleButtonGroup({ size = 'md', className, itemClassName: _i, children, ...rest }, ref) {
  return (
    <ToggleGroup.Root
      ref={ref}
      className={cn(
        'inline-flex rounded-md border border-line bg-surface p-1 gap-1',
        className,
      )}
      data-size={size}
      {...(rest as ToggleGroupRootProps)}
    >
      {children}
    </ToggleGroup.Root>
  );
}) as React.ForwardRefExoticComponent<ToggleButtonGroupProps & React.RefAttributes<HTMLDivElement>> & {
  Item: typeof ToggleGroupItem;
};

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>
>(function ToggleGroupItem({ className, ...rest }, ref) {
  return (
    <ToggleGroup.Item
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'data-[state=on]:bg-surface-inverse data-[state=on]:text-white',
        className,
      )}
      {...rest}
    />
  );
});

(ToggleButtonGroup as { Item?: typeof ToggleGroupItem }).Item = ToggleGroupItem;
