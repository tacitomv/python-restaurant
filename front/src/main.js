import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import VueTheMask from "vue-the-mask";

createApp(App).use(store).use(router).use(VueTheMask).mount("#app");
