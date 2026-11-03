import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        // split big libraries into their own files so the browser can cache them separately
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler|cookie|set-cookie-parser)[\\/]/,
            },
            {
              name: 'animation-vendor',
              test: /node_modules[\\/](framer-motion|motion-dom|motion-utils|gsap|@gsap)[\\/]/,
            },
          ],
        },
      },
    },
  },
})
