import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../pages/home/homePage.vue';
import home from '../pages/home2/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/old',
      component: homePage
    },
    {
      path: '/',
      component: home
    },
    {
      path: '#',
      redirect: '/'
    }
  ]
});
