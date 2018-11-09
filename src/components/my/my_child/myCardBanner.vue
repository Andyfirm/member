<template>
  <div id="myCardBanner">
    <div class="nullCard" v-show="cardList.length===0">
      <div class="content">
        <p>您一张会员卡都没有，天哪</p>
        <router-link :to="{name: 'purchaseCard'}">
          <div class="img"></div>
        </router-link>
        <p>快来成为VIP</p>
      </div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide>slice1</swiper-slide>
      <swiper-slide>slice2</swiper-slide>
      <swiper-slide>slice3</swiper-slide>
      <swiper-slide>slice4</swiper-slide>
      <swiper-slide>slice5</swiper-slide>
      <swiper-slide>slice6</swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'myCardBanner',
  data() {
    return {
      cardList: [
        { id: 1, name: '年卡', number: 201874578941447, money: 200 },
        { id: 2, name: '入会卡', number: 203147847514777, money: 1000 }
      ],
      swiperOption: {
        autoplay: {
          delay: 4000
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style scoped>
#myCardBanner {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 1.9rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
  border-radius: 8px;
}
.nullCard {
  width: 100%;
  float: left;
  padding: 0 10px;
  border-radius: 8px;
  box-sizing: border-box;
}
.nullCard .content {
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
.swiper-pagination {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.nullCard p {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.nullCard .img {
  width: 2.1rem;
  height: 2.1rem;
  margin: 0.5rem auto;
  background: url('~images/icon/tuoyuan.png') no-repeat center/cover;
}
</style>
