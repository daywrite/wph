import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化变量
const state = {
  list: [{
    name: 'hello world'
  }],
  count: 0
}

// 定义动作
const mutations = {
  // ajax,更新data
  GETLIST (state, amount) {
    state.list = amount
  },
  INCREASE (state, amount) {
    state.count = state.count + amount
  },
  REDUCE (state, amount) {
    state.count = state.count - amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})