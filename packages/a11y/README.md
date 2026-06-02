# `@labmgm/a11y`

> Accessibility primitives.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fa11y?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/a11y)

```bash
pnpm add @labmgm/a11y
```

```ts
import { VisuallyHidden, Announcer, announce, FocusTrap, useFocusVisible } from '@labmgm/a11y';
```

## Exports

| Export | Purpose |
|---|---|
| `<VisuallyHidden>` | Hide content visually while keeping it for screen readers (re-export from Radix). |
| `<Announcer>` | Mount once at the root. Renders polite + assertive live regions. |
| `announce(message, urgency?)` | Push a message to the live region from anywhere. |
| `<FocusTrap>` | Lightweight Tab / Shift+Tab trap. For full Radix-grade behavior use `Dialog` from `@labmgm/react`. |
| `useFocusVisible()` | True after the user's last interaction was via keyboard. |

## License

MIT © MGM Laboratory
