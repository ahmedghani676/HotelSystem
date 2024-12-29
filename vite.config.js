import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'],  // Ensure swiper is included in dependencies optimization
  },
  build: {
    rollupOptions: {
      external: ['swiper/css', 'swiper/css/pagination', 'swiper/css/navigation'],  // Externalize swiper CSS
    },
  },
});
