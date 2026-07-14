import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  // The Rollup tree-shake pass drops module directives. Consumer bundlers can
  // still tree-shake this ESM entrypoint from its named exports.
  treeshake: false,
  target: 'es2022',
  external: ['react', 'react-dom'],
  // tsup's bundle pass drops source directives, so emit the RSC boundary
  // explicitly in the published entrypoint.
  banner: {
    js: "'use client';",
  },
});
