import { defineConfig } from 'tsup';
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  // Preserve the RSC boundary in the published entrypoint.
  treeshake: false,
  target: 'es2022',
  external: ['react', 'react-dom', 'framer-motion'],
  banner: {
    js: "'use client';",
  },
});
