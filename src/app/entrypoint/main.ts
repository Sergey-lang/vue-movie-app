import { createApp } from 'vue';
import '../../variables.css';
import '../../style.css';
import '../../reset.css';
import App from './App.vue';
import { createPinia } from 'pinia';


const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount('#app');
