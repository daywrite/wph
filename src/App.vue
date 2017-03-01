<template>
  <div id="app">
    <top></top>
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
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
