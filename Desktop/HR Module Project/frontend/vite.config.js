import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/HR-Mangement-System/',
  plugins: [react()],
  server: {
    port: 5173
  }
});
