import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Correction IMPORTANTE :
  // Pour un repo nommé "username.github.io", le site est à la racine.
  // On met donc '/' au lieu du nom du repo.
  base: '/', 
})