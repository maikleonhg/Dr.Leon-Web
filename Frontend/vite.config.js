import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

console.log('Valor de target:', `http://localhost:${port}`);
console.log(port);

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${port}`, // Ajusta el puerto según sea necesario
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
