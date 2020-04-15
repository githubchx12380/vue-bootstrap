<template>
  <li class="item-content">
    <a href=''>
      <img src="https://www.chrome666.com/wp-content/uploads/2020/04/73131106-f07c0b80-403f-11ea-805f-57e2d668d09b-1024x492.jpg" alt />
      <div>
        <div class="content-title">谷歌访问助手_2.3.0</div>
        <div>
          <span>热门工具</span>
          <span>2019-04-12</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {};
</script>

<style lang="less">
.item-content {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  margin-bottom: 7px;
  border-radius: 5px;
  a {
    display: flex;
    img {
      margin-right: 20px;
      width: 65px;
      height: 45px;
      border-radius: 5px;
    }
    > div {
      width: 100%;

      .content-title {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 0;
        line-height: 16px;
        color: #888;
      }
      span {
        padding-right: 5px;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 0;
        line-height: 16px;
        color: #999;
      }
    }
  }
}
.item-content:hover{
box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
}
</style>