import preset from '@labmgm/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [preset],
  content: [
    './stories/**/*.{ts,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}',
    '../../packages/react/src/**/*.{ts,tsx}',
    '../../packages/layout/src/**/*.{ts,tsx}',
    '../../packages/forms/src/**/*.{ts,tsx}',
    '../../packages/brand/src/**/*.{ts,tsx}',
    '../../packages/patterns/src/**/*.{ts,tsx}',
    '../../packages/icons/src/**/*.{ts,tsx}',
    '../../packages/charts/src/**/*.{ts,tsx}',
    '../../packages/calendar/src/**/*.{ts,tsx}',
    '../../packages/command/src/**/*.{ts,tsx}',
    '../../packages/toast/src/**/*.{ts,tsx}',
    '../../packages/theme/src/**/*.{ts,tsx}',
    '../../packages/data-table/src/**/*.{ts,tsx}',
    '../../packages/rich-text/src/**/*.{ts,tsx}',
  ],
} satisfies Config;
