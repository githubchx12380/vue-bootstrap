<template>
  <div class="index">
    <el-row>
      <el-col :span="17" :xs="{span:24}">
        <div class="logos">
          <a href="">
            <img src="https://chrome.zzzmh.cn/img/logo/banner_800.jpg" alt="">
          </a>
        </div>
        <index-swiper></index-swiper>
      </el-col>
      <el-col :span="7" :xs="{span:24}" class="index-right">
          <news title="最新收录"></news>  <!-- 最新收录 -->
          <news title="人气最高"></news>  <!-- 最新收录 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import indexSwiper from "./indexChild/indexSwiper";
import news from './indexChild/news'
export default {
  components: {
    indexSwiper,
    news  //最新收录
  }
};
</script>
<style lang="less">
.index {
  padding: 20px 10px;
  overflow: hidden;
  background-color: white;
  border-radius: 15px;
  .logos{
    a{
      width: 100%;
      display: flex;
      justify-content: center;
      img{
        width: 65%;
      }
    }
  }
}
</style>
