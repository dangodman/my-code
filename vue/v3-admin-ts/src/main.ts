import { createApp } from "vue";
import 'element-plus/dist/index.css'
import './assets/css/main.css'
import './assets/css/color-dark.css'
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { usePermissStore } from "./store/permiss";
const app = createApp(App)

app
  .use(router)
  .use(createPinia())

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)  // 挂载全局
}
const permiss = usePermissStore()
// 全局指令
app.directive('permiss',{
  mounted(el,binding){
      if(!permiss.key.includes(String(binding.value))){
        el['hidden'] = true      
    }
  }
})


app.mount("#app")  
