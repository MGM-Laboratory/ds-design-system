import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  CommandPalette,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@labmgm/command';
import { Button } from '@labmgm/react';

const meta = { title: 'Components/CommandPalette', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpen(true)}>Open palette</Button>
          <span className="text-caption text-ink-3">
            or press <kbd>⌘K</kbd>
          </span>
        </div>
        <CommandPalette open={open} onOpenChange={setOpen}>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => alert('Discover')}>
              Discover <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => alert('Library')}>Library</CommandItem>
            <CommandItem onSelect={() => alert('Settings')}>Settings</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => alert('Sign out')}>Sign out</CommandItem>
          </CommandGroup>
        </CommandPalette>
      </>
    );
  },
};
