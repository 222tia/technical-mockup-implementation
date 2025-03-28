import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";
import CreateChore from './components/CreateChore.vue';
import Dashboard from './components/Dashboard.vue';
import LogIn from './components/LogIn.vue';

const routes = [
  { path: '/', name: 'LogIn', component: LogIn },
  { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/CreateChore', name: 'CreateChore', component: CreateChore },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
