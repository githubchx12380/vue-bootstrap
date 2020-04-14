<template>
  <el-col class="detail"  :md="{span:6}" :sm="{span:24}" :xs="{span:24}">
             <router-link :to="'/detail/' + itemData.chrome_detail_id" target="_blank">
                 <img :src="itemData.chrome_img" alt="">
                 <div :xs="{offset:10}">
                     <p>{{itemData.chrome_name}}</p>
                     <p>{{itemData.chrome_category_title}}</p>
                     <p>{{itemData.date}}</p> 
                 </div>
             </router-link>
   </el-col>
</template>

<script>
export default {
    props:['itemData'],
    methods:{
        routerhref() {
            this.$router.push('/info')
        }
    }
}
</script>

<style lang="less">
    .detail{
            border-radius: .33em;
            padding: 10px;
        >a{
            
            box-shadow: 0 0 10px #dedede;
            padding: 10px;
            display: flex;
            align-items: center;
            >div{
                padding-left: 5px;
                padding-top: 5px;
                flex: 1;
                p:nth-child(1){
                    text-align: center;
                    height: 33px;
                    font-weight: 700;
                    font-size: 13px;
                    color: rgb(136, 136, 136);
                    display: -webkit-box;
                    overflow: hidden;
                    white-space: normal!important;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                p{
                    color: rgb(173, 173, 173);
                    font-size: 12px;
                    margin: 5px 0;
                }
                p:nth-child(2){
                     text-align: center;
                }
                p:nth-child(3){
                     text-align: center;
                }
            }
            img{
                border-radius: 5px;
                width: 100px;
                height: 70px;
            }
        }
    }
    .detail >a:hover{
      box-shadow: 0 0 10px #999;
    }
</style>