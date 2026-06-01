# `@labmgm/utils`

Small, dependency-light helpers used across the MGM design system.

```bash
pnpm add @labmgm/utils
```

```ts
import { cn, initials, formatBytes, formatRelativeTime } from '@labmgm/utils';

cn('px-2 py-1', condition && 'bg-brand-blue', 'px-4');
// → "py-1 bg-brand-blue px-4"  (Tailwind conflicts resolved)

initials('Jane Doe');               // → "JD"
formatBytes(5_242_880);             // → "5.0 MB"
formatRelativeTime('2025-01-01');   // → "1 year ago"
```

Exports: `cn`, `formatBytes`, `formatNumber`, `formatPercent`, `formatCurrency`, `formatDate`, `formatRelativeTime`, `formatDuration`, `initials`, `truncate`, `slugify`, `capitalize`, `pluralize`, `range`, `chunk`, `unique`, `groupBy`, `sortBy`, `isObject`, `isPlainObject`, `isEmpty`, `isNil`, `deepMerge`, `invariant`, `assert`, `noop`, `identity`, `sleep`, `debounce`, `throttle`, `composeRefs`, `useComposedRefs`.
