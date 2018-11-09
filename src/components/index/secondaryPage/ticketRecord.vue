<template>
  <div id="ticket_continer">
    <div class="tab">
      <div class="tab_content">
        <div class="l_wqp">
          <div id="l_wqp" :class="{active: wqp}" @click="getWqp">未取票</div>
        </div>
        <div class="r_qb">
          <div id="r_qb" :class="{active: yqp}" @click="getYqp">已取票</div>
        </div>
      </div>
    </div>
    <!-- 未取票 -->
    <ul class="tabsUl wqp">
      <li class="dingdanbox">
        <ul class="ulList">
          <li class="liList">
            <div class="l-ticket">
              <div class="name">早场票</div>
              <div class="subTotal">20元</div>
            </div>
            <div class="r-ticket">
              <div class="ckxq">查看详情</div>
              <div class="date">2018-10-11</div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 已取票 -->
    <ul class="tabsUl yqp">
      <li class="dingdanbox">
        <ul class="ulList">
          <li class="liList">
            <div class="l-ticket">
              <div class="name">晚场票</div>
              <div class="subTotal">10元</div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ticketRecord',
  data() {
    return {
      wqp: true,
      yqp: false
    }
  },
  methods: {
    getWqp() {
      this.wqp = true
      this.yqp = false
    },
    getYqp() {
      this.wqp = false
      this.yqp = true
    }
  }
}
</script>

<style scoped>
#ticket_continer {
  width: 100%;
}
.tab {
  height: 0.8rem;
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  font-size: 0.36rem;
}
.tab_content {
  height: 100%;
}
.tab .l_wqp {
  float: left;
  width: 50%;
  height: 100%;
  border-right: 1px solid #efefef;
  box-sizing: border-box;
}
#l_wqp,
#r_qb {
  width: 50%;
  height: 100%;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
}
.tab .r_qb {
  float: right;
  width: 50%;
  height: 100%;
}
#l_wqp.active,
#r_qb.active {
  color: #7fbeff;
  border-bottom: 2px solid #7fbeff;
}
.tabsUl.wqp,
.tabsUl.yqp {
  padding: 0.2rem;
  font-size: 0.36rem;
  background-color: #fff;
  margin-top: 0.2rem;
  border-radius: 8px;
}
</style>
