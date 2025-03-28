import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";
import CreateChore from './components/CreateChore.vue';
import Dashboard from './components/Dashboard.vue';
import LogIn from './components/LogIn.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "LogIn", component: LogIn },
    { path: "/Dashboard", name: "Dashboard", component: Dashboard },
    { path: "/CreateChore", name: "CreateChore", component: CreateChore },
  ],
});

createApp(App).mount('#app')
app.use(router);
