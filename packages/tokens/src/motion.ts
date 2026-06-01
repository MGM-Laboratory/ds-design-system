export const durations = {
  '1': '120ms',
  '2': '200ms',
  '3': '320ms',
  '4': '520ms',
  '5': '800ms',
} as const;

export const easings = {
  'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
  'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  linear: 'linear',
} as const;

export type DurationToken = keyof typeof durations;
export type EasingToken = keyof typeof easings;
