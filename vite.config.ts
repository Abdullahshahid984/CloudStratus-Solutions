// vite.config.ts or vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'CloudStratus-Solutions', // ✅ fix asset loading issue on custom domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
