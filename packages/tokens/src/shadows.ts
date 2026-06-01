/**
 * Soft, rare, never-dramatic shadows.
 * Source: DESIGN_SYSTEM.md §2.1.
 */
export const shadows = {
  '1': '0 1px 2px rgba(14, 17, 22, 0.04), 0 1px 1px rgba(14, 17, 22, 0.03)',
  '2': '0 6px 24px -8px rgba(14, 17, 22, 0.10), 0 2px 6px -2px rgba(14, 17, 22, 0.05)',
  '3': '0 24px 60px -20px rgba(14, 17, 22, 0.18), 0 4px 12px -4px rgba(14, 17, 22, 0.06)',
} as const;

export type ShadowToken = keyof typeof shadows;
