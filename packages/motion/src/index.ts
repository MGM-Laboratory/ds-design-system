/** Re-export Framer Motion. */
export {
  motion,
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  useAnimation,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useInView,
  useReducedMotion,
} from 'framer-motion';

export type { Variants, Variant, Transition, Target } from 'framer-motion';

export {
  fadeIn,
  fadeUp,
  scaleIn,
  slideInRight,
  slideInLeft,
  staggerContainer,
  staggerItem,
  mgmDurations,
  mgmEasings,
} from './presets.js';
