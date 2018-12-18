<template>
  <div id="myPersonal">
    <div class="initBox" v-if="init==='null'" @click="orderShow">
      <img src="/static/images/icon/init.png" alt>
      <p>您还没有购买任何私教，赶快点我去购买吧</p>
    </div>
    <ul v-if="init==='block'">
      <li>
        <div class="imgBox_l">
          <img src alt>
        </div>
        <div class="content_r">
          <p>教练：Linda</p>
          <p>课程：足球基础班</p>
          <p>
            购买次数：
            <i>30</i>
          </p>
          <p>
            剩余次数：
            <i>17</i>
          </p>
          <button>联系教练</button>
          <button>预约课程</button>
        </div>
      </li>
      <li>
        <div class="imgBox_l">
          <img src alt>
        </div>
        <div class="content_r">
          <p>私教姓名：Linda</p>
          <p>课程名称：瑜伽30分钟</p>
          <p>
            购买次数：
            <i>30</i>
          </p>
          <p>
            剩余次数：
            <i>17</i>
          </p>
          <button>联系教练</button>
          <button>预约课程</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myPersonal',
  data() {
    return {
      init: null,
      page: 0,
      shopNum: window.sessionStorage.getItem('shopNum'),
      token: window.sessionStorage.getItem('token')
    }
  },
  created() {
    this.getList(this.page)
  },
  methods: {
    // 首屏数据获取
    async getList(page) {
      const { data: res } = await this.$http.get('myresp/getPTByUser', {
        params: {
          pageNo: page,
          pageSize: 6,
          shopNum: this.shopNum,
          token: this.token
        }
      })
      console.log(res)
    },
    // 点击跳转至一级私教预约页面
    orderShow() {
      this.$router.push({ name: 'moreCoach' })
    }
  }
}
</script>

<style scoped>
#myPersonal {
  width: 100%;
}
#myPersonal ul li {
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
  margin-bottom: 0.1rem;
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
