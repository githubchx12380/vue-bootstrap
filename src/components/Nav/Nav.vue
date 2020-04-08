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
              <input type="text" placeholder="搜索软件">
              <button class="icon-search" @click="formNavsubmit"></button>
          </div>
      </div>
      </el-col>
</el-row>


 </div>
</template>
<script>
export default {
    methods:{
        formNavsubmit() {
            console.log(1);
        }
    }
}
</script>

<style lang="less">
.el-row-nav{
    padding: 8px 0 5px 0;
    background-color: #2c3742;
    .left{
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