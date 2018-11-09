<template>
  <div id="mytop">
    <div class="imgBox"><img src="/static/images/my/header.png" alt=""></div>
    <ul class="my_right">
      <li>
        <span class="name">{{infa.name}}</span>
        <i class="icon_sex" v-show="infa.sex === '男'"><img src="/static/images/icon/sex_boy.png" alt=""></i>
        <i class="icon_sex" v-show="infa.sex === '女'"><img src="/static/images/icon/sex_girl.png" alt=""></i>
        <i class="icon_redact"></i>
      </li>
      <li class="call">手机号：{{infa.mobile}}</li>
      <li class="huiji">会籍顾问：王晓辉</li>
      <li class="closeButton"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myTop',
  data() {
    return {
      infa: {},
      token: window.localStorage.getItem('token')
    }
  },
  created() {
    this.getMyCenter()
  },
  methods: {
    async getMyCenter() {
      const { data: res } = await this.$http.get('myresp/getUserInfoByToken', {
        params: { token: this.token }
      })
      console.log(res)
      if (res.msg === 'success') {
        this.infa = res.data.infa
      }
    }
  }
}
</script>

<style scoped>
#mytop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.5rem;
  padding: 0.2rem 0.4rem 0.2rem 0.2rem;
  background-image: linear-gradient(66deg, #8dbbfa 0%, #8ad8d7 64%, #87f5b3 100%);
  box-sizing: border-box;
}
.imgBox {
  float: left;
  width: 1.66rem;
  height: 1.66rem;
  background-color: #fff;
  border: 5px solid #d9edf9;
  border-radius: 50%;
  box-sizing: border-box;
}
.imgBox img {
  float: left;
  display: block;
  width: 100%;
  border-radius: 50%;
}
.my_right {
  position: relative;
  width: 75%;
  float: right;
  padding-left: 0.36rem;
  box-sizing: border-box;
}
.my_right li {
  overflow: hidden;
}
.my_right .name {
  float: left;
  font-size: 0.4rem;
  color: #fff;
  font-weight: 700;
  max-width: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my_right .icon_sex {
  float: left;
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 0.2rem;
  margin-top: 0.08rem;
}
.my_right .icon_sex img {
  display: block;
  width: 100%;
}
.my_right .icon_redact {
  float: left;
  display: block;
  width: 0.34rem;
  height: 0.34rem;
  background: url('~images/icon/bianji.jpg') no-repeat center/contain;
  margin-top: 0.11rem;
}
.my_right .call,
.my_right .huiji {
  font-size: 0.24rem;
  color: #fff;
  font-weight: 700;
}
.my_right .call {
  margin: 0.2rem 0;
}
.closeButton {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.4rem;
  height: 0.4rem;
  background: url('~images/icon/exit.png') no-repeat center/cover;
}
</style>
