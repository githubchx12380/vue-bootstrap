<template>
      <div class="title">
          <div class="position-content">
            <span><a href="/index">首页</a></span>/
            <span><a :href="routePath">软件</a></span>/
            <span><a href="">热门</a></span>
          </div>
          <div class="new-content">
            <div @click="newTitle(index)"
            :class="{backcolorActive:index == currentChild}"
             v-for="(item,index) in newcontent"
              :key="index">{{item}}</div>
          </div>
      </div>
</template>

<script>
export default {
    data() {
        return {
            newcontent:['推荐','最热','最新'],
            currentChild:0
        }
    },
    computed:{
        routePath() {
            return this.$route.path
        }
    },
    methods:{
        newTitle(index) {
            this.currentChild = index
            this.$emit('newcontent',index)   //取数据使用
        }
    }
}
</script>

<style lang="less">
.title{
    padding: 10px 30px;
    display: flex;
    >div{
        flex: 1;
    }
    .position-content{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #aaa;
        >span{
            padding: 0 .433333rem;
            a{
                color: #337ab7;
            }
        }
    }
    .new-content{
        display: flex;
        justify-content:flex-end;
        .backcolorActive{
            background-color: #337ab7;
            border-radius: 5px;
            color: white;
        }
        >div{       
              font-size: 14px;
              cursor: pointer;
              padding: .491667rem .775rem;
              border-radius: 4px;
              color:#337ab7 ;
              text-align: right;
        }
    }
  }
  
</style>