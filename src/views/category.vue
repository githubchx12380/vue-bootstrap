<template>
  <div class="content-box">
      <posi-tion @newcontent="newcontent"></posi-tion>
      
  </div>
</template>

<script>
import posiTion from './categoryChild/position'
export default {
    components:{
        posiTion
    },
    computed:{
        routePath() {
            return this.$route.path
        }
    },
    methods:{
        newcontent(index) {
            console.log(index);
            
        }
    }
}
</script>

<style>
.content-box{
    background-color: white;
    padding: 10px 10px;
    border-radius: 15px;
}
</style>