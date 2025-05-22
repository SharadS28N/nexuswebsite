import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'react', 'react-dom'],
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/, /react/, /react-dom/],
    },
  },
});