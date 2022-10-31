import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@vant/touch-emulator";
import "normalize.css";
import "./assets/css/index.less";
import { useMainStore } from "@/stores";

const app = createApp(App);

app.use(router);
app.use(createPinia());

const mainStore = useMainStore();
mainStore.loadLocalLogin();

app.mount("#app");
