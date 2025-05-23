import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensures assets resolve from root (important for FTP hosting)
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'react', 'react-dom'],
  },
  build: {
    outDir: 'dist', // Explicitly set output folder
    commonjsOptions: {
      include: [/lucide-react/, /react/, /react-dom/],
    },
  },
});
