<template>
  <div id="app">
    <Top></Top>
    <left><router-view></router-view></left>  
  </div>
</template>

<script>
import Home from './components/Home'
import Top from './components/layout/Top'
import Left from './components/layout/Left'
/* 引入jquery
   import jQuery from 'jquery'
   jQuery('#app').css('background-color', 'red') */
// import $ from 'jquery'
import store from './components/vuex/store'
export default {
  store: store,
  components: {
    Home,
    Top,
    Left
  },
  ready () {
    // console.log('compiled')
    // $('#app').css('background-color', 'red')
  }
}
</script>

<style>
#app {
  /* 定义最外层div定位模式 */
  position: relative;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
