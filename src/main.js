import Vue from 'vue'
import App from './App'

/* 全局引入jquery */
import $ from 'jquery'
/* 引入bootstrap */
import './assets/css/bootstrap.css'
import './assets/js/bootstrap'
/* 3-12 引入AdminALT */
import './assets/css/AdminALT.css'
import './assets/css/skin-blue.css'

/* 引入vue-router0.7.3版本 */
import VueRouter from 'vue-router'
/* 引入ajax请求数据 */
import VueResource from 'vue-resource'
/* 引入vuex */
import store from './components/vuex/store'
/* mock模拟数据全局加载 */
import Mock from './mock'
Mock.bootstrap()

Vue.use(VueRouter)
Vue.use(VueResource)

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
  },
  '/vuext': {
    name: 'vuext',
    component: function (resolve) {
      require(['./components/Vuext'], resolve)
    }
  }
})
// router.redirect({
//   '*': '/home'
// })
router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
