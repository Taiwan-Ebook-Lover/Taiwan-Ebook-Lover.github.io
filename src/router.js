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
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (search.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "search" */ './views/Search.vue'),
      component: Search,
    },
  ],
});
