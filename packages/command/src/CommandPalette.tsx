import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '@labmgm/utils';
import { useKeyboardShortcut } from '@labmgm/hooks';

export interface CommandPaletteProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Default ⌘K / Ctrl+K shortcut. Set false to disable. */
  shortcut?: boolean;
  placeholder?: string;
  children: React.ReactNode;
}

/**
 * Top-level command palette with optional ⌘K binding.
 *
 *   <CommandPalette>
 *     <CommandGroup heading="Pages">
 *       <CommandItem onSelect={() => router.push('/discover')}>Discover</CommandItem>
 *     </CommandGroup>
 *   </CommandPalette>
 */
export function CommandPalette({
  open,
  defaultOpen,
  onOpenChange,
  shortcut = true,
  placeholder = 'Type a command or search…',
  children,
}: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  function setOpen(next: boolean) {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  }

  useKeyboardShortcut({ key: 'k', mod: true }, () => setOpen(!isOpen), shortcut);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-surface-inverse/40 data-[state=open]:animate-fade-in fixed inset-0 z-50 backdrop-blur-sm" />
        <Dialog.Content
          aria-label="Command palette"
          data-surface="default"
          className="border-line bg-surface shadow-3 data-[state=open]:animate-scale-in fixed top-[20%] left-[50%] z-50 w-full max-w-xl -translate-x-1/2 rounded-md border outline-none"
        >
          <Command className="flex flex-col">
            <CommandInput placeholder={placeholder} />
            <CommandList>{children}</CommandList>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof Command.Input>,
  React.ComponentPropsWithoutRef<typeof Command.Input>
>(function CommandInput({ className, ...rest }, ref) {
  return (
    <div className="border-line flex items-center gap-2 border-b px-4">
      <Search size={16} className="text-ink-3" />
      <Command.Input
        ref={ref}
        autoFocus
        className={cn(
          'text-body text-ink placeholder:text-ink-4 h-12 w-full bg-transparent outline-none',
          className,
        )}
        {...rest}
      />
    </div>
  );
});

export const CommandList = React.forwardRef<
  React.ElementRef<typeof Command.List>,
  React.ComponentPropsWithoutRef<typeof Command.List>
>(function CommandList({ className, ...rest }, ref) {
  return (
    <Command.List
      ref={ref}
      className={cn('max-h-[400px] overflow-auto p-2', className)}
      {...rest}
    />
  );
});

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof Command.Empty>,
  React.ComponentPropsWithoutRef<typeof Command.Empty>
>(function CommandEmpty({ className, ...rest }, ref) {
  return (
    <Command.Empty
      ref={ref}
      className={cn('text-caption text-ink-3 py-8 text-center', className)}
      {...rest}
    />
  );
});

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof Command.Group>,
  React.ComponentPropsWithoutRef<typeof Command.Group>
>(function CommandGroup({ className, ...rest }, ref) {
  return (
    <Command.Group
      ref={ref}
      className={cn(
        '[&_[cmdk-group-heading]]:text-eyebrow [&_[cmdk-group-heading]]:text-ink-3 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:uppercase',
        className,
      )}
      {...rest}
    />
  );
});

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof Command.Item>,
  React.ComponentPropsWithoutRef<typeof Command.Item>
>(function CommandItem({ className, ...rest }, ref) {
  return (
    <Command.Item
      ref={ref}
      className={cn(
        'text-body-sm text-ink relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 outline-none select-none',
        'data-[selected=true]:bg-surface-muted',
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        className,
      )}
      {...rest}
    />
  );
});

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof Command.Separator>,
  React.ComponentPropsWithoutRef<typeof Command.Separator>
>(function CommandSeparator({ className, ...rest }, ref) {
  return (
    <Command.Separator ref={ref} className={cn('bg-line -mx-1 my-1 h-px', className)} {...rest} />
  );
});

export const CommandShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...rest
}) => (
  <span className={cn('text-caption text-ink-3 ml-auto tracking-widest', className)} {...rest} />
);
