import { useEffect, useState, type RefObject } from 'react';

export function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverInit = {},
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([first]) => first && setEntry(first), options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.root, options.rootMargin, options.threshold]);

  return entry;
}
