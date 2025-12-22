import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT : Remplace 'nom-de-ton-repo' par le nom exact de ton dépôt GitHub
  // Exemple : si ton repo est https://github.com/ton-user/portfolio-v1, mets '/portfolio-v1/'
  base: '/nom-de-ton-repo/', 
})