<template>
  <div>
    <!--<div v-on:mouseenter="stopPlay()" v-on:mouseleave="play()" class="swiper-container gallery-top swiper-container-horizontal">
                                                  <div class="swiper-wrapper">
                                                    <div v-for="item in slides" class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;" :style="{backgroundImage: 'url(' + item.img + ')'}">
                                                    </div>
                                                  </div>
                                                  <div class="swiper-button-next swiper-button-white"></div>
                                                  <div class="swiper-button-prev swiper-button-white swiper-button-disabled"></div>
                                                </div>
                                                <div class="swiper-container gallery-thumbs swiper-container-horizontal">
                                                  <div class="swiper-wrapper">
                                                    <div v-for="item in slides" class="swiper-slide swiper-slide-next" style="margin-right: 10px;" :style="{backgroundImage: 'url(' + item.img + ')'}">
                                                    </div>
                                                  </div>
                                                </div>-->
  
    <div class="swiper-container" v-on:mouseenter="stopPlay()" v-on:mouseleave="play()">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in slides" :style="{backgroundImage: 'url(' + item.img + ')'}">
          <div class="text-wrapper">
            <h1>{{item.title}}</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination swiper-pagination-white"></div>
  
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
  
      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>
</template>
<script>
import Swiper from '../../static/js/swiper-3.4.2.min.js';
// let galleryTop;
// let galleryThumbs;

export default {
  data() {
    return {
      x: 'world',
      slides: [
        {
          img: require('../assets/lb1.jpg'),
          title: 'Culture'
        }, {
          img: require('../assets/lb4.jpg'),
          title: 'Introduction'
        }, {
          img: require('../assets/lb5.jpg'),
          title: 'Purpose'
        }
      ],
      mySwiper: null
    };
  },
  methods: {
    startSwiper() {
      // galleryTop = new Swiper('.gallery-top', {
      //   nextButton: '.swiper-button-next',
      //   prevButton: '.swiper-button-prev',
      //   spaceBetween: 10,
      //   grabCursor: true,
      //   initialSlide: 1,
      //   autoplayDisableOnInteraction: false
      // });
      // galleryThumbs = new Swiper('.gallery-thumbs', {
      //   spaceBetween: 10,
      //   autoplay: 4000,
      //   initialSlide: 1,
      //   centeredSlides: true,
      //   slidesPerView: 'auto',
      //   touchRatio: 0.2,
      //   slideToClickedSlide: true,
      //   autoplayDisableOnInteraction: false,
      //   grabCursor: true
      // });
      // galleryTop.params.control = galleryThumbs;
      // galleryThumbs.params.control = galleryTop;

      this.mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',
        // paginationType: 'custom',
        // paginationCustomRender: function (swiper, current, total) {
        //   return current + ' of ' + total;
        // },
        paginationClickable: true,

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',

        //autoplay: 3000, //可选选项，自动滑动
        // grabCursor: true,
        initialSlide: 1
      });
    },
    stopPlay() {
      this.mySwiper.stopAutoplay();
      // galleryThumbs.stopAutoplay();
    },
    play() {
      //this.mySwiper.startAutoplay();
      // galleryThumbs.startAutoplay();
    }
  },
  mounted() {
    this.startSwiper();
  }
};
</script>

<style lang='scss' scoped>
@import url("../assets/css/swiper-3.4.2.min.css");
@import '../assets/css/consts.scss';

.swiper-container {
  height: $screenHeight;
}

// .gallery-top {
//   height: 100%;
//   width: 100%;
// }
// .gallery-thumbs {
//   height: 20%;
//   box-sizing: border-box;
//   padding: 10px 0;
//   background: rgba(0, 0, 0, 0.4);
//   cursor: pointer;
// }
// .gallery-thumbs .swiper-slide {
//   width: 30%;
//   height: 6rem;
//   opacity: 0.3;
// }
// .gallery-thumbs .swiper-slide-active {
//   opacity: 1;
// }
.swiper-slide {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;

  div.text-wrapper {
    top: 40%;
    left: 15%;
    position: absolute;
    // background: rgba(30, 30, 30, 0.3);

    h1 {
      color: $themeColor1;
      font-weight: bold;
    }

    h3 {
      width: 500px;
      color: $white1;
      line-height: 32px;
    }
  }
}
</style>