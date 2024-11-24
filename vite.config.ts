import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Change to relative path
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = (assetInfo.name || '').split('.');
          const ext = info[info.length - 1];
          if (assetInfo.name && /\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`;
          }
          if (assetInfo.name && /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        }
      }
    }
  },
  server: {
    port: 3002
  }
});