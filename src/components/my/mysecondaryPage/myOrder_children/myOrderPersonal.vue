<template>
  <div id="myOrderPersonal">
    <div class="initBox" v-if="init!=='null'" @click="orderShow">
      <img src="/static/images/icon/init.png" alt="">
      <p>您还没有预约任何私教，赶快点我去预约吧</p>
    </div>
    <ul v-if="init==='block'">
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>教练：王石</p>
          <p>课程：瑜伽教练30分钟</p>
          <p>开始时间：2018-10-22 <i>11:00</i></p>
          <p>结束时间：2018-10-22 <i>12:00</i></p>
          <button>联系教练</button>
          <button>取消预约</button>
          <div class="coach_bottom">
            <span>教练代预约</span>
            <em>确认</em>
          </div>
        </div>
      </li>
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>教练：王石</p>
          <p>课程：瑜伽教练30分钟</p>
          <p>开始时间：2018-10-22 <i>11:00</i></p>
          <p>结束时间：2018-10-22 <i>12:00</i></p>
          <button>联系教练</button>
          <button>取消预约</button>
          <div class="coach_bottom">
            <span>教练代预约</span>
            <em>确认</em>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myOrderPersonal',
  data() {
    return {
      init: null,
    }
  },
  created() {
    window.sessionStorage.setItem('myOrderShow', 'myOrderPersonal')
  },
  methods: {
      orderShow() {
      window.sessionStorage.setItem('orderShow', 'orderPersonal')
      this.$router.push({name: 'orderPersonal'})
    },
  }
}
</script>

<style scoped>
#myOrderPersonal {
  width: 100%;
}
#myOrderPersonal ul li {
  overflow: hidden;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-radius: 8px;
}
.imgBox_l {
  float: left;
  width: 2.28rem;
  height: 2.28rem;
  background-color: #efefef;
  border-radius: 8px;
}
.content_r {
  position: relative;
  float: right;
  width: 65%;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.content_r p {
  font-size: 0.26rem;
  color: #888;
  margin-bottom: 0.06rem;
}
.content_r p i {
  color: #7ecef4;
  font-style: normal;
}
.content_r button {
  float: left;
  display: block;
  outline: none;
  border: 0;
  font-size: 0.26rem;
  padding: 0.14rem 0.2rem;
  color: #fff;
  background-color: #7ecef4;
  border-radius: 8px;
  margin-top: 0.16rem;
  margin-right: 0.2rem;
}
.coach_bottom {
  float: left;
  margin: 0.24rem 0 0.1rem;
}
.coach_bottom span,
.coach_bottom em {
  float: left;
  font-size: 0.28rem;
}
.coach_bottom span {
  color: #777;
}
.coach_bottom em {
  color: #7ecef4;
  margin-left: 0.7rem;
  font-style: normal;
}
.initBox {
  width: 100%;
}
.initBox img {
  display: block;
  width: 5rem;
  height: 5rem;
  margin: 0.52rem auto;
}
.initBox p {
  font-size: 0.32rem;
  text-align: center;
}
</style>
