import next from '@next/eslint-plugin-next';
import react from './react.js';

/** React config + Next.js-friendly settings. */
export default [
  ...react,
  {
    ...next.flatConfig.recommended,
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    files: ['**/*.{ts,tsx,jsx}'],
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    },
  },
];
