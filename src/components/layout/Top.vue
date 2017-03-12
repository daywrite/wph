<template>
<header class="main-header">
  <a class="logo"><span class="logo-wph">唯品会</span></a>
  <!--header导航条-->
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <a class="sidebar-toggle"><span class="glyphicon glyphicon-th"></span></a>
    <div class="navbar-custom-menu">
      
    </div>  
  </nav>
</header>
</template>

<script>
import { listsCounter } from '../vuex/actions'
export default {
  name: 'top',
  data () {
    return {
      ab: [{
        name: '小黄',
        ane: '18'
      }]
    }
  },
  methods: {
    change () {
      this.setlist(this.ab)
    }
  },
  vuex: {
    actions: {
      setlist: listsCounter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
