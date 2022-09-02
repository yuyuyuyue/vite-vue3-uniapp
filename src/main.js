import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router/index'
import store from './store/index'
import axios from 'axios'
const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:4001'
app.config.globalProperties.$http = axios

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ELIcons from '@element-plus/icons-vue'
for (let iconName in ELIcons) {
	app.component(iconName, ELIcons[iconName])
}	
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
