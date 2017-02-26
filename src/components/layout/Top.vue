<template>
   <!--header导航条-->
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
        <ul class="nav navbar-top-links navbar-right">
          <li @click='change'>
            <a><i class="fa fa-user"></i>欢迎老黄</a>
          </li>        
        </ul>
      </nav>
    </div>
  </nav>
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
