import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public', // <--- Adicione esta linha!
  build: {
    outDir: 'dist', // Adicione esta linha também, para garantir que o build vá para a pasta 'dist' na raiz
    emptyOutDir: true, // Adicione esta linha para limpar a pasta 'dist' antes de cada build
  }
});