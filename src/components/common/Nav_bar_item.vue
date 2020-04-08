<template>
 <div class="nav-bar-items">
    <div v-for="(item,index) in category" :key="index" class="nav-item" @click="NavItemClick(index)" :class="{itembackcolor:current == index&&$route.path == '/category'}">
        <span class="icon-home"></span>
        <span>{{item}}</span>
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
      NavItemClick(index) {
              this.$router.push(this.path)
              this.current = index
              this.$emit('hiddenDrawer',index)
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