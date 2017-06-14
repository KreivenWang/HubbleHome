<template>
  <div class="app">
    <header class="header">
      <div class="header__wrap">
        <div class="header__logo v-center">Hubble</div>
        <nav class="header__nav v-center">
          <a href="javascript:;" class="header__nav-item header__nav-item_status_active">网站首页</a>
          <a href="javascript:;" class="header__nav-item">安全产品</a>
          <a href="javascript:;" class="header__nav-item">最新资讯</a>
          <a href="javascript:;" class="header__nav-item">联系我们</a>
          <a href="javascript:;" class="header__nav-item header__nav-item_custom_button">ENGLISH</a>
        </nav>
      </div>
    </header>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import home from '../pages/home2/home';

export default {
  components: {
    home
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
@import '../assets/css/common.scss';
@import '../assets/css/consts.scss';

$navbarHeight: 80px;
$navbarBackground: rgba(35, 35, 35, 0.85);
$navEleHeight: 48px;
$navEleMargin: ($navbarHeight - $navEleHeight)/2;

html {
  font-family: $controlFont;
}

a {
  text-decoration: none;
}

.app {
  // padding-top: 75px;
  background: $black1;
  margin: 0;
  padding: 0;
}

.header {
  background-color: $navbarBackground;

  .header__wrap {
    height: $navbarHeight;
    width: $screenWidth;
    position: relative;
    margin: 0 auto;

    .v-center {
      position: absolute;
      top: 50%;
      margin-top: -$navEleHeight/2;
      height: $navEleHeight;
      line-height: $navEleHeight;
    }

    .header__logo {
      width: 150px;
      font-size: 26px;
      color: $white1;
      text-indent: $navEleHeight + $navEleMargin; //文本缩进
      left: $navEleMargin;
      background: url('./../assets/logo.png') left center no-repeat;
      background-size: $navEleHeight $navEleHeight;
    }

    .header__nav {
      right: $navEleMargin;
    }

    .header__nav-item {
      font-size: 16px;
      color: $white1;
      display: block; //用block, 元素会撑满父元素
      float: left;
      margin-left: 45px;

      &:hover {
        color: $themeColor1;
      }
    }

    .header__nav-item_status_active {
      color: $themeColor1;
      position: relative;
      &::after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: $themeColor1;
      }
    }

    .header__nav-item_custom_button {
      text-align: center;
      background: $themeColor1;
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin-top: (($navEleHeight - 40)/2);
      border-radius: 3px;
      transition: all 0.25s ease;
      margin-left: 35px;

      &:hover {
        background: $white1;
        color: $themeColor1;
      }
    }
  }
}
</style>
