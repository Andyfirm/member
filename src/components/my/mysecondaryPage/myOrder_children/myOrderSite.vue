<template>
  <div id="myOrderSite">
    <div class="initBox" v-if="init!=='null'" @click="orderShow">
      <img src="/static/images/icon/init.png" alt="">
      <p>您还没有预约任何场地，赶快点我去预约吧</p>
    </div>
    <ul v-if="init==='block'">
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>场地：羽毛球1场</p>
          <p>开始时间：2018-10-21 <i>18:00</i></p>
          <p>结束时间：2018-10-21 <i>19:00</i></p>
          <p>总价：<i>￥80</i></p>
          <button>确认到场</button>
          <button>取消预约</button>
        </div>
        <p class="subtime">提交预约时间：2018-10-21 17:26:20</p>
      </li>
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>场地：羽毛球1场</p>
          <p>开始时间：2018-10-21 <i>18:00</i></p>
          <p>结束时间：2018-10-21 <i>19:00</i></p>
          <p>总价：<i>￥80</i></p>
          <button>确认到场</button>
          <button>取消预约</button>
        </div>
        <p class="subtime">提交预约时间：2018-10-21 17:26:20</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myOrderSite',
  data() {
    return {
      mySiteList: [],
      init: null,
      shopNum: window.localStorage.getItem('shopNum'),
      token: window.localStorage.getItem('token')
    }
  },
  created() {
    this.getmySiteList()
    window.sessionStorage.setItem('myOrderShow', 'myOrderSite')
  },
  methods: {
    orderShow() {
      window.sessionStorage.setItem('orderShow', 'orderSite')
      this.$router.push({name: 'orderSite'})
    },
    async getmySiteList() {
      const { data: res } = await this.$http.get('myresp/getAppointmentPlaceByUser', {
        params: { pageNo: 0, pageSize: 4, shopNum: this.shopNum, token: this.token }
      })
      if (res.msg === 'success') {
        if (!res.data || res.data.length === 0) return (this.init = 'null')
        this.init = 'block'
        this.mySiteList = res.data
      }
    }
  }
}
</script>

<style scoped>
#myOrderSite {
  width: 100%;
  height: 400px;
}
#myOrderSite ul li {
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
.subtime {
  float: left;
  margin: 0.24rem 0 0.14rem;
  font-size: 0.24rem;
  color: #999;
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
