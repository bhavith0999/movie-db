import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'
import MoviePage from './views/Movie.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/movie/:id', component: MoviePage, name:'movie' },
    { path: '/:pathMatch(.*)*', component: HomePage },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
