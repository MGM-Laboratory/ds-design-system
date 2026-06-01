import * as React from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface FocusTrapProps {
  /** Whether the trap is active. */
  active?: boolean;
  /** Restore focus to the previously-focused element on unmount. */
  restoreFocus?: boolean;
  children: React.ReactNode;
}

/**
 * Lightweight focus trap. Keeps Tab / Shift+Tab within `children` while `active` is true.
 * For full Radix-grade behavior (escape handling, scroll lock), use `Dialog` from `@labmgm/react`.
 */
export function FocusTrap({ active = true, restoreFocus = true, children }: FocusTrapProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!active) return;
    const previous = document.activeElement as HTMLElement | null;
    const root = ref.current;
    if (!root) return;

    const focusables = () => Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

    // Initial focus
    focusables()[0]?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0]!;
      const last = items[items.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
      if (restoreFocus) previous?.focus?.();
    };
  }, [active, restoreFocus]);

  return <div ref={ref}>{children}</div>;
}
