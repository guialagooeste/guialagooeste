import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'public',
  plugins: [react()],
  build: {
    outDir: '../dist', // AGORA É ASSIM!
    emptyOutDir: true,
  }
})