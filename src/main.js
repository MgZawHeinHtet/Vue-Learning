import { createApp } from "vue";
import App from './App.vue';
import $bus from './utils/Events'
import router from "./routes";
import pages from "./utils/data";
import "bootstrap/dist/css/bootstrap.min.css";
import lists from './utils/todoList'
const app= createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = pages;
app.provide('$pages',pages);

app.provide('$lists',lists)

app.mount('#app');