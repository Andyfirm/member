<template>
  <div id="forgetpassword">
    <div class="beark">
      <router-link :to="{name: 'login'}">
        <p>上一步</p>
      </router-link>
    </div>
    <div class="wrap loginPage">
      <section>
        <div class="wrapper" id="phone">
          <input type="text" id="tel1" placeholder="请输入您的手机号" maxlength="11">
        </div>
        <div class="wrapper2">
          <div class="ident2">
            <input type="number" pattern="[0-9]*" id="verCode" style="margin-left:0px !important;" placeholder="请输入验证码">
            <div class="ident3">
              <input type="button" id="yzm1" value="获取验证码">
            </div>
          </div>
        </div>
        <div class="wrapper" id="passTiShi1">
          <input type="password" id="pwd1" placeholder="请输入您的密码">
        </div>
        <div class="wrapper" id="passTiShi2">
          <input type="password" id="repwd1" placeholder="请再次输入您的密码">
        </div>
        <button id="register">立即重置</button>
        <input type="hidden" id="loginResult" value="">
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forgetpassword',
  data() {
    return {}
  }
}
</script>

<style scoped>
.beark {
  position: absolute;
  top: 16px;
  left: 9%;
  margin-top: 15px;
}
.beark a {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
section {
  flex: 1;
  position: absolute;
  top: 1.6rem;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 80%;
  border-radius: 7px;
}
#phone {
  position: relative;
}
.wrapper {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #ccc;
  background: #f6f6f6;
  margin-bottom: 0.6rem;
}
.wrapper input {
  flex: 1;
  height: 1rem;
  margin-right: 0.25rem;
  text-align: center;
  text-align: left;
  /* color: #fff; */
}
input {
  border: none;
  outline: none;
  display: inline-block;
  background-color: transparent;
  font-size: 0.32rem;
}
.wrap {
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 7.5rem;
  margin: 0 auto;
  padding-top: 0.1rem;
}
.wrapper2 {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1rem;
  border-radius: 7px;
  margin-top: 0.06rem;
  margin-bottom: 0.24rem;
}
.ident2 {
  width: 100%;
  justify-content: center;
  height: 1rem;
  float: left;
  margin-left: 0px;
  line-height: 1rem;
  background: #f6f6f6;
  border-radius: 0px;
  margin-bottom: 0.1rem;
}
#verCode {
  float: left;
  width: 54%;
  line-height: 1rem;
  text-align: left;
  border-bottom: 1px solid #ccc !important;
}
.ident3 {
  float: right;
  height: 0.9rem;
  padding: 0 0.2rem;
  background: #4b9fd2;
  border-radius: 7px;
  margin-top: 2px;
}
#yzm1 {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  float: right;
}
section #register {
  height: 0.92rem;
  border-radius: 7px;
  background: #4b9fd2;
  color: #fff;
  border: none;
  outline: none;
  font-size: 0.32rem;
  margin-top: 15px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #ccc;
}
</style>
