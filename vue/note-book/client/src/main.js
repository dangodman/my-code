import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import "./assets/style/reset.css";
import 'vant/es/toast/style';
createApp(App).use(router).mount("#app");
