<template>
  <div id="expenseCalendar">
    <div class="initBox" v-if="init==='null'" @click="orderShow">
      <img src="/static/images/icon/init.png" alt>
      <p>您最近暂无消费记录</p>
    </div>
    <ul v-if="init==='block'">
      <li v-for="item of list" :key="item.id">
        <p>
          <span>消费事项</span>
          <i>{{item.itemname}}</i>
        </p>
        <p>
          <span>消费类型</span>
          <i>{{item.custometype}}</i>
        </p>
        <p>
          <span>消费金额</span>
          <strong>{{item.cusprice}}元</strong>
        </p>
        <p>
          <span>消费次数</span>
          <i>{{item.customnum}}次</i>
        </p>
        <p>
          <span>开始时间</span>
          <i>{{item.customedate}}</i>
        </p>
        <p>
          <span>结束时间</span>
          <i>{{item.customendtime}}</i>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'expenseCalendar',
  data() {
    return {
      init: null,
      page: 0,
      list: [],
      shopNum: window.sessionStorage.getItem('shopNum'),
      token: window.sessionStorage.getItem('token')
    }
  },
  created() {
    this.getList(this.page)
  },
  methods: {
    async getList(page) {
      const { data: res } = await this.$http.get(
        'myresp/getExpensesRecordByUser',
        {
          params: {
            pageNo: page,
            pageSize: 6,
            shopNum: this.shopNum,
            token: this.token
          }
        }
      )
      console.log(res)
      if (res.msg === 'success') {
        if (res.data.length === 0) {
          // 如果请求数据为空则提示初始化状态
          return (this.init = 'null')
        }
        // 有数据
        this.init = 'block'
        if (this.pageNo !== 0) {
          // 不是首屏数据则追加
          for (let i = 0; i < res.data.length; i++) {
            this.list.push(res.data[i])
          }
        } else {
          // 首屏数据则直接赋值
          this.list = res.data
        }
      } else {
      }
    }
  }
}
</script>

<style scoped>
#expenseCalendar {
  width: 100%;
}
#expenseCalendar li {
  font-size: 0.28rem;
  background-color: #fff;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.2rem;
  border-radius: 8px;
}
#expenseCalendar li p {
  padding: 0.2rem 0;
}
#expenseCalendar li span {
  color: #999;
  margin-right: 0.2rem;
}
#expenseCalendar li i {
  font-style: normal;
  color: #333;
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
