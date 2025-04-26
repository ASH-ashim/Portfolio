import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
assetsInclude: ['**/*.jpeg']
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    css: {
      modules: {
        localconvention: "camelCase",
      }
  }
})
