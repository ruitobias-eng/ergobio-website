import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// 🧩 Corrige uso de __dirname em módulos ESM (necessário no Node 18+)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 🚀 Configuração principal do Vite
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ integração oficial do Tailwind 4.x com Vite
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ✅ Caminho base para deploy no GitHub Pages
  // → Troque pelo nome exato do repositório, se for diferente
  base: '/ergobio-website/',

  // ⚡ Recomendação extra para builds mais rápidas
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    minify: 'esbuild',
  },
/*
  // 🧠 Compatibilidade de servidor local
  server: {
    port: 5173,
    open: true,
    host: true,
  },*/
})
