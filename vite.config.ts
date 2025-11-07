import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tailwindcss()],
  server: {
    host: true,
    proxy: {
      // Forward /api/tmdb to Netlify functions dev endpoint
      '/api/tmdb': {
        target: 'http://localhost:8888', // where `netlify dev` serves
        changeOrigin: true,
      },
    },
  },
})
