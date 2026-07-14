import { useCallback, useEffect, useState } from 'react';

function buildStorageHook(storage: 'localStorage' | 'sessionStorage') {
  return function useStorage<T>(
    key: string,
    initial: T,
  ): [T, (value: T | ((prev: T) => T)) => void] {
    const read = useCallback((): T => {
      if (typeof window === 'undefined') return initial;
      try {
        const raw = window[storage].getItem(key);
        return raw === null ? initial : (JSON.parse(raw) as T);
      } catch {
        return initial;
      }
    }, [key, initial]);

    const [value, setValue] = useState<T>(read);

    useEffect(() => {
      setValue(read());
    }, [read]);

    const update = useCallback(
      (next: T | ((prev: T) => T)) => {
        setValue((prev) => {
          const resolved = typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
          if (typeof window !== 'undefined') {
            try {
              window[storage].setItem(key, JSON.stringify(resolved));
            } catch {
              /* quota or privacy mode */
            }
          }
          return resolved;
        });
      },
      [key],
    );

    return [value, update];
  };
}

export const useLocalStorage = buildStorageHook('localStorage');
export const useSessionStorage = buildStorageHook('sessionStorage');
