<template>
  <div>
    <!-- Over color Image -->
    <div class="background-overlay">
      <div class="container-header mask">
  
        <!-- Sticky Navigation -->
        <div class="navbar navbar-inverse bs-docs-nav navbar-fixed-top sticky-navigation">
          <div class="container">
            <div class="navbar-header">
  
              <!-- Logo on Sticky Navigation Bar -->
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#men-navigation">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="">
                <span class="logo-text">
                  <img class="logo-img" src="../assets/logo.png" alt="">{{ $t('title') }}</span>
                <!--<img src="../assets/logo_full.jpg" alt="Hubble">-->
              </a>
            </div>
            <!-- Navigation Menu -->
            <div class="navbar-collapse collapse" id="men-navigation">
              <ul class="nav navbar-nav navbar-right main-navigation">
                <li>
                  <a href="">{{ $t("menu.home") }}</a>
                </li>
                <nav-menu-item key="m1" v-for="menu in menuList" :menu-name="$t(menu.nameVar)" :menu-url="menu.url" :sub-menus="menu.subMenus"></nav-menu-item>
                <li>
                  <a @click="changeLang">{{ $t("menu.language") }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <home-welcome></home-welcome>
        <swiper></swiper>
          <!--<swiper-slide>I'm Slide 1</swiper-slide>-->
        <!-- End Sticky Navigation -->
        <section class="section-lv1" v-for="(menu, index) in menuList" :class="{'color-background-second': index % 2 === 0}">
          <div :is="menu.path"></div>
        </section>
      </div>
    </div>
    <div>content</div>
    <div>{{ $t('copyright') }}
      <a href="" title="返回顶部">返回顶部</a>
    </div>
  </div>
</template>

<script>
import navMenuItem from './navMenuItem';
import swiper from './swiper';

import homeWelcome from '../pages/home/welcome';
import homeContact from '../pages/home/contact';
import homeCoop from '../pages/home/coop';
import homeNews from '../pages/home/news';
import homeProduct from '../pages/home/product';

export default {
  components: {
    swiper,
    navMenuItem,
    homeWelcome,
    homeContact,
    homeCoop,
    homeNews,
    homeProduct
  },
  data() {
    return {
      menuList: []
    };
  },
  methods: {
    changeLang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'zh';
      } else {
        this.$i18n.locale = 'en';
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  directives: {
    onePageNav: {
      inserted(el, bind) {
        // console.log(el);
        // console.log(bind);
        // console.log($('.main-navigation'));
        // $('.main-navigation').onePageNav({
        //   scrollThreshold: 0.2,
        //   scrollOffset: 75,
        //   filter: ':not(.external)',
        //   scrollSpeed: 300,
        //   changeHash: true
        // });
      }
    }
  },
  created() {
    this.$http.get('/static/menu.json')
      .then((response) => {
        this.menuList = response.data;
      })
      .catch((error) => {
        console.log('get menu failed: ' + error);
      });
  }
};
</script>

<style>
@import url('../assets/css/colors/logoblue.css');
@import url('../assets/css/style.css');

.navbar-header img {
  max-height: 26px;
}

.logo-img {
  -transform: scale(2, 2);
  -webkit-transform: scale(2, 2);
  -moz-transform: scale(2, 2);
  margin: 1px 25px 1px 1px;
}

.logo-text {
  color: white;
  font-size: 28px;
  font-family: 'Source Sans Pro', '华文细黑', sans-serif;
  font-weight: 500px;
  /*letter-spacing: 1px;*/
}
</style>
