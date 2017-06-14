<template>
  <div>
    <div class="screen-1">
      <div class="screen-1__mask">
        <h2 class="screen-1__heading">
          <b>Hubble</b> - Better Secure Resolution</h2>
        <div class="line"></div>
        <p class="screen-1__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, facere eum corporis aliquam qui suscipit eius odio maiores inventore sit. Reprehenderit nulla explicabo repellendus maxime! Excepturi quam quibusdam dolore vel.</p>
        <a class="screen-1__more standard-button">More</a>
      </div>
    </div>
    <div class="app-foot">{{ $t('copyright') }}
      <router-link to="/">{{ $t('backtotop') }}</router-link>
    </div>
  </div>
</template>
<script>

export default {
  components: {
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

.screen-1 {
  height: $screenHeight;
  background: url('../../assets/bg-image-header.jpg') no-repeat center top fixed;
  @include background-size(cover);

  .screen-1__mask {
    background-image: url('../../assets/dotmask.png');
    width: 100%;
    height: 100%; // left: 0px;
    // top: 0px;
    // bottom: 0px;
    // right: 0px;
  }

  .screen-1__heading {
    font-size: 46px;
    color: $white1;
    font-weight: normal;
    text-align: center;
    padding-top: 180px;
    b {
      color: $themeColor1;
    }
  }

  .line {
    margin: 30px auto;
  }

  .screen-1__content {
    color: $white1;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    width: $screenWidth;
    margin: 0 auto;
  }

  .screen-1__more {
    padding: 12px 15px;
    margin-top: 30px;
  }
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