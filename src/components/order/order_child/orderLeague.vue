<template>
  <div id="orderLeague">
    <order-top></order-top>
    <my-select @change="getLeagueList"></my-select>
    <ul>
      <li v-for="item of leagueList" :key="item.id">
        <div class="imgBox_l"><img :src="'../../../../static/images/img/' + item.leagueimg" alt=""></div>
        <div class="content_r">
          <p>项目：{{item.courseName}}</p>
          <p>课程日期：<i>{{item.recorddate | convertDate}}</i></p>
          <p>课程时间：<i>{{item.courseTime}}</i></p>
          <p>授课地点：<i>{{item.classroom}}</i></p>
          <p>剩余人数：<i>{{item.maxRenShu-item.shangkerenshu}}</i></p>
          <!-- 团课可预约 -->
          <button v-if="item.showStatus==0&&(item.maxRenShu-item.shangkerenshu) != 0">预约团课</button>
          <!-- 课程已预约 -->
          <button v-else-if="item.showStatus==1" style="background-color:#ccc;border: 0px;outline: none;">课程已预约</button>
          <!-- 人数已满 -->
          <button v-else-if="(item.maxRenShu-item.shangkerenshu) == 0" style="background-color:#ccc;border: 0px;outline: none;">人数已满</button>
          <!-- 课程详情 -->
          <router-link :to="{name: 'groupCourseDetails',query: {id:item.id,showStatus: item.showStatus}}"><button>课程详情</button></router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import orderTop from './orderTop'
import mySelect from '../../index/public/select'
export default {
  name: 'orderLeague',
  components: {
    orderTop,
    mySelect
  },
  data() {
    return {
      leagueList: [],
      originShopNum: null,
      token: window.sessionStorage.getItem('token')
    }
  },
  activated() {
    let shopnum = window.sessionStorage.getItem('shopNum')
    if (this.originShopNum !== shopnum) {
      this.getLeagueList()
    }
    window.sessionStorage.setItem('orderShow', 'orderLeague')
  },
  methods: {
    async getLeagueList() {
      let shopnum = window.sessionStorage.getItem('shopNum')
      let shopName = window.sessionStorage.getItem('shopName')
      if (this.originShopNum === shopnum) return
      const { data: res } = await this.$http.get('condabout/league', {
        params: { shopnum, shopName, token: this.token }
      })
      if (res.msg === 'success') {
        this.leagueList = res.data
        this.originShopNum = shopnum
      }
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
</style>
