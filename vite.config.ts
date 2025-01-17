import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js'
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
})
