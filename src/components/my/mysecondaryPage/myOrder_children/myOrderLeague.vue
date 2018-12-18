<template>
  <div id="myOrderLeague">
    <div class="initBox" v-if="init!=='null'" @click="orderShow">
      <img src="/static/images/icon/init.png" alt="">
      <p>您还没有预约任何团课，赶快点我去预约吧</p>
    </div>
    <ul v-if="init==='block'">
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>课程：拉丁</p>
          <p>教室：瑜伽教室</p>
          <p>开始时间：2018-10-07 <i>11:00</i></p>
          <p>结束时间：2018-10-07 <i>00:00</i></p>
          <button>签到</button>
          <button>取消预约</button>
        </div>
      </li>
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>课程：拉丁</p>
          <p>教室：瑜伽教室</p>
          <p>开始时间：2018-10-07 <i>11:00</i></p>
          <p>结束时间：2018-10-07 <i>00:00</i></p>
          <button>签到</button>
          <button>取消预约</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myOrderLeague',
  data() {
    return {
      myLeagueList: [],
      init: null,
      shopNum: window.sessionStorage.getItem('shopNum'),
      token: window.sessionStorage.getItem('token')
    }
  },
  created() {
    this.getmyLeagueList()
    window.sessionStorage.setItem('myOrderShow', 'myOrderLeague')
  },
  methods: {
    orderShow() {
      window.sessionStorage.setItem('orderShow', 'orderLeague')
      this.$router.push({name: 'orderLeague'})
    },
    async getmyLeagueList() {
      const { data: res } = await this.$http.get('myresp/getAppointmentClassByUser', {
        params: { pageNo: 0, pageSize: 4, shopNum: this.shopNum, token: this.token }
      })
      console.log(res)
    }
  }
}
</script>

<style scoped>
#myOrderLeague {
  width: 100%;
}
#myOrderLeague ul li {
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
