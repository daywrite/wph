<template>
  <div id="home">
    <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
            <th>标题</th>
            <th width="20%">发布时间</th>
            <th width="10%">作者</th>
            <th width="10%">回复数</th>
            <th width="10%">访问数</th>
        </tr>
        </thead>
        <tbody>
        <tr v-show="!tabelEmpty" v-for="item in dataList">
            <td>{{item.title}}</td>
            <td>{{item.create_at}}</td>
            <td>{{item.author.loginname}}</td>
            <td>{{item.reply_count}}</td>
            <td>{{item.visit_count}}</td>
        </tr>
        </tbody>
    </table>
    </div>
    <Pagination :page-model="pageModel"></Pagination>
  </div>
</template>

<script>
import Pagination from './commom/Pagination'
export default {
  name: 'home',
  data () {
    return {
      allArticle: '',
      dataList: [],
      pageModel: {
        url: 'https://cnodejs.org/api/v1/topics',
        menu: [5, 10, 20]
      }
    }
  },
  computed: {
    tabelEmpty: function () {
      if (this.dataList) {
        return false
      } else {
        return true
      }
    }
  },
  events: {
    refresh: function (e) {
      this.dataList = e
    }
  },
  components: {
    Pagination
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
