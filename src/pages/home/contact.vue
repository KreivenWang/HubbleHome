<template>
  <div class="container">
  
    <h2 class="title">CONTACT US</h2>
    <div class="line">
    </div>
  
    <div class="sub-heading">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  
    <!-- Video -->
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="row">
          <div class="col-md-4 left-part">
            <address>
              <strong>Hubble, Inc.</strong>
              <br> 1355 Market Street, Suite 900
              <br> Shanxi Xi'an, CN 94103
              <br>
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <!--<address>
              <strong>Full Name</strong>
              <br>
              <a href="mailto:#">first.last@example.com</a>
            </address>-->
            <p>Official Product Platform</p>
            <img src="../../assets/homeqrcode.png">
          </div>
          <div class="col-md-6 right-part">
            <!--<p>Our fantastic office is located at</p>-->
            <div class="img-to-right img-rounded">
              <img src="../../assets/officelocation.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 'world'
    };
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/consts.scss';

div.container {
  height: $pageMinHeight / 2;
}

div.line {
  margin: 15px auto;
}



.left-part {
  margin-top: 25px;
  color: $whiteFontColor;


  p {
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: $whiteFontColor;
  }
  img {
    width: 128px;
    margin: 5px auto;
    box-shadow: 1px 1px 8px $primaryColor;
    border: 2px solid gray;
  }

  address {
    margin-bottom: 25px;
  }

  div.img-to-center {
    text-align: center;
  }
}

.right-part {

  p {
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 0;
    color: $whiteFontColor;
  }
  img {
    height: 250px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: 0;
    margin-left: 40px;
    box-shadow: 1px 1px 8px $primaryColor;
    opacity: 0.85;
    // border: 2px solid gray;
    border-radius: 5px;
  }

  div.img-to-right {
    text-align: right;
  }
}
</style>
