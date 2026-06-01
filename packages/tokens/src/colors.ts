/**
 * MGM Laboratory color palette.
 * Source: DESIGN_SYSTEM.md §2.1. The palette is closed — do not add purple, teal, pink, or orange.
 */
export const colors = {
  // Surfaces
  bg: '#ffffff',
  surface: '#ffffff',
  'surface-muted': '#f7f7f5',
  'surface-inverse': '#0e1116',

  // Brand
  'brand-blue': '#3a6dc5',
  'brand-yellow': '#f7bf33',
  'brand-red': '#f94141',
  'brand-green': '#0f8657',

  // Tints (8% of brand color over white)
  'brand-blue-50': '#ecf1fa',
  'brand-yellow-50': '#fef6e0',
  'brand-red-50': '#fee5e5',
  'brand-green-50': '#e2f1ea',

  // Text
  ink: '#0e1116',
  'ink-2': '#3b4150',
  'ink-3': '#6b7280',
  'ink-4': '#9aa1ad',

  // Lines
  line: '#ececea',
  'line-strong': '#d8d8d2',

  // Focus
  focus: '#3a6dc5',
} as const;

export type ColorToken = keyof typeof colors;
