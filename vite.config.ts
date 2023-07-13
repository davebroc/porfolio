import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.tsx',
      },
    },
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
    sourcemap: true, // Generate source maps for easier debugging
    minify: true, // Enable minification for production build
    terserOptions: {
      // Additional options for terser minification
      compress: {
        drop_console: true, // Remove console.* statements
      },
    },
  },
});
