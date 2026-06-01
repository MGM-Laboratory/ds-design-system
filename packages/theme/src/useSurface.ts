import { useContext } from 'react';
import { SurfaceContext } from './surface-context.js';
import type { SurfaceTone } from './Surface.js';

/**
 * Read the current surface tone from context. Components that adjust their styling
 * inside inverse sections can use this — but prefer plain CSS via the
 * `[data-surface="inverse"]` selector when possible.
 */
export function useSurface(): SurfaceTone {
  return useContext(SurfaceContext);
}
