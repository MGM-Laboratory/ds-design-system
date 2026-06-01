import * as React from 'react';
import * as RadixMenu from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from '@labmgm/icons';
import { cn } from '@labmgm/utils';

export const DropdownMenu = RadixMenu.Root;
export const DropdownMenuTrigger = RadixMenu.Trigger;
export const DropdownMenuGroup = RadixMenu.Group;
export const DropdownMenuRadioGroup = RadixMenu.RadioGroup;
export const DropdownMenuSub = RadixMenu.Sub;

const menuContentClasses = [
  'z-50 min-w-[12rem] overflow-hidden rounded-md border border-line bg-surface p-1 text-ink shadow-2',
  'data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-in',
];

const menuItemClasses = [
  'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-body-sm outline-none',
  'transition-colors',
  'data-[highlighted]:bg-surface-muted',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
];

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Content>
>(function DropdownMenuContent({ className, sideOffset = 6, ...rest }, ref) {
  return (
    <RadixMenu.Portal>
      <RadixMenu.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(menuContentClasses, className)}
        {...rest}
      />
    </RadixMenu.Portal>
  );
});

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Item> & { inset?: boolean }
>(function DropdownMenuItem({ className, inset, ...rest }, ref) {
  return <RadixMenu.Item ref={ref} className={cn(menuItemClasses, inset && 'pl-8', className)} {...rest} />;
});

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.CheckboxItem>
>(function DropdownMenuCheckboxItem({ className, children, checked, ...rest }, ref) {
  return (
    <RadixMenu.CheckboxItem
      ref={ref}
      checked={checked}
      className={cn(menuItemClasses, 'pl-8', className)}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixMenu.ItemIndicator>
          <Check size={14} />
        </RadixMenu.ItemIndicator>
      </span>
      {children}
    </RadixMenu.CheckboxItem>
  );
});

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.RadioItem>
>(function DropdownMenuRadioItem({ className, children, ...rest }, ref) {
  return (
    <RadixMenu.RadioItem ref={ref} className={cn(menuItemClasses, 'pl-8', className)} {...rest}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixMenu.ItemIndicator>
          <Circle size={8} className="fill-current" />
        </RadixMenu.ItemIndicator>
      </span>
      {children}
    </RadixMenu.RadioItem>
  );
});

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Label>
>(function DropdownMenuLabel({ className, ...rest }, ref) {
  return (
    <RadixMenu.Label
      ref={ref}
      className={cn('px-2 py-1.5 text-eyebrow uppercase text-ink-3', className)}
      {...rest}
    />
  );
});

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Separator>
>(function DropdownMenuSeparator({ className, ...rest }, ref) {
  return <RadixMenu.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-line', className)} {...rest} />;
});

export const DropdownMenuShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...rest
}) => <span className={cn('ml-auto text-caption text-ink-3', className)} {...rest} />;

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.SubTrigger>
>(function DropdownMenuSubTrigger({ className, children, ...rest }, ref) {
  return (
    <RadixMenu.SubTrigger ref={ref} className={cn(menuItemClasses, className)} {...rest}>
      {children}
      <ChevronRight size={14} className="ml-auto" />
    </RadixMenu.SubTrigger>
  );
});

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.SubContent>
>(function DropdownMenuSubContent({ className, ...rest }, ref) {
  return <RadixMenu.SubContent ref={ref} className={cn(menuContentClasses, className)} {...rest} />;
});
