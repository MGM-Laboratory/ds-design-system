import { useEffect, useRef, useState } from 'react';

export function useThrottle<T>(value: T, interval = 300): T {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - lastRan.current;
    if (elapsed >= interval) {
      lastRan.current = Date.now();
      setThrottled(value);
      return;
    }
    const id = setTimeout(() => {
      lastRan.current = Date.now();
      setThrottled(value);
    }, interval - elapsed);
    return () => clearTimeout(id);
  }, [value, interval]);

  return throttled;
}
