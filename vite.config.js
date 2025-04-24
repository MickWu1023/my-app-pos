import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifest = {
  registerType : "autoUpdate",
  includeAssets : ["**/*"],
  devOptions :{
    enabled : true,
  },
  workbox:{
    globPatterns : ["**/*"],
    runtimeCaching:[
      {
        urlPattern : ({url}) =>{
          return url.pathname.startsWith("/")
        },
        handler : "CacheFirst" ,
        options :{
          cacheName : "POS SYSTEM",
          cacheableResponse :{
            statuses: [0,200]
          }
        }
      }
    ]
  },
  manifest:{
    
      "short_name": "MDN",
      "name": "POS",
      "icons": [
        {
          "src": "/my-app-pos/Bird_512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "start_url": "/my-app-pos/", 
      "scope": "/my-app-pos/", 
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff"
    
  }

}

// https://vite.dev/config/
export default defineConfig({// ⚠️ 這邊請填你的 GitHub repo 名稱
    base: '/my-app-pos/',
  plugins: [react() ,VitePWA(manifest)],
})
