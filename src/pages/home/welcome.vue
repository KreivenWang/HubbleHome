<template>
  <!-- Welcome -->
  <div class="jumbotron">
    <div class="container mask">
      <div class="row">
        <div class="col-md-10 col-md-offset-1 distance-header">
          <transition-group name="top-in">
            <h1 v-if="isShowAni1" key="1">
              <strong>{{ $t('shorttitle') }}</strong>
              <span> - {{ $t('purpose') }}</span>
            </h1>
            <div v-if="isShowAni2" class="line" key="2"></div>
            <p v-if="isShowAni3" class="sub-heading" key="3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, facere eum corporis aliquam qui suscipit eius odio maiores inventore sit. Reprehenderit nulla explicabo repellendus maxime! Excepturi quam quibusdam dolore vel.
            </p>
            <div v-if="isShowAni4" class="distance-button" key="4">
              <p>
                <a class="btn btn-lg standard-button" href="/product" role="button">{{ $t('more') }}</a>
              </p>
              </a>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 'world',
      isShowAni1: false,
      isShowAni2: false,
      isShowAni3: false,
      isShowAni4: false
    };
  },
  mounted() {
    console.log(window.screen.availHeight);
    console.log(document.body.offsetHeight);
    console.log(document.body.clientHeight);
    setTimeout(() => {
      this.isShowAni1 = true;
    }, 800);
    setTimeout(() => {
      this.isShowAni2 = true;
    }, 1000);
    setTimeout(() => {
      this.isShowAni3 = true;
    }, 1300);
    setTimeout(() => {
      this.isShowAni4 = true;
    }, 1600);
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/consts.scss';

.top-in-enter-active,
.top-in-leave-active {
  transition: all 1s ease-out;
}

.top-in-enter {
  transform: translateY(-10px);
  opacity: 0.1;
}

.jumbotron {
  min-height: $pageMinHeight;
  margin: 0;
  padding: 0;
  background: url('../../assets/bg-image-header.jpg') no-repeat center top fixed;
  -webkit-background-size: cover;
  background-size: cover;
  text-align: center;

  div.mask {
    min-height: $pageMinHeight;
    background-image: url('../../assets/dotmask.png');
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
  }

  h1 {
    font-size: 48px;
    color: $whiteFontColor;
    margin-top: 75px*2;
    strong {
      color: $primaryColor;
    }
    span {
      color: $whiteFontColor;
    }
  }

  div.line {
    margin: 2rem auto 1.8rem auto;
  }

  p.sub-heading {
    color: $whiteFontColor;
  }

  a.standard-button {
    margin-top: 1rem;
  }
}

// .container-header {
//   padding-top: 47px;
//   padding-bottom: 30px;
//   min-height: 50rem;
// }
// .distance-header {
//   margin-top: 15rem;
// }
// .distance-header .sub-heading {
//   font-size: 20px;
//   padding-right: 10%;
//   padding-left: 10%;
//   color: #ffffff;
//   margin-top: 40px;
//   line-height: 30px;
// }
// .distance-button {
//   margin-top: 75px;
//   margin-bottom: 25px;
// }
</style>
