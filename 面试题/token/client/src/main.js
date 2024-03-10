import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { Form, Field, CellGroup,Button } from 'vant';
import 'vant/lib/index.css';

createApp(App)
.use(router)
.use(Button)
.use(Form)
.use(Field)
.use(CellGroup)
.mount('#app')
