import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/globel.css'
import Mint from 'mint-ui'
import Axios from 'axios'
import qs from 'qs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Moment from 'moment'
import { Swipe, SwipeItem } from 'vue-swipe'
import store from './store/index'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.filter('convertDate', function(value) {
  return Moment(value).format('YYYY-MM-DD')
})

Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

Vue.use(Mint)
Axios.defaults.baseURL = 'http://192.168.1.180/weixinPay/'
Vue.prototype.$http = Axios
Vue.prototype.qs = qs
Vue.prototype.$moment = Moment
Vue.config.productionTip = false

Axios.interceptors.request.use(config => {
  if (router.match(location).hash === '#/login') {
    Mint.Indicator.open('正在登录...')
    return config
  }
  Mint.Indicator.open('正在加载...')
  return config
})
Axios.interceptors.response.use(
  res => {
    Mint.Indicator.close()
    if (res.data === -1) {
      Mint.Toast({
        message: '身份信息失效，请重新登录',
        position: 'middle',
        duration: 5000
      })
      router.push({ name: 'login' })
      return
    }
    return res
  },
  error => {
    Mint.Indicator.close()
    Mint.Toast({
      message: '网络连接不可用，请稍后重试',
      position: 'middle',
      duration: 5000
    })
    return error
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
