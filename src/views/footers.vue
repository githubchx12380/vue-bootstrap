<template>
  <div class="footer">
      <div class="footer-item">
        <span>沪ICP备18011999号</span>
        <span>沪公网安备31010602005070号</span>
        <span>开发者: @zzzmh</span>
        <span>设计顾问: @csyd</span>
        <span>邮箱: admin@zzzmh.cn</span>
        <span> @Chrome插件英雄榜</span>
        <span>网站推荐:  @极简壁纸</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .footer{
    margin-top:25px;
    padding: 10px 0;
    height: 40px;
    width: 100%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c3742;
    .footer-item{
      width: 70%;
      span{
        font-size: 12px;
        padding: 0 3px;
        color: white;
      }
    }
  }
</style>