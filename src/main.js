import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.scss';

import UI from './UI/index.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

UI.forEach((item) => app.component(item.name, item));

app.mount('#app');
