<template>
  <div id="home">
    <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
            <th @click="sortBy">标题<span class="arrow" :class="sortOrderBool ? 'asc' : 'dsc'"></span></th>
            <th width="20%">发布时间</th>
            <th width="10%">作者</th>
            <th width="10%">回复数</th>
            <th width="10%">访问数</th>
            <th width="10%">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-show="!tabelEmpty" v-for="item in dataList">
            <td>{{item.title}}</td>
            <td>{{item.create_at}}</td>
            <td>{{item.author.loginname}}</td>
            <td>{{item.reply_count}}</td>
            <td>{{item.visit_count}}</td>
            <td><button type="button" class="btn btn-danger">删除</button></td>
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
      sortOrderBool: false,
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
  methods: {
    sortBy: function (key) {
      this.sortOrderBool = !this.sortOrderBool
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
.arrow {
 display: inline-block;
 vertical-align: middle;
 width:0; 
 height:0; 
 margin-left: 5px;
 opacity: 0.66;
 /*border-left:4px solid transparent;
 border-right:4px solid transparent;
 border-bottom:4px solid green;*/
}
.arrow.asc {
 border-left: 4px solid transparent;
 border-right: 4px solid transparent;
 border-bottom: 4px solid green;
}
 
.arrow.dsc {
 border-left: 4px solid transparent;
 border-right: 4px solid transparent;
 border-top: 4px solid green;
}
</style>
