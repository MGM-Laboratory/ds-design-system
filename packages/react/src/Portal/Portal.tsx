import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface PortalProps {
  /** Where to mount. Defaults to `document.body`. */
  container?: Element | null;
  children: React.ReactNode;
}

/**
 * Render children into a different part of the DOM. SSR-safe — returns null on the server.
 */
export function Portal({ container, children }: PortalProps): React.ReactNode {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return ReactDOM.createPortal(children, container ?? document.body);
}
