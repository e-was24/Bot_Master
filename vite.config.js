import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sesuaikan nama repo
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Bot_Master/' : '/',
  plugins: [react()],
})
