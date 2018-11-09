<template>
  <div id="introduction">
    <div class="top">
      <h4>场馆简介</h4>
      <router-link :to="{name: 'stadiumDetails', query: {cgimgurl,venue_name}}">了解更多</router-link>
    </div>
    <p class="content">{{info}}</p>
  </div>
</template>

<script>
export default {
  name: 'introduction',
  props: ['info', 'cgimgurl', 'venue_name'],
  data() {
    return {}
  }
}
</script>

<style scoped>
#introduction {
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.32rem 0.2rem 0.2rem 0.2rem;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}
.top {
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  margin-bottom: 0.26rem;
}
.top h4 {
  font-size: 0.36rem;
  float: left;
}
.top a {
  float: right;
  color: #7ecef4;
  font-size: 0.32rem;
  text-decoration: none;
}
.content {
  line-height: 0.5rem;
  color: #999;
  font-size: 0.28rem;
  text-indent: 0.3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
