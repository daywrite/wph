<template>
  <div class="hello">
    <a class="btn btn-success" @click='increment()'>+</a>
    <a class="btn btn-primary" @click='reduce()'>-</a>
  </div>
</template>

<script>
import { increaseCounter, reduceCounter } from './vuex/actions'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  vuex: {
    actions: {
      increment: increaseCounter,
      reduce: reduceCounter
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
