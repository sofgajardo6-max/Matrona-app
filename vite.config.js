import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,jpg}']
  },
  manifest: {
    name: 'MatronaApp',
    short_name: 'MatronaApp',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  }
})
  ],
  base: '/'
})