import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@services': '/src/services',
      '@config': '/src/config',
      '@api': '/src/api',
      
    },
  },
})
