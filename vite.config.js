import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server : {
    host:'0.0.0.0',
    port:'4001',
    open:true,
    proxy:{
      '/get':{
        target:'http://121.5.158.115:5555'
      }
    }
  }
})

