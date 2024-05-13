/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import path from "path"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // URL của máy chủ Node.js
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Bỏ '/api' khỏi URL
      }
    }
  }
})
