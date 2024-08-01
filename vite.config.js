import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    rollupOptions: {
      external: ['swiper'], // Add 'swiper' here
      external: ['swiper/swiper-bundle.css'], // Add 'swiper/swiper-bundle.css' here
    },
  },
})
