import { defineConfig } from 'tsup';

export default defineConfig({
  // Keep the Lucide re-export as native ESM. Bundling it turns `export *` into
  // a runtime helper, which Turbopack cannot statically inspect in consumers.
  entry: ['src/index.ts', 'src/lucide.ts', 'src/Icon.tsx', 'src/constants.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  bundle: false,
  splitting: false,
  treeshake: false,
  target: 'es2022',
  external: ['react', 'react-dom', 'lucide-react'],
});
