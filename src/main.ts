import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@vant/touch-emulator";
import "normalize.css";
import "./assets/css/index.less";
import { useLoginStore } from "@/stores";

const app = createApp(App);

app.use(createPinia());
const loginStore = useLoginStore();
loginStore.loadLocalLogin();

app.use(router);

app.mount("#app");
