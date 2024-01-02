import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";
import "./assets/style/reset.css";
import router from "./router"
createApp(App).use(router).mount("#app");
