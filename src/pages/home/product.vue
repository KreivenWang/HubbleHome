<template>
  <div class="container">
    <h2 class="title">PRODUCT</h2>
    <div class="line">
    </div>
  
    <div class="sub-heading">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <swiper class="swiper"></swiper>
  </div>
</template>
<script>
import swiper from '../../components/swiper';
export default {
  components: {
    swiper
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

div.line {
  margin: 15px auto;
}

.swiper{
  margin: 15px auto;
}

.container {
  // height: $screenHeight;
}
</style>