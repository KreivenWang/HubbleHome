<template>
  <div>
    <welcome></welcome>
    <swiper></swiper>
    <!--<product></product>-->
    <contact></contact>
    <div class="app-foot">{{ $t('copyright') }}
      <router-link to="/">{{ $t('backtotop') }}</router-link>
    </div>
  </div>
</template>
<script>
import swiper from '../../components/swiper';
import product from './product';
import welcome from './welcome';
import contact from './contact';

export default {
  components: {
    swiper,
    product,
    welcome,
    contact
  },
  data() {
    return {
      x: 'world'
    };
  }
};

</script>

<style lang='scss' scoped>
@import '../../assets/css/consts.scss';

swiper {
  height: $screenHeight;
}

.app-foot {
  text-align: center;
  width: 100%;
  clear: both;
  margin: 10px 0;
  font-family: $controlFont;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  color: $white1;
  a {
    color: $themeColor1;
    padding-left: 5px;
    text-decoration: none;
    &:hover {
      color: $white1;
    }
  }
}
</style>