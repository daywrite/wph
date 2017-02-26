<template> 
</template>

<script>
export default {
  props: {
    pageModel: {
      url: String,
      menu: []
    }
  },
  data () {
    return {
      // 初始页
      cur: 1,
      // 请求地址
      url: this.pageModel.url ? this.pageModel.url : '',
      // 请求参数
      param: this.pageModel.param ? this.pageModel.param : {},
      // 请求方法 默认为GET请求
      method: this.pageModel.method ? this.pageModel.method : 'GET',
      // 每页显示数量 默认每页显示10条
      limit: this.pageModel.menu ? this.pageModel.menu[0] : 10,
      // 分页参数 自定义名称
      pageParamName: this.pageModel.pageParamName ? this.pageModel.pageParamName : ['page', 'limit']
    }
  },
  ready () {
    this.getData()
  },
  methods: {
    getData: function () {
      let _this = this
      this.param[this.pageParamName[0]] = this.cur
      this.param[this.pageParamName[1]] = this.limit
      this.$http.get(_this.url, {params: this.param})
      .then(function (response) {
        let ret = response.data
        if (ret.success) {
          this.dataList = ret.data
          _this.$dispatch('refresh', this.dataList)
        }
      }).catch(function (response) {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
