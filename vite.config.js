// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000, // Ensure the port number matches Render’s expected port
  },
  preview: {
    host: '0.0.0.0',
    port: 3000, // Use the same port for preview
  },
})
