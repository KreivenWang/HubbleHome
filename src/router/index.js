import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../pages/home/homePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '#',
      redirect: '/'
    }
  ]
});
