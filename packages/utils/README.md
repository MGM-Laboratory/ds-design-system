# `@labmgm/utils`

> Small, dependency-light helpers used across the MGM design system.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Futils?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/utils)

```bash
pnpm add @labmgm/utils
```

```ts
import { cn, initials, formatBytes, formatRelativeTime } from '@labmgm/utils';

cn('px-2 py-1', condition && 'bg-brand-blue', 'px-4');
// → "py-1 bg-brand-blue px-4"   (Tailwind conflicts resolved)

initials('Jane Doe'); // → "JD"
formatBytes(5_242_880); // → "5.0 MB"
formatRelativeTime('2025-01-01'); // → "1 year ago"
```

---

## `cn()` — Tailwind class merge with MGM token awareness

The single most-used utility in the design system. Wraps `clsx` + an `extendTailwindMerge()` instance pre-configured with the MGM custom tokens. **Critical**: stock `tailwind-merge` doesn't know that `text-body` is a font-size (not a color), so it would silently drop `text-white` when paired with `text-body`. This `cn()` does the right thing.

```ts
cn('text-body text-white'); // → 'text-body text-white'   (both kept)
cn('text-white text-ink'); // → 'text-ink'               (real color conflict, last wins)
cn('shadow-1 shadow-2'); // → 'shadow-2'               (real shadow conflict)
cn('rounded-sm rounded-lg'); // → 'rounded-lg'             (real radius conflict)
```

Registered MGM token groups: `font-size`, `rounded`, `shadow`, `duration`, `ease`. See [`src/cn.ts`](./src/cn.ts).

---

## Full export list

### Class merging

- `cn(...inputs)` — Tailwind-aware class composition

### Number / data formatting

- `formatBytes(bytes, decimals?)` → `"5.0 MB"`
- `formatNumber(value, options?, locale?)`
- `formatPercent(value, decimals?, locale?)`
- `formatCurrency(value, currency?, locale?, options?)`

### Date / time formatting

- `formatDate(input, options?, locale?)`
- `formatRelativeTime(input, locale?)` → `"1 year ago"`
- `formatDuration(seconds)` → `"1h 30m 25s"`

### String formatting

- `initials(name, maxLength?)` → `"JD"`
- `truncate(input, max, ellipsis?)`
- `slugify(input)`
- `capitalize(input)`
- `pluralize(count, singular, plural?)`

### Arrays

- `range(start, end?, step?)`
- `chunk(input, size)`
- `unique(input)`
- `groupBy(input, key)`
- `sortBy(input, ...selectors)`

### Objects

- `isObject(value)`
- `isPlainObject(value)`
- `isEmpty(value)`
- `isNil(value)`
- `deepMerge(target, ...sources)`

### Control flow

- `invariant(condition, message?)`
- `assert(condition, message?)`
- `noop()`
- `identity(value)`
- `sleep(ms)` — Promise
- `debounce(fn, wait)` — returns `(…args)` with `.cancel()`
- `throttle(fn, wait)` — returns `(…args)`

### Refs

- `composeRefs(...refs)` → callback ref
- `useComposedRefs(...refs)` — memoized version

### Polymorphic types (types only)

- `PolymorphicRef<E>`
- `PolymorphicComponentProps<E, Props>`
- `AsProps<E>`

---

## License

MIT © MGM Laboratory
