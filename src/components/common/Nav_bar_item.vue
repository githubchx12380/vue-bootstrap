<template>
 <div class="nav-bar-items">
    <div v-for="(item,index) in category" 
    :key="index" class="nav-item" @click="NavItemClick(index,item.chrome_category_id,item.chrome_category_title)" 
    :class="{itembackcolor:current == index&&$route.path.indexOf('/category') != -1}">
        <span class="icon-home"></span>
        <span>{{item.chrome_category_title}}</span>
    </div>
 </div>
</template>

<script>
export default {
 data() {
     return {
         current:0
     }
 },
 props:{
    category:{
        type:Array,
        default() {
            return []
        }
    },
    path:String
  },
  methods:{
      NavItemClick(index,id,title) {
              this.$router.push(this.path + '/' + id)
              this.$route.meta.fenlei = title    
              this.current = index
              this.$emit('hiddenDrawer')
      }
  },
}
</script>

<style lang="less">
.nav-item{
    cursor: pointer;
    position: relative;
    padding: 8px 0 8px 40px;
    color: #aaa;
    font-size: 14px;
    font-weight: 700;
    span:nth-child(1){
        position: absolute;
        top: 30%;
    }
    span:nth-child(2){
        margin-left: 30px;
    }
}
.nav-item:hover{
    background-color: #efefef;
    border-radius: 5px;
}
.itembackcolor{
    background-color: #efefef;
    border-radius: 5px;
    color: black;
}
</style>