import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/IotWorkshop/', // Set this to your repo name
  build: {
    outDir: 'build',
  },
})