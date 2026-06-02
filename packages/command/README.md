# `@labmgm/command`

> ⌘K command palette for MGM Laboratory apps.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fcommand?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/command)

Backed by `cmdk`. Mount the palette anywhere in your tree; pressing ⌘K (Cmd+K on macOS, Ctrl+K on Windows/Linux) opens it.

```bash
pnpm add @labmgm/command
```

> [Storybook (Components / CommandPalette)](https://mgm-laboratory.github.io/ds-design-system/?path=/docs/components-commandpalette--docs) · [Source](./src)

---

## Example

```tsx
import {
  CommandPalette,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
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

## Props

- `open` / `defaultOpen` / `onOpenChange` — control the palette state
- `shortcut={false}` — disable the global ⌘K binding
- `placeholder` — input placeholder text

## License

MIT © MGM Laboratory
