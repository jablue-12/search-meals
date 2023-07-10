import './style.css';
import { createApp } from 'vue';
import { vue3Spinner } from 'vue3-spinner';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router).use(store).use(vue3Spinner).mount('#app');
