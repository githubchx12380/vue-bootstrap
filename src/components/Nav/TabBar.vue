<template>
  <div>
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
            <nav-bar-item path="/category" ref="navbaritem" :category="category">
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
  </div>
</template>

<script>
import NavBarParent from '../common/Nav_bar_parent'  
import NavBarItem from '../common/Nav_bar_item'
import Drawer from '../Nav/Drawer'
export default {
    data() {
        return {
            category:[],
        }
    },
    components:{
        NavBarParent,
        NavBarItem,
        Drawer
    },
    methods:{
        currentinit() {
            this.$refs.navbaritem.current = 0
            this.$router.push('/category/' + this.category[0].chrome_category_id)
             this.$route.meta.fenlei = '效率'   
        },
        async categoryData() {
            const res = await this.$http.categoryData()
            this.category = res.data
        },
        
    },
    
    created() {
        this.categoryData()
    }
}
</script>

<style lang="less">

.tab-bar-left{
    height: 616px;
    padding: 10px;
    background-color: white;
    margin: 0px 5px 0 25px;
    border-radius: 15px;
}
</style>