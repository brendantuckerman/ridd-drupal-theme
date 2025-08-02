import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'js/main.js', 
        style: 'css/style.css'
      }
    }
  },
  server: {
    port: 3000
  }
})