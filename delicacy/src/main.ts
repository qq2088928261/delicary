import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import './assets/css/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// 创建vue实例
const app = createApp(App)
//element
app.use(ElementPlus)

// 挂载pinia
app.use(store)
//挂载滑块
//路由
app.use(router);
//elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 挂载实例
app.mount('#app');
