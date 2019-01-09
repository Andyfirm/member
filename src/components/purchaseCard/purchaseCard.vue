<template>
  <div id="purchaseCard">
    <ul>
      <li class="cardBox" v-for="item of cardList" :key="item.id">
        <div class="imgBox_wrap">
          <img :src="'../../../static/images/hyk/' + item.infCs.imgpath" alt="">
          <div class="imgBox">
            <h6>{{item.cardName}}</h6>
            <p></p>
            <div class="card_bottom">
              <span class="beizhu">备注</span>
              <span class="money">{{item.infCs.cardcash}}元</span>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="middle_l">卡名：{{item.cardName}}</div>
          <div class="middle_r">
            价格: <i>￥{{item.weChatPrice}}</i>
          </div>
        </div>
        <div class="select">
          <div class="select_l" @click="switchText">查看详情</div>
          <div class="select_r" @click="purchase(item.id, item.weChatPrice)">购买</div>
        </div>
        <p class="showp">{{item.infCs.remarks}}</p>
      </li>
    </ul>
    <footer-nav :page="2"></footer-nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import footerNav from '../footer/footerNav'
export default {
  name: 'purchaseCard',
  components: {
    footerNav
  },
  data() {
    return {
      state: '',
      cardList: [],
      shouqi: null,
      zhankai: null,
      originShopNum: null
    }
  },
  activated() {
    let shopNum = window.sessionStorage.getItem('shopNum')
    if (shopNum !== this.originShopNum) {
      this.getCardList()
    }
  },
  methods: {
    async getCardList() {
      let shopNum = window.sessionStorage.getItem('shopNum')
      let token = window.sessionStorage.getItem('token')
      const { data: res } = await this.$http.get('homepageresp/getCardsBySN', {
        params: { shopNum, token }
      })
      if (res.msg === 'success') {
        this.state = res.data.state
        // this.cardList = res.data.dataArray // 正式渲染
        this.cardList.push(res.data.dataArray[0]) // 临时测试
        this.originShopNum = shopNum
      }
    },
    switchText(event) {
      let el = event.target
      let isTrue = el.classList.contains('unfold')
      if (isTrue) {
        el.classList.remove('unfold')
        el.innerHTML = '了解详情'
        el.parentNode.parentNode.classList.remove('unfoldLi')
      } else {
        el.classList.add('unfold')
        el.innerHTML = '收起'
        el.parentNode.parentNode.classList.add('unfoldLi')
      }
    },
    purchase(id, money) {
      // 获取所选卡信息，跳转支付页面
      const dataObj = {
        kId: id,
        money,
        shopNum: window.sessionStorage.getItem('shopNum'),
        token: window.sessionStorage.getItem('token')
      }
      this.setSubmittedData(dataObj)
      if (this.state === 1) {
        this.$router.push({ name: 'realNameCard', query: { badgeName: '7' } })
      } else if (this.state === 2) {
        this.$router.push({ name: 'confirmPayment', query: { badgeName: '7' } })
      }
    },
    ...mapMutations(['setSubmittedData'])
  }
}
</script>

<style scoped>
#purchaseCard {
  width: 100%;
  padding-bottom: 1.4rem;
}
.cardBox {
  padding: 0.3rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}
.imgBox_wrap {
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 55.5%;
  border-radius: 8px;
  box-sizing: border-box;
}
.imgBox_wrap img {
  width: 100%;
}
.imgBox {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.imgBox h6 {
  font-size: 0.42rem;
  color: #fff;
  margin-top: 0.3rem;
  margin-left: 0.34rem;
}
.imgBox p {
  height: 0.42rem;
  font-size: 0.32rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.6rem;
  margin-left: 0.34rem;
}
.card_bottom {
  width: 100%;
  padding-left: 0.34rem;
  padding-right: 0.52rem;
  box-sizing: border-box;
  margin-top: 0.46rem;
  overflow: hidden;
}
.card_bottom .beizhu {
  float: left;
  font-size: 0.32rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.1rem;
}
.card_bottom .money {
  float: right;
  font-size: 0.42rem;
  color: #fff;
  font-weight: 700;
}
.middle {
  overflow: hidden;
  padding: 0 0.1rem;
}
.middle_l,
.middle_r {
  color: #999;
  font-size: 0.3rem;
}
.middle_l {
  float: left;
}
.middle_r {
  float: right;
}
.middle_r i {
  color: #7ecef4;
  font-style: normal;
}
.select {
  overflow: hidden;
  margin-top: 0.34rem;
  padding: 0 0.1rem;
}
.select_l {
  float: left;
  font-size: 0.26rem;
  color: #7ecef4;
  margin-top: 0.07rem;
}
.select_r {
  float: right;
  font-size: 0.32rem;
  color: #7ecef4;
}
.showp {
  height: 0;
  overflow: hidden;
  font-size: 0.3rem;
  color: #999;
  padding: 0 0.1rem;
  margin-top: 0.2rem;
}
.cardBox.unfoldLi .showp {
  height: auto;
}
</style>
