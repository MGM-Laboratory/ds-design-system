import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/next.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  // `next/font` validates that loader calls are assigned with `const`.
  // A bundled entry rewrites exported bindings to `var`, so preserve the
  // module structure for this package instead.
  bundle: false,
  splitting: false,
  treeshake: false,
  target: 'es2022',
  external: ['next/font/google'],
});
