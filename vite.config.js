import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'HexSchool_2025react_Independent_study':'/',
  plugins: [react()],
})
