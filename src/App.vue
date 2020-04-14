<template>
  <div id="app">
    <nav-top></nav-top>  <!-- 顶部nav -->
    <el-row class="rowbox">
       <tab-bar></tab-bar>  <!-- 左侧tabbar -->
       <el-col :span="19" :xs="{span:24}"  class="row-content" >  <!-- 右侧视图 -->
            <div class="grid-content bg-purple-light">
                <router-view></router-view>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import NavTop from './components/Nav/Nav'  //导航
import TabBar from './components/Nav/TabBar'
export default {
  data() {
    return {
      valueinput:[]
    }
  },
  components:{
    NavTop,
    TabBar
  },
}
</script>

<style lang="less">
.rowbox{
    padding-top: 20px;
    .row-content{
        padding: 0 10px;
    }
}
</style>