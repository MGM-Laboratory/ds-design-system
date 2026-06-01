import { useEffect } from 'react';

export interface Shortcut {
  /** The key, e.g. 'k', 'Enter', 'Escape'. */
  key: string;
  /** Cross-platform: Cmd on Mac, Ctrl on Windows/Linux. */
  mod?: boolean;
  shift?: boolean;
  alt?: boolean;
}

function matches(e: KeyboardEvent, s: Shortcut): boolean {
  if (e.key.toLowerCase() !== s.key.toLowerCase()) return false;
  if (s.mod && !(e.metaKey || e.ctrlKey)) return false;
  if (!s.mod && (e.metaKey || e.ctrlKey)) return false;
  if (s.shift !== undefined && e.shiftKey !== s.shift) return false;
  if (s.alt !== undefined && e.altKey !== s.alt) return false;
  return true;
}

export function useKeyboardShortcut(shortcut: Shortcut, handler: (e: KeyboardEvent) => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    const listener = (e: KeyboardEvent) => {
      if (matches(e, shortcut)) {
        e.preventDefault();
        handler(e);
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [shortcut, handler, enabled]);
}
