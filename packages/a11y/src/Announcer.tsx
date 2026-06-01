import * as React from 'react';

const POLITE_ID = 'mgm-live-polite';
const ASSERTIVE_ID = 'mgm-live-assertive';

/**
 * Mount once near the root of your app. Use `announce()` from anywhere to push a message.
 */
export function Announcer() {
  return (
    <>
      <div id={POLITE_ID} aria-live="polite" aria-atomic="true" className="sr-only" />
      <div id={ASSERTIVE_ID} aria-live="assertive" aria-atomic="true" className="sr-only" />
    </>
  );
}

/** Push a message into the live region. */
export function announce(message: string, urgency: 'polite' | 'assertive' = 'polite') {
  if (typeof document === 'undefined') return;
  const id = urgency === 'assertive' ? ASSERTIVE_ID : POLITE_ID;
  const el = document.getElementById(id);
  if (!el) return;
  // Clear then set, so the same message gets announced again.
  el.textContent = '';
  // requestAnimationFrame ensures screen readers pick up the change.
  requestAnimationFrame(() => {
    el.textContent = message;
  });
}
