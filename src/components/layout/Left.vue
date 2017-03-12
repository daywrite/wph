<template>
  <!--左边菜单右边内容-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
       <ul id="accordion" class="accordion">     
    <li>
        <div class="link" @click="dropd"><i class="glyphicon glyphicon-th"></i>基础数据<i class="glyphicon glyphicon-chevron-up"></i></div>
        <ul class="submenu">
          <li><a v-link="{ path: '/home' }">首页</a></li>
          <li><a v-link="{ path: '/hello' }">欢迎</a></li>
          <li v-for='el in data'><a ><i class="fa fa-home"></i><span class="nav-label">vuex动态改变：{{el.name}}</span></a></li>
          <li><a><i class="fa fa-home"></i>{{countValue}}</a></li>
          <li><a v-link="{ path: '/vuext' }">vuex</a></li>
        </ul>
    </li>
    <li>
        <div class="link" @click="dropd"><i class="glyphicon glyphicon-th"></i>一级分类<i class="glyphicon glyphicon-chevron-up"></i></div>
        <ul class="submenu">
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
        </ul>
    </li>
    <li>
        <div class="link" @click="dropd"><i class="glyphicon glyphicon-th"></i>一级分类<i class="glyphicon glyphicon-chevron-up"></i></div>
        <ul class="submenu">
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
        </ul>
    </li>
    <li>
        <div class="link" @click="dropd"><i class="glyphicon glyphicon-th"></i>一级分类<i class="glyphicon glyphicon-chevron-up"></i></div>
        <ul class="submenu">
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
            <li><a href="http://www.jq22.com">jQuery插件库</a></li>
        </ul>
    </li>
</ul>     
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import store from '../vuex/store'
export default {
  name: 'left',
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    dropd: function (event) {
      $(event.currentTarget).next().slideToggle()
      $(event.currentTarget).parent().toggleClass('open')
      $('#accordion').find('.submenu').not($(event.currentTarget).next()).slideUp().parent().removeClass('open')
    }
  },
  store: store,
  vuex: {
    getters: {
      // 获取我们刚刚在store文件中定义的list数组对象
      data: state => state.list,
      // 获取count变量用于显示加减改变的值
      countValue: state => state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    padding:0;
}
a {
    color: #b63b4d;
    text-decoration: none;
}
h1 {
    color: #FFF;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin-top: 80px;
}

h1 a {
    color: #c12c42;
    font-size: 16px;
}

.accordion {
    width: 100%;
    max-width: 360px;
    background: #FFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.accordion .link {
    cursor: pointer;
    display: block;
    padding: 15px 15px 15px 42px;
    color: #4D4D4D;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid #CCC;
    position: relative;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
}
.accordion li:last-child .link {
    border-bottom: 0;
}
.accordion li i {
    position: absolute;
    top: 16px;
    left: 12px;
    font-size: 18px;
    color: #595959;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
}
.accordion li i.glyphicon-chevron-up {
    right: 12px;
    left: auto;
    font-size: 16px;
}

.accordion li.open .link {
    color: #b63b4d;
}

.accordion li.open i {
    color: #b63b4d;
}
.accordion li.open i.glyphicon-chevron-up {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}

.submenu {
    display: none;
    background: #444359;
    font-size: 14px;
}
.submenu li {
    border-bottom: 1px solid #4b4a5e;
}
.submenu a {
    display: block;
    text-decoration: none;
    color: #d9d9d9;
    padding: 12px;
    padding-left: 42px;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;
}

.submenu a:hover {
    background: #b63b4d;
    color: #FFF;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}

/*
 * Main content
 */
.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    
    /* 右侧内容 */
    overflow: auto;
  }
}
</style>
