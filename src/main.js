// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './components/layout';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/bootstrap.min.css';
import './assets/js/bootstrap.min';
import onePageNav from './plugins/onePageNav.js';

Vue.config.productionTip = false;
Vue.use(iView);

// Vue.directive('onePageNav', {
//   inserted(el, bind) {
//     console.log(el);
//     console.log($('.main-navigation'));
//     $('.main-navigation').onePageNav({
//       scrollThreshold: 0.2,
//       scrollOffset: 75,
//       filter: ':not(.external)',
//       scrollSpeed: 300,
//       changeHash: true
//     });
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  onePageNav,
  template: '<Layout/>',
  components: { Layout }
});