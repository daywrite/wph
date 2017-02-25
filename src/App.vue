<template>
  <div id="app">   
    <home></home> 
  </div>
</template>

<script>
import Home from './components/Home'
/* 引入jquery
   import jQuery from 'jquery'
   jQuery('#app').css('background-color', 'red') */
// import $ from 'jquery'

export default {
  components: {
    Home
  },
  ready () {
    console.log('compiled')
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

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
