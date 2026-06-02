# `@labmgm/motion`

> Framer Motion + MGM-brand-correct presets.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fmotion?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/motion)

Every animation preset uses the durations and easings from [`@labmgm/tokens`](../tokens), so motion is consistent across components. Respects `prefers-reduced-motion` (Framer Motion does this for you).

```bash
pnpm add @labmgm/motion
```

```tsx
import { motion, AnimatePresence, fadeUp, staggerContainer, staggerItem } from '@labmgm/motion';

<motion.section variants={staggerContainer(0, 0.1)} initial="hidden" animate="show">
  <motion.h1 variants={staggerItem}>Hello</motion.h1>
  <motion.p variants={fadeUp}>World</motion.p>
</motion.section>
```

## Presets

| Preset | Effect |
|---|---|
| `fadeIn` | Opacity 0 → 1 |
| `fadeUp` | Opacity 0 → 1, translateY 8 → 0 |
| `scaleIn` | Opacity 0 → 1, scale 0.96 → 1 |
| `slideInRight` / `slideInLeft` | Translate + opacity |
| `staggerContainer(delayChildren?, stagger?)` | Container variants with stagger |
| `staggerItem` | Same as `fadeUp` |

## Token references

- `mgmDurations` — `{ '1': 0.12, '2': 0.2, '3': 0.32, '4': 0.52, '5': 0.8 }` (seconds, ready for Framer)
- `mgmEasings` — `{ 'out-soft': […], 'in-out-soft': […], 'spring': […] }`

## Re-exports

Everything you need from `framer-motion`: `motion`, `AnimatePresence`, `LayoutGroup`, `MotionConfig`, `useAnimation`, `useMotionValue`, `useTransform`, `useScroll`, `useSpring`, `useInView`, `useReducedMotion`.

## License

MIT © MGM Laboratory
