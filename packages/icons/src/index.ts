/**
 * @labmgm/icons — Lucide icons preconfigured for MGM Laboratory.
 *
 * Re-exports every Lucide icon with `strokeWidth={2.25}` (heavier than Lucide's default 2),
 * `linecap="round"`, `linejoin="round"`, and a `size` prop that defaults to 20px.
 *
 *   import { ArrowRight, Check, Search, ChevronDown } from '@labmgm/icons';
 *
 *   <ArrowRight />          // 20px, stroke 2.25, currentColor
 *   <Check size={16} />
 *   <Search size={24} className="text-brand-blue" />
 */
export * from './lucide.js';
export { Icon, type IconProps } from './Icon.js';
export { ICON_SIZE, DEFAULT_STROKE_WIDTH } from './constants.js';
