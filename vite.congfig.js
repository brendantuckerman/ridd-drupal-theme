import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './css/style.css',
        app: './js/main.js'
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0]?.endsWith('.css')) {
            return 'css/[name].[hash].css';
          }
          return 'assets/[name].[hash].[ext]';
        },
        entryFileNames: 'js/[name].[hash].js'
      }
    }
  },
  css: {
    devSourcemap: true
  }
});
