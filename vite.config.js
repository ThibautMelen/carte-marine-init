import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          helmet: ['react-helmet-async'],
          forms: ['react-hook-form'],
          leaflet: ['leaflet', 'react-leaflet'],
          ui: ['lucide-react', 'gsap']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-helmet-async', 'react-hook-form', 'leaflet', 'react-leaflet', 'lucide-react', 'gsap']
  }
})
