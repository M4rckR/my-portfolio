import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // Habilita source maps en desarrollo
  },
  build: {
    sourcemap: true, // Habilita source maps en producción
  },
})
