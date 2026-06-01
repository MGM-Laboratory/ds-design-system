# `@labmgm/toast`

MGM-styled toast notifications backed by Sonner.

```tsx
import { Toaster, toast } from '@labmgm/toast';

// Mount once near the root:
<Toaster />

// Call from anywhere:
toast('Saved');
toast.success('Asset published');
toast.error('Upload failed', { description: 'Network unreachable' });
toast.warning('Almost out of space');
toast.info('New version available');
toast.loading('Generating thumbnails…');
```
