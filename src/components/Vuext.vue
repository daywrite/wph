<template>
  <div id="vuext">
    <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
            <th>标题</th>
            <th width="20%">发布时间</th>
            <th width="10%">作者</th>
            <th width="10%">回复数</th>
            <th width="10%">访问数</th>
            <th width="10%">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td><button type="button" class="btn btn-danger">删除</button></td>
        </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { getUserList } from '../webapi/api'
export default {
  name: 'vuext',
  data () {
    return {
      allArticle: ''
    }
  },
  ready () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      getUserList({}).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
