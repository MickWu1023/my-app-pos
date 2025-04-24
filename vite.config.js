import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({// ⚠️ 這邊請填你的 GitHub repo 名稱
  base: '/my-app-pos/', 
  plugins: [react()],
})
