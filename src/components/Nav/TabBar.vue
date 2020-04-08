<template>
  <div>
    <el-row class="rowbox">
        <el-col :span="4" class="tab-bar-left hidden-sm-only hidden-xs-only">
        <div class="grid-content bg-purple">
            <nav-bar-parent :fontw="true" path="/index">
                    <span class="icon-home"></span>
                    <span>首页</span>
            </nav-bar-parent>
            <nav-bar-parent :fontw="true"
             path="/category" @click.native="currentinit">
                    <span class="icon-home"></span>
                    <span>软件</span>
            </nav-bar-parent>
            <nav-bar-item path="/category" ref="navbaritem" :category="['热门','安卓','ios','PC','游戏','办公','影音','购物','安全','美化','有趣','工具']">
            </nav-bar-item>
            <nav-bar-parent :fontw="true"
             path="/jiaocheng">
                    <span class="icon-home"></span>
                    <span>教程</span>
            </nav-bar-parent>
        </div>
        </el-col>
        <el-col class="hidden-md-and-up">
            <drawer></drawer>
        </el-col>
        <el-col :span="19" :xs="{span:24}"  class="row-content">
            <div class="grid-content bg-purple-light">
                <router-view></router-view>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBarParent from '../common/Nav_bar_parent'  
import NavBarItem from '../common/Nav_bar_item'
import Drawer from '../Nav/Drawer'
export default {
    components:{
        NavBarParent,
        NavBarItem,
        Drawer
    },
    methods:{
        currentinit() {
            this.$refs.navbaritem.current = 0
        }
    }
}
</script>

<style lang="less">
.rowbox{
    padding-top: 20px;
    .row-content{
        padding: 0 10px;
    }
}
.tab-bar-left{
    height: 616px;
    padding: 10px;
    background-color: white;
    margin: 0px 5px 0 25px;
    border-radius: 15px;
}
</style>