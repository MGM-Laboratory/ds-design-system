import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge instance that knows about the MGM custom design tokens.
 *
 * The base tailwind-merge config groups classes by the Tailwind utility
 * they map to. Custom font-size tokens like `text-body`, `text-h3`,
 * `text-display-lg` look like text-color classes (`text-*`) to it by
 * default — so it would collapse `text-body text-white` to just one,
 * silently dropping the color. Same problem for the custom radii,
 * shadows, motion tokens.
 *
 * Registering them in the matching class groups makes tailwind-merge
 * keep both font-size + color, both default + custom radius, etc.
 */
const MGM_FONT_SIZES = [
  'display-2xl',
  'display-xl',
  'display-lg',
  'h1',
  'h2',
  'h3',
  'h4',
  'body-lg',
  'body',
  'body-sm',
  'caption',
  'mono',
  'eyebrow',
] as const;

const MGM_RADII = ['sm', 'md', 'lg', 'xl', '2xl', 'none', 'full'] as const;
const MGM_SHADOWS = ['1', '2', '3', 'focus'] as const;
const MGM_DURATIONS = ['120', '200', '320', '520', '800'] as const;
const MGM_EASINGS = ['out-soft', 'in-out-soft', 'spring'] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: [...MGM_FONT_SIZES] }],
      rounded: [{ rounded: [...MGM_RADII] }],
      shadow: [{ shadow: [...MGM_SHADOWS] }],
      duration: [{ duration: [...MGM_DURATIONS] }],
      ease: [{ ease: [...MGM_EASINGS] }],
    },
  },
});

/**
 * Merge Tailwind class names with conflict resolution.
 * The single most-used utility in @labmgm/*. Aware of the MGM custom tokens.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
