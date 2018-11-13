<template>
  <div id="coachScheduling">
    <div class="top_h">
      <h6>王石教练的排期</h6>
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
          <li>11-13</li>
          <li>11-14</li>
          <li>11-15</li>
          <li>11-16</li>
          <li>11-17</li>
          <li>11-18</li>
          <li>11-19</li>
          <li>11-20</li>
          <li>11-21</li>
          <li>11-22</li>
          <li>11-23</li>
          <li>11-24</li>
          <li>11-25</li>
        </ul>
      </div>
      <div class="sitecontent" ref="scroll_top">
        <div class="sitecontentWrap" ref="scroll_left">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
    <div class="btnBox">
      <button>提交约课</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coachScheduling',
  data() {
    return {}
  },
  mounted() {
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
    }
  }
}
</script>

<style scoped>
.top_h {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.2rem 0.2rem;
  background-color: #f6f6f6;
  box-sizing: border-box;
}
h6 {
  font-size: 0.3rem;
  color: #999;
  text-align: center;
  margin-top: 0.2rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #e5e5e5;
}
.milde_container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  margin-top: 1.1rem;
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
  margin-top: 0.3rem;
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
.btnBox {
  width: 100%;
  margin-top: 0.3rem;
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
