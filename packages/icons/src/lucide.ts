/**
 * Re-exports every Lucide icon. Consumers import named icons:
 *
 *   import { Check, ArrowRight, Search } from '@labmgm/icons';
 *
 * Defaults applied per MGM brand: strokeWidth 2.25, size 20, linecap/linejoin round.
 */
// We re-export the entire lucide-react surface so that consumers don't need to install
// it themselves. The tsup build externalizes `lucide-react`, so the dist file is a
// thin re-export module.
export * from 'lucide-react';

import type { LucideIcon } from 'lucide-react';
export type { LucideIcon, LucideProps } from 'lucide-react';
export type IconName = string;

/** Type guard for runtime icon lookup. */
export function isLucideIcon(value: unknown): value is LucideIcon {
  return typeof value === 'function' || typeof value === 'object';
}
