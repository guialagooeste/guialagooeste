import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Usa a porta padrão do Vite (5173).
    // Se ela estiver ocupada, o Vite tentará a próxima disponível.
    port: 5173
  }
});