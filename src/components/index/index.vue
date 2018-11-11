<template>
  <div id="indexWrap">
    <banner></banner>
    <subbranch></subbranch>
    <introduction :info="info" :cgimgurl="cgimgurl" :venue_name="venue_name"></introduction>
    <online-functions></online-functions>
    <coach></coach>
    <stores-information></stores-information>
    <footer-nav :page="0"></footer-nav>
  </div>
</template>

<script>
import banner from './index_child/banner'
import subbranch from './index_child/subbranch'
import introduction from './index_child/introduction'
import onlineFunctions from './index_child/onlineFunctions'
import coach from './index_child/coach'
import storesInformation from './index_child/storesInformation'
import footerNav from '../footer/footerNav'
import { mapMutations } from 'vuex'
export default {
  name: 'index',
  components: {
    banner: banner,
    subbranch: subbranch,
    introduction: introduction,
    onlineFunctions: onlineFunctions,
    coach: coach,
    storesInformation: storesInformation,
    footerNav: footerNav
  },
  data() {
    return {
      info: '',
      cgimgurl: '',
      venue_name: '',
      tbShopTrue: {},
      token: window.sessionStorage.getItem('token')
    }
  },
  mounted() {
    this.loadIndex()
  },
  methods: {
    async loadIndex() {
      const { data: res } = await this.$http.get('homepageresp/getVenue', {
        params: {
          token: this.token
        }
      })
      if (res.msg === 'success') {
        let data = res.data
        // 过滤出默认要显示的数据
        let ArrshopNum = data.tbShopsList.filter(item => {
          return item.firstShow === 'true'
        })
        this.info = data.info
        this.cgimgurl = data.imgurl
        this.venue_name = data.venue_name
        this.getcgjjInfo(data.info)
        // 将获取的列表数据保存到vuex中
        this.getindexList(data.tbShopsList)
        // 传入默认要显示的数据到vuex中
        this.getindexListShow(ArrshopNum)
        // 将默认分店名称保存到vuex中
        this.getshopNumVuex(ArrshopNum[0].name)
        // 将过滤出的默认的分店保存到本地
        window.sessionStorage.setItem('shopName', ArrshopNum[0].name)
        window.sessionStorage.setItem('shopNum', ArrshopNum[0].shopNum)
      }
    },
    ...mapMutations(['getcgjjInfo', 'getshopNumVuex', 'getindexList', 'getindexListShow'])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#indexWrap {
  padding-bottom: 1.6rem;
  border-radius: 8px;
}
</style>
