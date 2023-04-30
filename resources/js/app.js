import "./bootstrap";
import { createApp } from "vue";
import router from "./router";

import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp({}).use(router).use(pinia);

import Index from "./components/Index.vue";
app.component("index", Index);

app.mount("#app");
