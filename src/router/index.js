import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import orders from '@/components/order/order.vue'
import stadiumDetails from '@/components/index/secondaryPage/stadiumDetails.vue'
import ticketsOnline from '@/components/index/secondaryPage/ticketsOnline.vue'
import ticketRecord from '@/components/index/secondaryPage/ticketRecord.vue'
import ticketQrCode from '@/components/index/secondaryPage/ticketQrCode.vue'
import orderDetails from '@/components/index/secondaryPage/orderDetails.vue'
import onlineClass from '@/components/index/secondaryPage/onlineClass.vue'
import classDetails from '@/components/index/secondaryPage/classDetails.vue'
import moreCoach from '@/components/index/secondaryPage/moreCoach.vue'
import coachingCourse from '@/components/index/secondaryPage/coachingCourse.vue'
import courseDetails from '@/components/index/secondaryPage/courseDetails.vue'
import confirmPayment from '@/components/confirmPayment/confirmPayment.vue'
import succeed from '@/components/confirmPayment/succeed.vue'
import orderSite from '@/components/order/order_child/orderSite.vue'
import orderLeague from '@/components/order/order_child/orderLeague.vue'
import orderPersonal from '@/components/order/order_child/orderPersonal.vue'
import purchaseCard from '@/components/purchaseCard/purchaseCard.vue'
import myCentre from '@/components/my/myCentre.vue'
import cardRecharge from '@/components/my/mysecondaryPage/cardRecharge'
import myOrder from '@/components/my/mysecondaryPage/myOrder'
import myOrderSite from '@/components/my/mysecondaryPage/myOrder_children/myOrderSite'
import myOrderLeague from '@/components/my/mysecondaryPage/myOrder_children/myOrderLeague'
import myOrderPersonal from '@/components/my/mysecondaryPage/myOrder_children/myOrderPersonal'
import myPersonal from '@/components/my/mysecondaryPage/myPersonal'
import expenseCalendar from '@/components/my/mysecondaryPage/expenseCalendar'
import leave from '@/components/my/mysecondaryPage/leave'
import fiancoIndex from '@/components/my/mysecondaryPage/fiancoIndex'
import fiancoResult from '@/components/my/mysecondaryPage/fiancoResult'
import fiancoDetails from '@/components/my/mysecondaryPage/fiancoDetails'
import messageBoard from '@/components/my/mysecondaryPage/messageBoard'
import realNameCard from '@/components/realNameCard/realNameCard'
import siteList from '@/components/order/secondaryPage/siteList'
import coachScheduling from '@/components/order/secondaryPage/coachScheduling'
import groupCourseDetails from '@/components/order/secondaryPage/groupCourseDetails'
import login from '@/components/login/login'
import forgetpassword from '@/components/login/forgetpassword'
import register from '@/components/login/register'
import headAccount from '@/components//index/secondaryPage/headAccount'
import personalDetails from '@/components/my/mysecondaryPage/personalDetails'
import club from '@/components/dataOrigin/club'
import branch from '@/components/dataOrigin/branch'
import member from '@/components/dataOrigin/member'
import description from '@/components/bindCard/description'
import selectBindCard from '@/components/bindCard/selectBindCard'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'myactive',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/member', name: 'member', component: member },
    { path: '/club', name: 'club', component: club },
    { path: '/branch', name: 'branch', component: branch },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders,
      children: [
        { path: 'orderSite', name: 'orderSite', component: orderSite },
        { path: 'orderLeague', name: 'orderLeague', component: orderLeague },
        { path: 'orderPersonal', name: 'orderPersonal', component: orderPersonal }
      ]
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder,
      children: [
        { path: 'myOrderSite', name: 'myOrderSite', component: myOrderSite },
        { path: 'myOrderLeague', name: 'myOrderLeague', component: myOrderLeague },
        { path: 'myOrderPersonal', name: 'myOrderPersonal', component: myOrderPersonal }
      ]
    },
    { path: '/stadiumDetails', name: 'stadiumDetails', component: stadiumDetails },
    { path: '/ticketsOnline', name: 'ticketsOnline', component: ticketsOnline },
    { path: '/ticketRecord', name: 'ticketRecord', component: ticketRecord },
    {
      path: '/ticketQrCode',
      name: 'ticketQrCode',
      component: ticketQrCode,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/confirmPayment',
      name: 'confirmPayment',
      component: confirmPayment,
      meta: {
        keepAlive: true
      }
    },
    { path: '/onlineClass', name: 'onlineClass', component: onlineClass },
    {
      path: '/classDetails',
      name: 'classDetails',
      component: classDetails,
      meta: {
        keepAlive: true
      }
    },
    { path: '/moreCoach', name: 'moreCoach', component: moreCoach },
    {
      path: '/coachingCourse',
      name: 'coachingCourse',
      component: coachingCourse,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/courseDetails',
      name: 'courseDetails',
      component: courseDetails,
      meta: {
        keepAlive: true
      }
    },
    { path: '/purchaseCard', name: 'purchaseCard', component: purchaseCard },
    {
      path: '/myCentre',
      name: 'myCentre',
      component: myCentre,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/cardRecharge',
      name: 'cardRecharge',
      component: cardRecharge,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/myPersonal',
      name: 'myPersonal',
      component: myPersonal,
      meta: {
        keepAlive: true
      }
    },
    { path: '/expenseCalendar', name: 'expenseCalendar', component: expenseCalendar },
    { path: '/leave', name: 'leave', component: leave },
    { path: '/fiancoIndex', name: 'fiancoIndex', component: fiancoIndex },
    { path: '/fiancoResult', name: 'fiancoResult', component: fiancoResult },
    { path: '/fiancoDetails', name: 'fiancoDetails', component: fiancoDetails },
    {
      path: '/messageBoard',
      name: 'messageBoard',
      component: messageBoard,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/realNameCard',
      name: 'realNameCard',
      component: realNameCard,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/siteList',
      name: 'siteList',
      component: siteList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: forgetpassword,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/coachScheduling',
      name: 'coachScheduling',
      component: coachScheduling,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/groupCourseDetails',
      name: 'groupCourseDetails',
      component: groupCourseDetails,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: succeed,
      meta: {
        keepAlive: true
      }
    },
    { path: '/headAccount', name: 'headAccount', component: headAccount },
    {
      path: '/personalDetails',
      name: 'personalDetails',
      component: personalDetails,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/description',
      name: 'description',
      component: description,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/selectBindCard',
      name: 'selectBindCard',
      component: selectBindCard,
      meta: {
        keepAlive: true
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
