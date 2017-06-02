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
              <!--<a class="navbar-brand" href="#"><img src="images/logos.png" alt=""></a>-->
              <a class="navbar-brand" href="#">
                <span style="color:white;font-weight:bold;font-size:28px">TITLE</span>
              </a>
  
            </div>
            <!-- Navigation Menu -->
            <div class="navbar-collapse collapse" id="men-navigation">
              <ul class="nav navbar-nav navbar-right main-navigation" v-one-page-nav>
                <li>
                  <a href="home">HOME</a>
                </li>
                <li>
                </li>
                <nav-menu-item key="m1" v-for="menu in menuList" :menu-name="menu.nameVar" :menu-url="menu.url" :sub-menus="menu.subMenus"></nav-menu-item>
                <li>
                  <a href="javascript:void(0);">LANGUAGE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <home-welcome></home-welcome>
        <!-- End Sticky Navigation -->
        <section class="section-lv1" v-for="(menu, index) in menuList" :class="{'color-background-second': index % 2 === 0}">
          <div :is="menu.path"></div>
        </section>
      </div>
    </div>
    <div>content</div>
    <div>©2017 Hubble - Safe Intelligence
      <a href="#" title="返回顶部">返回顶部</a>
    </div>
  </div>
</template>

<script>
import navMenuItem from '../components/navMenuItem';
import homeWelcome from '../pages/home/welcome';
import homeContact from '../pages/home/contact';
import homeCoop from '../pages/home/coop';
import homeNews from '../pages/home/news';
import homeProduct from '../pages/home/product';
// import $ from 'jquery';
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
      x: 'world',
      menuList: [
        {
          'url': '#product',
          'path': 'home-product',
          'nameVar': 'PRODUCT',
          'subMenus': [
            {
              'url': '#product1',
              'nameVar': '安全维护'
            },
            {
              'url': '#product1',
              'nameVar': '安全检索'
            },
            {
              'url': '#product1',
              'nameVar': '安全服务'
            }
          ]
        },
        {
          'url': '#coop',
          'path': 'home-coop',
          'nameVar': 'COOP',
          'subMenus': [
            {
              'url': '#product1',
              'nameVar': '安全维护'
            },
            {
              'url': '#product1',
              'nameVar': '安全检索'
            },
            {
              'url': '#product1',
              'nameVar': '安全服务'
            }
          ]
        },
        {
          'url': 'news',
          'path': 'home-news',
          'nameVar': 'NEWS'
        },
        {
          'url': 'contact',
          'path': 'home-contact',
          'nameVar': 'CONTACT'
        }
      ]
    };
  },
  methods: {
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
  }
};
</script>

<style>
@import url('../assets/css/colors/steelblue.css');
@import url('../assets/css/style.css');
</style>
