import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    uni(),
    // vue(),
    Components({
      resolvers:[VantResolver()],
    })
  ],
})
