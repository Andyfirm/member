<template>
  <div id="orderLeague">
    <order-top></order-top>
    <my-select @change="getPersonalList('1')"></my-select>
    <ul>
      <li v-for="item of personalList" :key="item.id">
        <div class="imgBox_l"><img :src="'/static/images/sjkc/' + item.infPTClassInfo.imgurl" alt=""></div>
        <div class="content_r">
          <p>私教姓名：{{item.teachername}}</p>
          <p>课程名称：{{item.teachitemname}}</p>
          <p>购买次数：<i>{{item.teachtime}}</i></p>
          <p>剩余次数：<i>{{item.lastteachtime-(item.giftPtNum == null ? 0 : item.giftPtNum)}}</i></p>
          <!-- 可预约 -->
          <button v-if="item.lastteachtime > 0 && item.lastteachtime-(item.giftPtNum == null ? 0 : item.giftPtNum) > 0">预约课程</button>
          <!-- 不可预约 -->
          <button v-else style="background-color: #ccc;border: 0px;outline: none;">预约课程</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import orderTop from './orderTop'
import mySelect from '../../index/public/select'
export default {
  name: 'orderPersonal',
  components: {
    orderTop,
    mySelect
  },
  data() {
    return {
      personalList: [],
      originShopNum: null
    }
  },
  activated() {
    this.getPersonalList()
    window.sessionStorage.setItem('orderShow', 'orderPersonal')
  },
  methods: {
    async getPersonalList(ischange) {
      let shopnum = window.sessionStorage.getItem('shopNum')
      let token = window.sessionStorage.getItem('token')
      if (ischange === '1' && this.originShopNum === shopnum) return
      const { data: res } = await this.$http.get('condabout/searchprivate', {
        params: { shopnum, token }
      })
      console.log(res)
      this.personalList = res
      this.originShopNum = shopnum
    }
  }
}
</script>

<style scoped>
#orderLeague {
  width: 100%;
}
#orderLeague ul li {
  overflow: hidden;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-radius: 8px;
}
.imgBox_l {
  overflow: hidden;
  float: left;
  width: 2.28rem;
  height: 2.28rem;
  background-color: #efefef;
  border-radius: 8px;
}
.imgBox_l img {
  width: 100%;
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
  display: block;
  outline: none;
  border: 0;
  font-size: 0.26rem;
  padding: 0.14rem 0.2rem;
  color: #fff;
  background-color: #7ecef4;
  border-radius: 8px;
  margin-top: 0.26rem;
}
</style>
