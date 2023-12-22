import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { Bootstrap } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './custom-bootstrap.scss';

const app = createApp(App);
app.use(router);
app.use(Bootstrap);
app.mount('#app');

