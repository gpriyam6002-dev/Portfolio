import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/https://github.com/gpriyam6002-dev/Portfolio/' : '/',
  plugins: [react()],
}))