import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  // The Rollup tree-shake pass drops module directives.
  treeshake: false,
  target: 'es2022',
  external: ['react', 'react-dom'],
  banner: {
    js: "'use client';",
  },
});
