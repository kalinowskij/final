import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
// import VueKonva from 'vue-konva'
// import Vue from 'vue';
// Vue.use(VueKonva)

let app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
