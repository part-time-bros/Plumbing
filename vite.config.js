import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // binds to 0.0.0.0 — required for Codespaces port forwarding
    port: 5173,
  },
});
