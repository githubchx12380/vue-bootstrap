<template>
  <div v-if="id != ''" class="detail">
       <posi-tion :componen="model.chrome_name"></posi-tion>
   
          <div class="detail-title">
         <p>{{model.chrome_name}}</p>
       <p><span>分类:</span>{{model.chrome_category_title}}<span>发布时间:</span>{{model.date}}</p>

       </div>
       <div class="detail-img">
         <img :src="model.chrome_img" alt="">
       </div>
       
       <div class="detail-url">
          <a :href="model.chrome_url">点击下载</a>
       </div>
          <div class="neir">
       <div class="detail-content">
         <div v-html="model.chrome_content"></div>
       </div>
      </div>
  </div>
</template>

<script>
import posiTion from './categoryChild/position'
export default {
  components:{
    posiTion
  },
  props:['id'],
  data() {
    return {
      model:{}
    }
  },
  methods:{
    async DetailData() {
      const res = await this.$http.detailDatas(this.id)
      this.model = res.data[0]
    }
  },
  created() {
    this.DetailData()
  },
  watch:{
    $route() {
      this.$refs.postion.fenlei = this.model.chrome_name
    }
  }
}
</script>

<style lang="less">
.detail{
  width: 100%;
  background-color: white;

    .detail-title{
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p:nth-child(1){
      padding: 0 10px;
      font-size: 20px;
      color: black;
    }
    p{
      padding: 5px 0;
      font-size: 12px;
      color: #666;
      span{
        color: #999;
        padding: 0 5px 0 15px;
      }
    }
    div{
      background-color: #5cb85c;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
  .detail-img{
 
    display: flex;
    justify-content:center;
    align-items: center;
     img{
      height: 80px;
      border-radius: 10px;
    }
  }
   .detail-url{
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 5px 0;
      a{
        color: #76BDFF;
        font-weight: 700;
        text-decoration: underline;
        
      }
      a:hover{
        color: #ff5e52;
        transition: all 0.5s;
      }
    }
    .neir{
    .detail-content{
      padding: 0 30px;
      >div{
        column-count:2;
        
        p{
       
          border-left: 3px solid #f1f3f4;
          padding: 5px 5px 0 40px;
          display: flex;
          flex-direction: column;
         
          img{
            max-width: 100%;
          }
        }
      
      }
    }
}
}
</style>