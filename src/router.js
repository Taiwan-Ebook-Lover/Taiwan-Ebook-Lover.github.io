import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/searches',
      name: 'search',
      component: Search,
    },
    {
      path: '/searches/:id',
      name: 'searches',
      component: Search,
    },
  ],
});
