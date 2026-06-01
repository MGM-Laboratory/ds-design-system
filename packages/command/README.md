# `@labmgm/command`

⌘K command palette for MGM Laboratory apps. Backed by `cmdk`.

```tsx
import {
  CommandPalette, CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
} from '@labmgm/command';

<CommandPalette>
  <CommandGroup heading="Pages">
    <CommandItem onSelect={() => router.push('/discover')}>
      Discover <CommandShortcut>⌘D</CommandShortcut>
    </CommandItem>
    <CommandItem onSelect={() => router.push('/library')}>Library</CommandItem>
  </CommandGroup>
  <CommandSeparator />
  <CommandGroup heading="Actions">
    <CommandItem onSelect={signOut}>Sign out</CommandItem>
  </CommandGroup>
</CommandPalette>
```

The palette opens on ⌘K (Cmd+K) or Ctrl+K. Set `shortcut={false}` to disable.
