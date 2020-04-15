<template>
 <div>
      <div class="index-left" :class="[{fontw:fontw},{parentcolor:fontwparent}]" @click="pathClick">
            <slot></slot>
       </div>
 </div>
</template>

<script>
export default {
  props:{
    path:String,
    fontw:Boolean,
  },
  methods:{
    pathClick() {
      this.$router.push(this.path)
    },
  },
  computed: {
    fontwparent(){
       
        if(this.path){
          return this.$route.path == this.path && this.$route.path.indexOf(this.path) != -1
        }
    }
  }
}
</script>

<style lang="less">
.index-left{
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
    color: #999;
    background: 0 0;
    text-decoration: none;
    border-top: 0;
    position: relative;
    span:nth-child(1){
      top: 37%;
      position: absolute;
    }
    span:nth-child(2){
       margin: 0 20px;
    }
}
.index-left:hover{
    color: #555555;
    cursor: pointer;
}
.fontw{
   padding: 12px 15px;
   font-weight: 700;
}
.parentcolor{
  color: #555555;
}
</style>