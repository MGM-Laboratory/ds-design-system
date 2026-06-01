# `@labmgm/motion`

Framer Motion + MGM-brand-correct presets.

```ts
import { motion, AnimatePresence, fadeUp, staggerContainer, staggerItem } from '@labmgm/motion';

<motion.section variants={staggerContainer(0, 0.1)} initial="hidden" animate="show">
  <motion.h1 variants={staggerItem}>Hello</motion.h1>
  <motion.p variants={fadeUp}>World</motion.p>
</motion.section>
```

Presets pull `duration` and `ease` from `@labmgm/tokens`. Respects `prefers-reduced-motion` because Framer Motion does.
