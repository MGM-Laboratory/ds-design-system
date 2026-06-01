import react from './react.js';

/** React config + Next.js-friendly settings. */
export default [
  ...react,
  {
    files: ['**/*.{ts,tsx,jsx}'],
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    },
  },
];
