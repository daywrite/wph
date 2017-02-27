<template>
  <!--左边菜单右边内容-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <li><a v-link="{ path: '/home' }">首页</a></li>
            <li><a v-link="{ path: '/hello' }">欢迎</a></li>
            <li v-for='el in data'><a ><i class="fa fa-home"></i><span class="nav-label">vuex动态改变：{{el.name}}</span></a></li>
            <li><a><i class="fa fa-home"></i>{{countValue}}</a></li>
            <li><a v-link="{ path: '/vuext' }">vuex</a></li>
        </ul>       
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: 'left',
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  store: store,
  vuex: {
    getters: {
      // 获取我们刚刚在store文件中定义的list数组对象
      data: state => state.list,
      // 获取count变量用于显示加减改变的值
      countValue: state => state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 菜单选中颜色 */
ul li .active{
  color:#42b983;
}
/* Hide for mobile, show later */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}
/* Sidebar navigation */
.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  background-color: #428bca;
}
/*
 * Main content
 */
.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
  }
}
</style>
