<template>
  <div id="tickets_container">
    <my-select @change="getTickList"></my-select>
    <div class="ticket_box">
      <div class="content_top">
        <div class="shop">门店：武昌店</div>
        <router-link :to="{name: 'ticketRecord'}" class="ticket_record">购票记录</router-link>
      </div>
      <ul class="content_mide">
        <li v-for="item of ticketList" :key="item.id">
          <div class="img_left">
            <img :src="'../../../../static/images/image/zxgp/' + item.picture" alt="">
          </div>
          <div class="btn_right">
            <button @click="purchase(item.id)">购买</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import select from '../public/select'
export default {
  name: 'ticketsOnline',
  components: {
    mySelect: select
  },
  data() {
    return {
      ticketList: [],
      shopNumOrigin: null,
      token: window.sessionStorage.getItem('token')
    }
  },
  activated() {
    if (this.shopNumOrigin !== window.sessionStorage.getItem('shopNum')) {
      this.getTickList()
    }
  },
  methods: {
    async getTickList() {
      let shopNum = window.sessionStorage.getItem('shopNum')
      if (shopNum === this.shopNumOrigin) return
      const { data: res } = await this.$http.get('homepageresp/TickByShopNum', {
        params: { shopNum, token: this.token }
      })
      if (res.msg === 'success') {
        this.ticketList = res.data
        this.shopNumOrigin = window.sessionStorage.getItem('shopNum')
      }
    },
    purchase(id) {
      // 编程式导航，预留是否可以购票的权限
      this.$router.push({ name: 'orderDetails', query: { id, type: 'ticket' } })
    }
  }
}
</script>

<style scoped>
#tickets_container {
  width: 100%;
}
.ticket_box {
  padding: 0.4rem;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.content_top {
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.ticket_box .shop {
  color: #333;
  font-size: 0.32rem;
  float: left;
}
.ticket_record {
  float: right;
  color: rgb(30, 159, 255);
  font-size: 0.32rem;
  line-height: 0.36rem;
  text-decoration: none;
}
.content_mide {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}
.content_mide li {
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.img_left {
  float: left;
  width: 3.84rem;
  height: 1.94rem;
  border-radius: 8px;
}
.img_left img {
  width: 100%;
}
.btn_right {
  float: right;
}
.btn_right button {
  width: 1.38rem;
  height: 0.7rem;
  color: #fff;
  font-size: 0.32rem;
  background-color: #7ecef4;
  outline: none;
  border: 1px solid transparent;
  border-radius: 8px;
}
</style>
