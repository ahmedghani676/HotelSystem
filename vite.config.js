import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['swiper/css', 'swiper/css/pagination', 'swiper/css/navigation'],  // Externalize these Swiper styles
    },
  },
  optimizeDeps: {
    include: ['swiper'],  // Make sure swiper is included in dependencies
  },
});
