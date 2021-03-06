import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ApiService from "@/service/api.service";
import '../src/scss/main.scss';
import 'bootstrap';
import moment from 'moment';
ApiService.init()

moment.locale('en');

let app = createApp(App);

app.config.globalProperties.$moment = moment;

app.use(store).use(router)
    .mount('#app');
