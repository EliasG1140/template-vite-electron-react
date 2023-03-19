import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/preload',
    emptyOutDir: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: 'inline',
    rollupOptions: {
      input: {
        index: join(__dirname, 'index.ts')
      },
      output: {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        manualChunks: {}
      },
      external: [
        'electron',
        ...builtinModules
        // ...Object.keys(pkg.dependencies || {}),
      ]
    }
  },
  resolve: {
    alias: {
    }
  }
})