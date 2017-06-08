<template>
  <div>
    <welcome></welcome>
    <swiper></swiper>
    <contact></contact>
    <div class="app-foot">{{ $t('copyright') }}
      <router-link to="/">{{ $t('backtotop') }}</router-link>
    </div>
  </div>
</template>
<script>
import swiper from '@/components/swiper';
import welcome from './welcome';
import contact from './contact';

export default {
  components: {
    swiper,
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
  height: $pageMinHeight;
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
  color: $whiteFontColor;
  a {
    color: $primaryColor;
    padding-left: 5px;
    text-decoration: none;
    &:hover {
      color: $whiteFontColor;
    }
  }
}
</style>