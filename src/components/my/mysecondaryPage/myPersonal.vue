<template>
  <div id="myPersonal">
    <ul>
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>教练：Linda</p>
          <p>课程：足球基础班</p>
          <p>购买次数：<i>30</i></p>
          <p>剩余次数：<i>17</i></p>
          <button>联系教练</button>
          <button>预约课程</button>
        </div>
      </li>
      <li>
        <div class="imgBox_l"><img src="" alt=""></div>
        <div class="content_r">
          <p>私教姓名：Linda</p>
          <p>课程名称：瑜伽30分钟</p>
          <p>购买次数：<i>30</i></p>
          <p>剩余次数：<i>17</i></p>
          <button>联系教练</button>
          <button>预约课程</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myPersonal'
}
</script>

<style scoped>
#myPersonal {
  width: 100%;
}
#myPersonal ul li {
  overflow: hidden;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-radius: 8px;
}
.imgBox_l {
  float: left;
  width: 2.28rem;
  height: 2.28rem;
  background-color: #efefef;
  border-radius: 8px;
}
.content_r {
  position: relative;
  float: right;
  width: 65%;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.content_r p {
  font-size: 0.26rem;
  color: #888;
  margin-bottom: 0.1rem;
}
.content_r p i {
  color: #7ecef4;
  font-style: normal;
}
.content_r button {
  float: left;
  display: block;
  outline: none;
  border: 0;
  font-size: 0.26rem;
  padding: 0.14rem 0.2rem;
  color: #fff;
  background-color: #7ecef4;
  border-radius: 8px;
  margin-top: 0.16rem;
  margin-right: 0.2rem;
}
</style>
