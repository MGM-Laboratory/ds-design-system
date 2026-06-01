import preset from '@labmgm/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [preset],
  content: [
    './stories/**/*.{ts,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}',
    '../../packages/**/src/**/*.{ts,tsx}',
  ],
} satisfies Config;
