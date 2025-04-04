import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/frontend/', 
  plugins: [react()],
  server: {
    port: 5173, // Standard Vite port
    cors: true, // Enable CORS explicitly 
    proxy: {
      '/api': {
        target: 'https://demo.karismamc.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request:', req.method, req.url);
            console.log('Target URL:', proxyReq.path);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Response from target:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  },
  define: {
    'process.env.BASE_URL': JSON.stringify('https://demo.karismamc.com')
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
