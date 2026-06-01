import { useEffect, useState, type RefObject } from 'react';

export function useResizeObserver<T extends HTMLElement>(ref: RefObject<T>): DOMRect | null {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver((entries) => {
      const e = entries[0];
      if (e) setRect(e.contentRect);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return rect;
}
