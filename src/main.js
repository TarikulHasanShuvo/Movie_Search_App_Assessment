import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ApiService from "@/service/api.service";
import '../src/scss/main.scss';
import 'bootstrap';

ApiService.init()

createApp(App).use(store).use(router).mount('#app')
