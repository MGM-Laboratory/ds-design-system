# `@labmgm/hooks`

> Safe, predictable React hooks used across MGM Laboratory products.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fhooks?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/hooks)

```bash
pnpm add @labmgm/hooks
```

## Hooks

| Hook                        | Signature                                          | Purpose                                    |
| --------------------------- | -------------------------------------------------- | ------------------------------------------ |
| `useMediaQuery`             | `(query, defaultValue?)` → `boolean`               | SSR-safe match-media subscription          |
| `useDebounce`               | `(value, delay?)` → `value`                        | Value debounce                             |
| `useThrottle`               | `(value, interval?)` → `value`                     | Value throttle                             |
| `useLocalStorage`           | `(key, initial)` → `[value, set]`                  | Persisted state                            |
| `useSessionStorage`         | same signature                                     | Session-scoped persisted state             |
| `useClickOutside`           | `(ref, handler, enabled?)`                         | Fire when click lands outside the ref      |
| `useKeyboardShortcut`       | `({ key, mod?, shift?, alt? }, handler, enabled?)` | Cross-platform ⌘/Ctrl shortcuts            |
| `useCopyToClipboard`        | `(timeout?)` → `[copied, copy]`                    | One-click copy with a timed flag           |
| `useIntersectionObserver`   | `(ref, options?)` → `entry \| null`                | Reactive intersection state                |
| `useResizeObserver`         | `(ref)` → `DOMRect \| null`                        | Reactive size state                        |
| `useReducedMotion`          | `()` → `boolean`                                   | True when user prefers reduced motion      |
| `useControllableState`      | `({ value?, defaultValue?, onChange })`            | Bridge controlled / uncontrolled           |
| `useIsMounted`              | `()` → `boolean`                                   | True after the component mounts (SSR-safe) |
| `usePrevious`               | `(value)` → `previous \| undefined`                | Previous render's value                    |
| `useIsomorphicLayoutEffect` | `useEffect` on server, `useLayoutEffect` on client | SSR-safe layout effects                    |

## License

MIT © MGM Laboratory
