import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const isProduction = process.env.NODE_ENV === 'production';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    historyApiFallback: true, // This ensures routes are handled by React Router
  },
  base: isProduction ? '/ganaportfolio/' : '/',
})
