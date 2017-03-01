<template>
  <div id="vuext">
    <div class="spinner" v-show="loading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <div class="form-group" style="text-align: left">
      <input type="button" class="btn btn-success" value="新增" />
    </div>
    <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
      <thead v-show ="showThead">
        <tr>
            <th>标题</th>
            <th>发布时间</th>
            <th>作者</th>
            <th>回复数</th>
            <th>访问数</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(index,item) in articles">
            <td>{{ item.title }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.replyCount }}</td>
            <td>{{ item.visitCount }}</td>
            <td>
              <button type="button" class="btn btn-success btn-xs">编辑</button>
              <button type="button" class="btn btn-danger btn-xs">删除</button>
            </td>
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
      // 加载
      loading: false,
      articles: []
    }
  },
  compiled () {
    console.log('compiled')
    // this.getUsers()
  },
  ready () {
    this.getUsers()
  },
  computed: {
    showThead: function () {
      return !this.loading
    }
  },
  methods: {
    getUsers () {
      this.loading = true
      getUserList().then((res) => {
        this.loading = false
        this.articles = res.data.articles
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table tr th{
    text-align: center;
  }
  /* loading */
  .spinner {
  position: absolute;
  top:50%;
  left:50%;
  margin: 0px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
 
.spinner > div {
  background-color: #67CF22;
  height: 100%;
  width: 6px;
  display: inline-block;
   
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
