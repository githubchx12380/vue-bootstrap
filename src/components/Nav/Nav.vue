<template>
 <div>
<el-row class="el-row-nav">
  <el-col :span="12" class="left">
      <div class="grid-content bg-purple">
         <a href="#">
              <h1>
               <img src="https://chrome.zzzmh.cn/img/logo/light_chrome.png" alt="">
               <div>极简软件</div>
              </h1>
         </a>
      </div>
  </el-col>
  <el-col :span="12" class="right">
      <div class="grid-content bg-purple-light">
          <div class="form-nav">
              <input type="text" placeholder="搜索软件" v-model="model.val">
              <button class="icon-search" @click="formNavsubmit"></button>
          </div>
      </div>
      </el-col>
</el-row>


 </div>
</template>
<script>
export default {
    data() {
        return {
            model:{page:0,pagesize:16,val:''}
        }
    },
    methods:{
        async formNavsubmit() {
           if(!this.model.val){
               this.$message({
                   message:'请输入内容'
               })
               return
           }
           const res = await this.$http.inputLike(this.model)
           this.$bus.$emit('inputVal',res.data,this.model.val)
        }
    }
}
</script>

<style lang="less">
.el-row-nav{
    padding: 8px 0 5px 0;
    background-color: #2c3742;
    .left{
        padding-left: 20px;
        a{
            h1{
                display: flex;
                justify-content: center;
               
                color: white;
                font-size: 25px;
                img{
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
    .right > div{
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: center;
        .form-nav{
            position: relative;
            input{ 
                border-radius: 5px;
                padding: 6px 5px 5px 5px;
                background-color: #2c3742;
                border:1px solid white;
                color: white;
            }
            button{
                cursor: pointer;
                position:absolute;
                right: 2px;
                top: 7px;
                background-color: #2c3742;
                border: 0;
                color: white;
            }
            ::-webkit-input-placeholder { /* WebKit browsers */
                color: white;
            }
        }
      
    }
}
</style>