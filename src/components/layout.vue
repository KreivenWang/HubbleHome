<template>
  <div class="app">
    <div class="app-head">
      <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <router-link to="/" class="navbar-brand">
                <img src="../assets/logo.png" class="img-responsive"> {{ $t('title') }}
              </router-link>
            </div>
  
            <!--<p class="navbar-text"><a href="#" class="navbar-link">{{ $t('title') }}</a> </p>-->
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="/">{{ $t("menu.home") }}</a>
              </li>
              <nav-menu-item key="m1" v-for="menu in menuList" :menu-name="$t(menu.nameVar)" :menu-url="menu.url" :sub-menus="menu.subMenus"></nav-menu-item>
              <li>
                <a @click="changeLang">{{ $t("menu.language") }}</a>
              </li>
            </ul>
          </div>
        </nav>
        <!--<img class="logo-img" src="../assets/logo.png" alt="">
                                                                                                <span class="logo-text">{{ $t('title') }}</span>-->
        <!--<swiper-slide>I'm Slide 1</swiper-slide>-->
        <!--<section class="section-lv1" v-for="(menu, index) in menuList" :class="{'color-background-second': index % 2 === 0}">
                                                                                                      <div :is="menu.path"></div>
                                                                                                    </section>-->
      </div>
    </div>
    <!--<div class="test">
            <div>--</div>
            <div>
              <span>--</span>
            </div>
            <div>
              <router-link to="/" class="navbar-brand">
                <span>
                  <img src="../assets/logo.png" alt=" ">
                  <span>
                    {{ $t('title') }}</span>
                </span>
              </router-link>
            </div>
          </div>-->
    <!--<home-welcome></home-welcome>-->
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navMenuItem from './navMenuItem';

import homeWelcome from '../pages/home/welcome';
import homeContact from '../pages/home/contact';
import homeCoop from '../pages/home/coop';
import homeNews from '../pages/home/news';
import homeProduct from '../pages/home/product';

export default {
  components: {
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

<style lang='scss'>
@import '../assets/css/consts.scss';

html {
  font-size: 100%;
}

.app {
  // padding-top: 75px;
  background: $black1;
}

.app-head {
  width: 100%;
  background: $navbarBackground;
}

.navbar {
  $barHeight: 75px; //bootstrap default: 50px
  $logoSize: 42px;
  background: $navbarBackground;
  @include box-shadow(5px 5px 10px 0px rgba(0, 0, 0, 0.25));


  div .navbar-brand {
    height: $barHeight;
    padding: ($barHeight - $logoSize)/2;
    font-size: 26px;
    color: $white1;

    img {
      width: $logoSize;
      margin-right: ($barHeight - $logoSize)/2;
      display: inline-block;
    }
  }

  div .navbar-nav {
    padding: 12.5px;
    padding-left: 2px;
    a {
      font-family: $controlFont;
      font-size: 14px;
      font-weight: normal;
      text-transform: uppercase;
      color: $white1!important;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
    }
    a:hover {
      color: $themeColor1!important;
      border-left: 1px solid $themeColor1;
      border-right: 1px solid $themeColor1;
    }
  }
}


.test {
  border: 1px dashed blue;
  height: 100px;
  width: 100%;
  background: lightblue;
  display: table;
  div {
    vertical-align: middle;
    display: table-cell;
    img {
      width: 32px;
    }
  }
}
</style>
