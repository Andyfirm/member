<template>
  <div id="member"></div>
</template>

<script>
export default {
  name: 'member',
  data() {
    return {
      textNumbers: '',
      clubId: this.$route.query.clubId,
      code: '',
      theFirst: '' // 判断是否为第一次登陆
    }
  },
  created() {
    if(this.clubId) {
      window.sessionStorage.setItem('clubId', this.clubId)
    }
    this.clubId = window.sessionStorage.getItem('clubId')
    this.getTextNumbers()
    alert('参数' + this.clubId)
    this.code = this.getParameter('code')
    if (!this.code) {
      this.getCode()
    } else {
      this.getToken()
    }
  },
  methods: {
    // 获取场馆编号
    async getTextNumbers() {
      if (!this.clubId || this.clubId === 0) return
      const { data: res } = await this.$http.get(
        'publicNumber/getClubInfoByClubMemberCode',
        { params: { clubId: this.clubId } }
      )
      if (res.msg === 'success') {
        let data = res.data
        this.textNumbers = data
      } else if (res.msg === 'fail') {
        this.$toast(res.data)
      }
    },
    // 获取code
    getCode() {
      let url =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxaec1c79123e95c61&redirect_uri=' +
        location.href.split('#')[0] +
        '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
      window.location.href = url
    },
    // 获取token
    async getToken() {
      const { data: res } = await this.$http.get('wechar/member', {
        params: { code: this.code }
      })
      alert('token' + JSON.stringify(res))
      if (res.msg === 'success') {
        window.sessionStorage.setItem('token', res.data)
        this.goToNextPage()
      } else {
        this.$toast(res.data)
      }
    },
    // 解析code
    getParameter(param) {
      let query = window.location.search
      let iLen = param.length
      let iStart = query.indexOf(param)
      if (iStart === -1) return ''
      iStart += iLen + 1
      let iEnd = query.indexOf('&', iStart)
      if (iEnd === -1) {
        return query.substring(iStart)
      }
      return query.substring(iStart, iEnd)
    },
    // 根据判断跳转至不同页面
    goToNextPage() {
      // 预留是否为第一次的判断
      // TODO
      window.sessionStorage.setItem('clubId', this.clubId)
      this.$router.push({
        name: 'club',
        query: { textNumbers: this.textNumbers }
      })
    }
  }
}
</script>

<style scoped>
</style>
