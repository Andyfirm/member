<template>
  <div id="orderDetails_container">
    <div class="content">
      <ul>
        <li>场馆名称：{{data.shopname}}</li>
        <li>项目名称：{{data.name}}</li>
        <li class="quantity">
          <div>项目数量：</div>
          <span class="sub" @click="sub"><img src="~images/icon/reduce.png" alt=""></span> <span>{{number}}</span>
          <span class="add" @click="number++"><img src="~images/icon/add.png" alt=""></span>
        </li>
        <li>订单总价：{{orderPrice}}元</li>
        <li>活动优惠：<span style="color:#999;">无</span></li>
        <li>提交时间：{{data.beizhu}}</li>
        <li>
          备注说明：
          <p style="color:#999;padding-top:0.3rem;">仅限于个人使用，每日使用一次。</p>
        </li>
      </ul>
    </div>
    <button @click="confirmPayment">提交订单</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'orderDetails',
  data() {
    return {
      data: {},
      number: 1,
      money: 0,
      type: this.$route.query.type,
      id: this.$route.query.id,
      token: window.sessionStorage.getItem('token')
    }
  },
  created() {
    let course = 'homepageresp/ViewEJtOrder'
    let ticket = 'homepageresp/TicketOrder'
    if (this.type === 'course') {
      this.getOrder(course)
    } else if (this.type === 'ticket') {
      this.getOrder(ticket)
    }
  },
  methods: {
    sub() {
      if (this.number <= 1) {
        this.number = 1
      } else {
        this.number--
      }
    },
    async getOrder(url) {
      const { data: res } = await this.$http.get(url, {
        params: { id: this.id, token: this.token }
      })
      if (res.msg === 'success') {
        this.data = res.data
        this.money = res.data.total
      }
    },
    confirmPayment() {
      // 点击提交按钮，将订单所需值存入vuex中，然后跳转到支付页面
      let dataObj = {}
      if (this.type === 'course') {
        dataObj.money = this.orderPrice
        dataObj.classId = this.id
        dataObj.token = window.sessionStorage.getItem('token')
        this.setSubmittedData(dataObj)
        this.$router.push({ name: 'confirmPayment', query: { badgeName: '6' } }) // 购买私教
      } else if (this.type === 'ticket') {
        dataObj.ticketName = this.data.name
        dataObj.count = this.number
        dataObj.money = this.orderPrice
        dataObj.shortName = this.data.shortName
        dataObj.shopnum = window.sessionStorage.getItem('shopNum')
        dataObj.token = window.sessionStorage.getItem('token')
        this.setSubmittedData(dataObj)
        this.$router.push({ name: 'confirmPayment', query: { badgeName: '4' } }) // 在线购票
      }
    },
    ...mapMutations(['setSubmittedData'])
  },
  computed: {
    orderPrice() {
      return (this.money * this.number).toFixed(2)
    }
  }
}
</script>

<style scoped>
#orderDetails_container {
  position: relative;
  width: 100%;
}
.content {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 9.6rem;
  padding: 0.4rem;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}
ul li {
  color: #333;
  font-size: 0.32rem;
  padding: 0.38rem 0;
  border-bottom: 1px solid #dcdcdc;
}
.quantity {
  height: 1.08rem;
  line-height: 1.08rem;
  padding: 0;
}
.quantity div,
.quantity span {
  float: left;
}
.sub,
.add {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.34rem 0.2rem 0;
}
.sub {
  margin-left: 0;
}
.sub img,
.add img {
  display: block;
  width: 100%;
}
button {
  outline: none;
  border: 0;
  width: 100%;
  height: 1rem;
  color: #fff;
  font-size: 0.32rem;
  background-color: #7ecef4;
  border-radius: 8px;
  position: absolute;
  bottom: -1.3rem;
}
</style>
