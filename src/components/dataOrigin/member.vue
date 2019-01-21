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
      token: '',
      theFirst: window.localStorage.getItem('theFirst') // 判断是否为第一次登陆,如果成功登陆则将状态保存在本地
    }
  },
  created() {
    if (this.clubId) {
      window.sessionStorage.setItem('clubId', this.clubId)
    }
    this.clubId = window.sessionStorage.getItem('clubId')
    this.code = this.getParameter('code')
    this.getTextNumbers()
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
        if (this.token) {
          this.goToNextPage()
        }
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
      if (res.msg === 'success') {
        this.token = res.data
        window.sessionStorage.setItem('token', res.data)
        if (this.textNumbers) {
          this.goToNextPage()
        }
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
      if (this.theFirst === 'true') { // 不是第一次登录
        let date = new Date().getTime()
        let pastDate = window.localStorage.getItem('pastDate')
        if (pastDate < date) { // 当前时间大于以前保存的时间证明已过期，跳转至登录页
          window.sessionStorage.setItem('clubId', this.clubId)
          this.$router.push({
            name: 'club',
            query: { textNumbers: this.textNumbers }
          })
          return
        }
        // 获取账号密码
        let userName = window.localStorage.getItem('yspUserName')
        let password = window.localStorage.getItem('yspPassWord')
        if (userName && password) {
          this.login(userName, password)
        }
      } else {
        window.sessionStorage.setItem('clubId', this.clubId)
        this.$router.push({
          name: 'club',
          query: { textNumbers: this.textNumbers }
        })
      }
    },
    async login(userName, passWord) {
      const { data: res } = await this.$http.get('memberLogin/logined', {
        params: {
          userName,
          passWord,
          token: window.sessionStorage.getItem('token')
        }
      })
      if (res.msg === 'success') {
        this.$router.push({ name: 'index' })
        window.sessionStorage.setItem('isLogin', 'true')
      }
      if (res.msg === 'fail') this.$toast(res.data)
    }
  }
}
</script>

<style scoped>
</style>
