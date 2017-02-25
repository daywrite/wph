import Vue from 'vue'
import App from './App'

/* 全局引入jquery */
import $ from 'jquery'
/* 引入bootstrap */
import './assets/css/bootstrap.css'
import './assets/js/bootstrap'
/* 引入vue-router0.7.3版本 */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter({
  linkActiveClass: 'active'
})
router.map({
  '/home': {
    name: 'home',
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/hello': {
    name: 'hello',
    component: function (resolve) {
      require(['./components/Hello'], resolve)
    }
  }
})
router.start(App, '#app')
router.redirect({
  '*': '/home'
})
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
