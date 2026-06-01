import * as React from 'react';
import { SurfaceContext } from './surface-context.js';
import type { SurfaceTone } from './Surface.js';

export interface ThemeProviderProps {
  /**
   * Default surface tone for the document. Inverse sections still nest inside via <Surface tone="inverse">.
   * @default 'default'
   */
  tone?: SurfaceTone;
  /**
   * Optional class names to apply on the root wrapper.
   */
  className?: string;
  children: React.ReactNode;
}

/**
 * Root provider for MGM theming. Wraps your app once near the top. Doesn't render extra DOM by default.
 * Consumers using Next.js should ALSO import `@labmgm/tokens/tokens.css` once in their root layout.
 */
export function ThemeProvider({ tone = 'default', className, children }: ThemeProviderProps) {
  // We do not render an extra element by default — keep the DOM minimal.
  // If a className is provided OR tone !== default, wrap in a div so the data attribute and class apply.
  if (className || tone !== 'default') {
    return (
      <SurfaceContext.Provider value={tone}>
        <div data-surface={tone === 'default' ? undefined : tone} className={className}>
          {children}
        </div>
      </SurfaceContext.Provider>
    );
  }
  return <SurfaceContext.Provider value="default">{children}</SurfaceContext.Provider>;
}
