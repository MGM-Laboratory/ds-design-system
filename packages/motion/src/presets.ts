import type { Variants, Transition } from 'framer-motion';

/** Numeric duration tokens, in seconds (Framer wants seconds, not ms). */
export const mgmDurations = {
  '1': 0.12,
  '2': 0.2,
  '3': 0.32,
  '4': 0.52,
  '5': 0.8,
} as const;

/** Easing curves matching tokens.css `--ease-*`. */
export const mgmEasings = {
  'out-soft': [0.22, 1, 0.36, 1] as const,
  'in-out-soft': [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

const defaultTransition: Transition = {
  duration: mgmDurations['3'],
  ease: mgmEasings['out-soft'],
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: defaultTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: defaultTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: defaultTransition },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: defaultTransition },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: defaultTransition },
};

export const staggerContainer = (delayChildren = 0, stagger = 0.06): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren: stagger,
    },
  },
});

export const staggerItem: Variants = fadeUp;
