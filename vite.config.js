import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType:'autoUpdate',
      workbox:{
        runtimeCaching:[{
          urlPattern:({url})=>{
            return url.pathname.startsWith("/api");
          },
          handler:"CacheFirst",
          options:{
            cacheName:"api-cache",
            cacheableResponse:{
              statuses:[0,200]
            }
          }
        }]
      },
      manifest:{
        icons:[
          {
            src:"/icons/icon-512x512.png/",
            sizes:"512x512",
            type:"image/png",
            purpose:"any maskable"
          }
        ]
      }
    })
  ],
  build:{
    outDir:'./docs',
  }
})
