# `@labmgm/toast`

> MGM-styled toast notifications backed by Sonner.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Ftoast?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/toast)

```bash
pnpm add @labmgm/toast
```

> [Storybook (Feedback / Toast)](https://ds.labmgm.org/?path=/docs/feedback-toast--docs) · [Source](./src)

---

## Usage

```tsx
import { Toaster, toast } from '@labmgm/toast';

// 1. Mount once near the root of your app:
export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}

// 2. Call toast from anywhere:
toast('Saved');
toast.success('Asset published');
toast.error('Upload failed', { description: 'Network unreachable' });
toast.warning('Almost out of space');
toast.info('New version available');
toast.loading('Generating thumbnails…');
```

## Tones

| Method | Background | Use |
|---|---|---|
| `toast(…)` | neutral | Default acknowledgement |
| `toast.success(…)` | brand-green-50 | Operation completed |
| `toast.error(…)` | brand-red-50 | Operation failed |
| `toast.warning(…)` | brand-yellow-50 | Approaching limit |
| `toast.info(…)` | brand-blue-50 | New information |
| `toast.loading(…)` | white | In-flight async work |

All toast variants use **literal hex** text colors so they read correctly regardless of the surrounding surface scope.

## `<Toaster>` props

Pass any Sonner props through:

```tsx
<Toaster position="top-right" expand richColors={false} duration={5000} />
```

## License

MIT © MGM Laboratory
