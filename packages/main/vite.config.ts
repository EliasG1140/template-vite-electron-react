
import { defineConfig } from 'vite'
import { builtinModules } from 'module'
import pkg from '../../package.json'

const esModules = ['execa', 'get-port', 'winston', 'winston-daily-rotate-file']
const nodeModules = Object.keys(pkg.dependencies || {}).filter((dep) => !esModules.includes(dep))

export default defineConfig({
  root: __dirname,
  plugins: [],
  build: {
    outDir: '../../dist/main',
    emptyOutDir: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: true,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs'
    },
    rollupOptions: {
      external: ['electron', ...builtinModules, ...nodeModules]
    }
  },
})