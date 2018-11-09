<template>
  <div id="leave">
    <div class="nav_topWrap">
      <div class="nav_top">
        <div>
          <div class="leave_l active" ref="leave_l" @click="leave">请假</div>
        </div>
        <div>
          <div class="pause_r" ref="pause_r" @click="pause">暂停</div>
        </div>
      </div>
      <ul class="content_leave" v-show="isLeave">
        <li>
          <p>卡号:2719847392</p>
          <p>暂停天数:2天</p>
          <p>开始时间:2018-07-18 10:28</p>
          <p>结束时间:2018-07-20 10:28</p>
          <p>暂停日期:2018-07-18 10:28</p>
          <p>注销日期:2018-07-20 10:28</p>
        </li>
      </ul>
      <ul class="content_leave" v-show="isPause">
        <li>
          <p>卡号:2719847393</p>
          <p>暂停天数:2天</p>
          <p>开始时间:2018-07-18 10:28</p>
          <p>结束时间:2018-07-20 10:28</p>
          <p>暂停日期:2018-07-18 10:28</p>
          <p>注销日期:2018-07-20 10:28</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leave',
  data() {
    return {
      isLeave: true,
      isPause: false
    }
  },
  methods: {
    leave() {
      let leave = this.$refs.leave_l
      let pause = this.$refs.pause_r
      leave.classList.add('active')
      pause.classList.remove('active')
      this.isLeave = true
      this.isPause = false
    },
    pause() {
      let leave = this.$refs.leave_l
      let pause = this.$refs.pause_r
      leave.classList.remove('active')
      pause.classList.add('active')
      this.isLeave = false
      this.isPause = true
    }
  }
}
</script>

<style scoped>
#leave {
  width: 100%;
}
.nav_topWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
}
.nav_top {
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  font-size: 0.38rem;
  color: #333;
  border-radius: 8px;
  box-sizing: border-box;
}
.nav_top > div {
  float: left;
  width: 50%;
  text-align: center;
}
.nav_top .leave_l,
.nav_top .pause_r {
  width: 24%;
  padding: 0.24rem 0;
  margin: 0 auto;
}
.nav_top .active {
  color: #7fbeff;
  border-bottom: 2px solid #7fbeff;
  box-sizing: border-box;
}
.content_leave {
  width: 100%;
  margin-top: 0.2rem;
}
.content_leave li {
  background-color: #fff;
  border-radius: 8px;
  padding: 0.2rem 0.4rem;
}
.content_leave li p {
  font-size: 0.3rem;
  color: #333;
  margin: 0.2rem 0;
}
</style>
