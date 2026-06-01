import preset from '@labmgm/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx,md,mdx}',
    '../../packages/**/src/**/*.{ts,tsx}',
  ],
} satisfies Config;
