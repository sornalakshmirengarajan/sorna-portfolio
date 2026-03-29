import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sorna Lakshmi — Visual Arts Portfolio',
        short_name: 'Sorna Portfolio',
        description: 'Graphic Designer & Visual Arts Student Portfolio',
        theme_color: '#491f00',
        background_color: '#491f00',
        display: 'standalone',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  assetsInclude: ['**/*.pdf'],
  worker: {
    format: 'es',
  }
})
