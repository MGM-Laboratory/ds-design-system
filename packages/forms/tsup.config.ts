import { defineConfig } from 'tsup';

const shared = {
  format: ['esm', 'cjs'] as const,
  dts: true,
  sourcemap: true,
  splitting: false,
  target: 'es2022',
  external: [
    'react',
    'react-dom',
    'react-hook-form',
    '@hookform/resolvers',
    '@hookform/resolvers/zod',
    'zod',
  ],
};

export default defineConfig([
  {
    ...shared,
    entry: ['src/index.ts'],
    clean: true,
    // The Rollup tree-shake pass drops module directives.
    treeshake: false,
    banner: {
      js: "'use client';",
    },
  },
  {
    ...shared,
    // Schemas are safe to use in Server Components and server actions.
    entry: ['src/schemas.ts'],
    clean: false,
    treeshake: true,
  },
]);
