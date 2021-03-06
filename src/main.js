// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import iView from 'iview';
import axios from 'axios';

// import Layout from './components/layout';
import Layout2 from './components/layout2';
import router from './router';
import i18n from './i18n';

// 暂时不用iview
// import 'iview/dist/styles/iview.css';

// 暂时不用bootstrap
// import './assets/css/bootstrap.min.css';
// import './assets/js/bootstrap.min';

// import onePageNav from './plugins/onePageNav.js';

Vue.config.productionTip = false;
// Vue.use(iView);
Vue.prototype.$http = axios;

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
  i18n,
  // onePageNav,
  template: '<Layout2/>',
  components: { Layout2 }
});