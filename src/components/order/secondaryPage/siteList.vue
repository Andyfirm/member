<template>
  <div id="siteList">
    <div class="date_topWrap">
      <div class="date_top">
        <ul>
          <li v-for="(value, key, index) in dateArr" :class="{'active': key == isKey}" :key="index" @click="getSiteList(key,index)">
            <p>{{value}}</p>
            <p>{{key}}</p>
          </li>
        </ul>
        <div class="icon_right" @click="openPicker"></div>
      </div>
      <template>
        <mt-datetime-picker ref="picker" type="date" :startDate="startDate" :endDate="new Date(endDateNumber)" v-model="pickerValue" @confirm="getSiteList">
        </mt-datetime-picker>
      </template>
    </div>
    <div class="milde_container">
      <div class="top_opcity"></div>
      <div class="left_opcity"></div>
      <div class="date_left" ref="leftdate_y">
        <ul>
          <li>09:00</li>
          <li>10:00</li>
          <li>11:00</li>
          <li>12:00</li>
          <li>13:00</li>
          <li>14:00</li>
          <li>15:00</li>
          <li>16:00</li>
          <li>17:00</li>
          <li>18:00</li>
          <li>19:00</li>
          <li>20:00</li>
          <li>21:00</li>
          <li>22:00</li>
        </ul>
      </div>
      <div class="sitename_top" ref="top_x">
        <ul>
          <li>足球场1</li>
          <li>足球场2</li>
          <li>足球场3</li>
          <li>足球场4</li>
          <li>足球场5</li>
          <li>足球场6</li>
          <li>足球场7</li>
          <li>足球场8</li>
          <li>足球场9</li>
          <li>足球场10</li>
          <li>足球场11</li>
          <li>足球场12</li>
          <li>足球场13</li>
        </ul>
      </div>
      <div class="sitecontent" ref="scroll_top">
        <div class="sitecontentWrap" ref="scroll_left">
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
          <ul>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
            <li>￥50</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="legend">
      <ul>
        <li>
          <span></span>
          <p>不可预约</p>
        </li>
        <li>
          <span></span>
          <p>可预约</p>
        </li>
        <li>
          <span></span>
          <p>已选择</p>
        </li>
      </ul>
    </div>
    <p class="tishi">友情提示:一次最多选择4个时间段</p>
    <div class="selected">
      <ul v-if="selected">
        <li>
          <span>￥80</span>
          <p>12:00-13:00</p>
        </li>
        <li>
          <span>￥80</span>
          <p>12:00-13:00</p>
        </li>
        <li>
          <span>￥80</span>
          <p>12:00-13:00</p>
        </li>
        <li>
          <span>￥80</span>
          <p>12:00-13:00</p>
        </li>
      </ul>
      <p v-else class="placeholder">请选择预约时间段</p>
    </div>
    <div class="money">共计：￥200</div>
    <div class="btnBox">
      <button>预约场地</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'siteList',
  data() {
    return {
      shortname: this.$route.query.shortname,
      name: this.$route.query.name,
      shopNum: this.$route.query.shopNum,
      token: window.localStorage.getItem('token'),
      siteList: [],
      startDate: new Date(),
      pickerValue: '',
      isKey: '',
      sunday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      dateArr: [],
      current: 0,
      selected: false
    }
  },
  mounted() {
    this.getSiteList()
    this.transverse()
    let scrollTop = this.$refs.scroll_top
    this.handleScroll()
    scrollTop.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollLeft = this.$refs.scroll_left // 获取主动触发的x方向的元素
      let topX = this.$refs.top_x // 获取顶部x方向滚动元素
      let xNumber = scrollLeft.scrollLeft // 得到主动触发x方向的滚动偏移量
      scrollLeft.addEventListener('scroll', () => {
        xNumber = scrollLeft.scrollLeft
        topX.scrollLeft = xNumber
      })
      let scrollTop = this.$refs.scroll_top // 获取主动触发的y方向的元素
      let leftdateY = this.$refs.leftdate_y // 获取侧部y方向要滚动的元素
      let yNumber = scrollTop.scrollTop
      leftdateY.scrollTop = yNumber
    },
    async getSiteList(key, index) {
      this.current = index || 0
      let dateymd = this.$moment(key).format('YYYY-MM-DD') || this.$moment().format('YYYY-MM-DD')
      this.isKey = dateymd
      const { data: res } = await this.$http.get('condabout/subsite', {
        params: {
          shopnum: this.shopNum,
          dateymd,
          shortname: this.shortname,
          token: this.token
        }
      })
      console.log(res)
    },
    // 横向日历
    transverse() {
      let d1 = new Date()
      let dy = d1.getFullYear()
      let dm = parseInt(d1.getMonth()) + 1
      let dd = d1.getDate()
      let dz = parseInt(d1.getDay())
      let dateD1 = `${dy}-${dm >= 10 ? dm : '0' + dm}-${dd >= 10 ? dd : '0' + dd}`
      let y = dy
      let m = dm
      let d = dd
      let ymdarr = [dateD1]
      for (let i = 0; i < 61; i++) {
        if (m >= 12 && d >= 31) {
          y++
          m = 0
        }
        if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
          if (d >= 31) {
            d = 0
            m++
            d++
          } else {
            d++
          }
        } else if (m === 2) {
          if (d >= 28) {
            d = 0
            m++
            d++
          } else {
            d++
          }
        } else {
          if (d >= 30) {
            d = 0
            m++
            d++
          } else {
            d++
          }
        }
        let datepush = `${y}-${m >= 10 ? m : '0' + m}-${d >= 10 ? d : '0' + d}`
        ymdarr.push(datepush)
      }
      this.dataYtd = ymdarr
      if (dz !== 0) {
        let subArr1 = this.sunday.slice(0, dz)
        let subArr2 = this.sunday.slice(dz)
        for (let i = 0; i < subArr1.length; i++) {
          subArr2.push(subArr1[i])
        }
        let sundayList = subArr2
        this.sunday = sundayList.concat(subArr2)
        let sundayLists = this.sunday
        for (let i = 0; i < 4; i++) {
          sundayLists = sundayLists.concat(this.sunday)
          this.sunday = sundayLists
        }
      } else {
        this.sunday = this.sunday.concat(this.sunday)
      }
      let dataObj = {}
      for (let i = 0; i < this.dataYtd.length; i++) {
        dataObj[this.dataYtd[i]] = this.sunday[i]
      }
      this.dateArr = dataObj
    },
    openPicker() {
      this.$refs.picker.open()
    }
  },
  computed: {
    endDateNumber() {
      let today = new Date()
      if (today.getMonth() <= 12) {
        return today.setMonth(today.getMonth() + 1)
      } else {
        return today.setYear(today.getYear() + 1)
      }
    }
  }
}
</script>

