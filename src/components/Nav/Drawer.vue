<template>
    <div>
        <el-radio-group v-model="direction" >
        </el-radio-group>

        <el-button @click="drawer = true" type="info" class="drawerBtn icon-menu" >
        </el-button>
        <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
        ref="drawerSearch"
        size="80%"
        close-on-press-escape>
        <nav-bar-parent @click.native="hiddenDrawer" :fontw="true" path="/"><span class="icon-home"></span><span>首页</span></nav-bar-parent>
            <nav-bar-parent  :fontw="true" path="/category/3" @click.native="hiddenDrawers" ><span class="icon-home"></span><span>软件</span></nav-bar-parent>
            <nav-bar-item @hiddenDrawer="hiddenDrawer" path="/category" ref="navbaritem" :category="category">
            </nav-bar-item>
            <nav-bar-parent @click.native="hiddenDrawer" :fontw="true" path="/jiaocheng"><span class="icon-home"></span><span>教程</span></nav-bar-parent>
        </el-drawer>
    </div>
</template>

<script>
import NavBarParent from '../common/Nav_bar_parent'  
import NavBarItem from '../common/Nav_bar_item'
  export default {
    data() {
      return {
        category:[],
        drawer: false,
        direction: 'ltr',
      };
    },
    components:{
        NavBarParent,
        NavBarItem
    },
    methods: {
      handleClose(done) {
        done();
      },
      currentinit() {
          this.$refs.navbaritem.current = 0
      },
      hiddenDrawer() {
         this.$refs.drawerSearch.handleClose()
        
      },
      hiddenDrawers() {
        
        this.$refs.navbaritem.current = 0
        this.$router.push('/category/' + this.category[0].chrome_category_id)
        this.$route.meta.fenlei = '效率'
        this.$refs.drawerSearch.handleClose()
      },
      async categoryData() {
           const res = await this.$http.categoryData()
           this.category = res.data
      }
    },
    created() {
      this.categoryData()
    }
  };
</script>
<style lang="less">
.drawerBtn{
    position: absolute;
    top: -53px;
    left: 0;
    height: 53px;
    width: 30px;
    outline: none;
    background-color: #2c3742 !important;
    font-size:20px !important;
    border:0 !important;
    padding: 0 0 0 5px !important;
}
</style>