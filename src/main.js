import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import { maska } from "maska";

const app = createApp(App);

app.use(router);
app.use(store);
app.directive("maska", maska);

app.mount("#app");