<style scoped>
#siteList {
  width: 100%;
  padding-top: 1.04rem;
  /* padding-bottom: 0.4rem; */
}
.date_topWrap {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding: 0.4rem 0.2rem 0;
  z-index: 999;
  background-color: #f6f6f6;
  box-sizing: border-box;
}
.date_top {
  width: 100%;
  /* background-color: #fff; */
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.date_top ul {
  display: flex;
  width: 6.34rem;
  overflow-x: scroll;
  overflow-y: hidden;
}
.date_top li {
  float: left;
  margin-right: 0.28rem;
}
.date_top li p {
  width: 1.36rem;
  font-size: 0.24rem;
  color: #999;
  line-height: 0.3rem;
  text-align: center;
}
.date_top li p:nth-child(2) {
  margin-top: 0.11rem;
}
.date_top li.active p {
  color: #7ecef4;
}
.icon_right {
  position: absolute;
  right: 0.2rem;
  top: 50%;
  margin-top: -0.14rem;
  width: 0.56rem;
  height: 0.52em;
  background: url('/static/images/icon/rili.png') no-repeat center/cover;
}
.milde_container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
}
.date_left {
  position: absolute;
  left: 0;
  top: 0;
  width: 32px;
  height: 300px;
  overflow: scroll;
  z-index: 3;
  background-color: #f6f6f6;
}
.date_left ul {
  width: 32px;
  height: 300px;
  padding-top: 12px;
}
.date_left li {
  font-size: 12px;
  color: #999;
  line-height: 12px;
  margin-bottom: 14px;
}
.sitename_top {
  position: absolute;
  background-color: #f6f6f6;
  top: 0;
  left: 0px;
  padding-left: 33px;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  overflow: scroll;
}
.sitename_top ul {
  display: flex;
  height: 20px;
}
.sitename_top li {
  width: 57px;
  font-size: 12px;
  color: #999;
  text-align: center;
}
.sitecontent {
  position: absolute;
  right: 0;
  width: 100%;
  height: 300px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.sitecontentWrap {
  display: flex;
  overflow-y: scroll;
  padding-left: 33px;
  padding-top: 20px;
}
.sitecontentWrap ul {
  padding-bottom: 7px;
}
.sitecontent ul li {
  width: 55px;
  height: 24px;
  background-color: #7ecef4;
  font-size: 12px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  margin-right: 2px;
  margin-bottom: 2px;
}
.milde_container::after {
  position: absolute;
  content: '';
  display: block;
  top: 0;
  left: -1px;
  width: 33px;
  height: 11px;
  background-color: #f6f6f6;
  z-index: 3;
}
.left_opcity {
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 300px;
  opacity: 0;
  z-index: 99999;
}
.top_opcity {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 16px;
  opacity: 0;
  z-index: 99999;
}
.legend {
  margin-top: 7px;
}
.legend ul {
  width: 100%;
  display: flex;
  justify-content: center;
}
.legend span {
  display: block;
  width: 42px;
  height: 18px;
  background-color: #e5e5e5;
  border-radius: 4px;
}
.legend li:nth-child(2) span {
  margin: 0 0.4rem;
  background-color: #49bf5d;
}
.legend li:nth-child(3) span {
  background-color: #7ecef4;
}
.legend p {
  font-size: 12px;
  color: #333;
  text-align: center;
  margin-top: 0.14rem;
}
.tishi {
  padding: 5px 0;
  font-size: 12px;
  color: #999;
  text-align: center;
}
.selected {
  height: 50px;
}
.selected ul {
  margin-top: 0.05rem;
  display: flex;
  justify-content: center;
}
.selected li {
  margin: 0 0.2rem;
}
.selected li span {
  display: block;
  width: 55px;
  height: 22px;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 22px;
  background-color: #7ecef4;
  border-radius: 4px;
}
.selected li p {
  font-size: 10px;
  color: #000;
  margin-top: 0.1rem;
  text-align: center;
}
.placeholder {
  color: rgb(153, 153, 153);
  font-size: 16px;
  line-height: 44px;
  text-align: center;
}
.money {
  font-size: 18px;
  font-weight: 700;
  color: #7ecef4;
  text-align: center;
}
.btnBox {
  width: 100%;
  margin-top: 0.1rem;
}
button {
  outline: none;
  border: 0;
  width: 5.9rem;
  font-size: 15px;
  padding: 0.25rem 0;
  color: #fff;
  margin: 0 auto;
  background-color: #7ecef4;
  border-radius: 8px;
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
