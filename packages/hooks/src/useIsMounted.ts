import { useEffect, useState } from 'react';

/** True after the component mounts on the client. SSR-safe. */
export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
