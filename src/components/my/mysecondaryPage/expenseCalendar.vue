<template>
  <div id="expenseCalendar">
    <ul>
      <li>
        <p><span>消费事项</span> <i>年卡</i></p>
        <p><span>消费类型</span> <i>办卡</i></p>
        <p><span>消费金额</span> <strong>2000元</strong></p>
        <p><span>消费次数</span> <i>1次</i></p>
        <p><span>开始时间</span> <i>2018-07-17 14:24</i></p>
        <p><span>结束时间</span> <i>2018-07-17 16:24</i></p>
      </li>
      <li>
        <p><span>消费事项</span> <i>年卡</i></p>
        <p><span>消费类型</span> <i>办卡</i></p>
        <p><span>消费金额</span> <strong>2000元</strong></p>
        <p><span>消费次数</span> <i>1次</i></p>
        <p><span>开始时间</span> <i>2018-07-17 14:24</i></p>
        <p><span>结束时间</span> <i>2018-07-17 16:24</i></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'expenseCalendar',
  data() {
    return {}
  }
}
</script>

<style scoped>
#expenseCalendar {
  width: 100%;
}
#expenseCalendar li {
  font-size: 0.28rem;
  background-color: #fff;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.2rem;
  border-radius: 8px;
}
#expenseCalendar li p {
  padding: 0.2rem 0;
}
#expenseCalendar li span {
  color: #999;
  margin-right: 0.2rem;
}
#expenseCalendar li i {
  font-style: normal;
  color: #333;
}
</style>
