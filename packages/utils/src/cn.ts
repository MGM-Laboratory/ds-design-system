import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind class names with conflict resolution.
 * The single most-used utility in @labmgm/*.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
