<template>
  <div id="classDetails_container">
    <div class="content">
      <div class="imgBox"><img :src="'/static/images/zxbb/' +detailsObj.imgurl" alt=""></div>
      <div class="content_btom">
        <h6>班级介绍：</h6>
        <p>{{detailsObj.remark}}</p>
      </div>
    </div>
    <div class="btnBox">
      <button @click="signUp">立即报名</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'classDetails',
  data() {
    return {
      state: null,
      detailsObj: {},
      money: this.$route.query.money,
      classId: this.$route.query.classId,
      token: window.sessionStorage.getItem('token')
    }
  },
  created() {
    this.getclassDetails()
  },
  methods: {
    async getclassDetails() {
      const { data: res } = await this.$http.get('homepageresp/TrainingClassDe', {
        params: { pid: this.classId, token: this.token }
      })
      if (res) {
        this.state = res.state
        this.detailsObj = res.tbPtclass
      }
    },
    signUp() {
      let dataObj = {
        classId: this.detailsObj.classId,
        money: this.money,
        shopNum: this.detailsObj.shopNum,
        token: this.token
      }
      this.setSubmittedData(dataObj)
      if (this.state === 1) {
        this.$router.push({ name: 'realNameCard' })
      } else if (this.state === 2) {
        this.$router.push({ name: 'confirmPayment' })
      }
    },
    ...mapMutations(['setSubmittedData'])
  }
}
</script>

<style scoped>
#classDetails_container {
  width: 100%;
}
.content {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
}
.content .imgBox {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 44.8%;
  background-color: #efefef;
  border-radius: 8px;
}
.content .imgBox img {
  width: 100%;
}
.content_btom {
  padding: 0.4rem 0.26rem 0.4rem 0.26rem;
}
.content h6,
.content p {
  color: #999;
  font-size: 0.32rem;
}
.content h6 {
  font-weight: 500;
  margin-bottom: 0.16rem;
}
.content p {
  text-indent: 0.63rem;
  line-height: 0.52rem;
}
.btnBox {
  width: 100%;
}
.btnBox button {
  outline: none;
  border: 0;
  width: 100%;
  padding: 0.34rem 0;
  margin-top: 0.4rem;
  font-size: 0.32rem;
  color: #fff;
  background-color: #7ecef4;
  border-radius: 8px;
}
</style>
