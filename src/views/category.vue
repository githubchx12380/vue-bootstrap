<template>
  <div class="content-box">
      <posi-tion @newcontent="newcontent" ref="resultIf"></posi-tion> 
    <el-row v-if="model.length">
        <detail-col v-for="(item,index) in model" :key="index" :itemData="item"></detail-col>
    </el-row>
   
   <div class="pagenation">
        <el-pagination
        class="elPage"
         :pager-count="5"
        layout="prev, pager, next"
        @current-change="currentPage"
        :hide-on-single-page='true'
        v-if="currentKeep"
        :total="len * 10">
    </el-pagination>
   </div>
  </div>
</template>

<script>
import posiTion from './categoryChild/position'
import detailCol from './categoryChild/detail_col'
export default {
    props:['valueinput'],
    data() {
        return {
              filters:{page:0,pagesize:16,id:3},
              model:[],
              len:null,
              currentKeep:true,
        }
    },
    components:{
        posiTion,
        detailCol
    },
    methods:{
        newcontent(index) {
            
        },
        currentPage(elementPage) {
            this.filters.page = elementPage - 1  //后台从0开始筛选
            this.viewData()  //点击分页调用函数,发请求
          window.scroll(0, 0)
        },
        async viewData() {  //发送请求,获取数据
          let str = ''
          for(let key in this.filters){
            str +='&' +  key + '=' + this.filters[key]
          }
          str = str.replace('&','?')
          if(this.filters.val != undefined){
            var res = await this.$http.inputLike(this.filters)
          }else{
            var res = await this.$http.viewData(str)
          }
         
          
          this.model = res.data.data
          this.len = res.data.pagelen
        },
        keepAlive() {  //重置组件
            this.currentKeep = false
            this.$nextTick(() => {
                this.currentKeep = true
            })
        }
    },
    watch:{
        $route() {
            this.filters.id = this.$route.params.id  //切换分类发送不同的分类搜索
            this.filters.page = 0    //切换分类再切回来重第一页筛选数据
            delete this.filters.val  //点击分类清除val属性,进入对分类的分页处理
            this.viewData()   //切换分类重新请求数据
            this.keepAlive()   //切换分类重置分页组件
            this.$refs.resultIf.fenlei1 = ''
        }
    },
    created() {
        this.viewData()  //进入页面请求第一页数据
        this.$bus.$on('inputVal',(res,val) => {
            this.model = res.data  //搜索结果的数据
            this.len = res.pagelen   //搜索结果的页数
            this.filters.val = val  //判断filters如果有val 对搜索数组进行分页处理,否则通过分类进行分页处理
            this.keepAlive() //搜索重置分页组件
            this.$refs.resultIf.fenlei1 = 'o'  //面包屑
        })
    }
   
}
</script>

<style lang="less">
.content-box{
    background-color: white;
    padding: 10px 10px;
    border-radius: 15px;
    min-height: 595px;
    .pagenation{
        width: 100%;
        position: relative;
        height: 30px;
        .elPage{
            display: inline-block;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
        }
    }
   
}
</style>