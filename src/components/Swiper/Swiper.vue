<template>
  <div>
    <swiper :options="swiperOption" >
      <slot></slot>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev hidden-xs-only" style="outline: none" slot="button-prev" ></div>
    <div class="swiper-button-next hidden-xs-only" style="outline: none" slot="button-next"></div>
    </swiper>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        //自动轮播
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      }
    };
  }
};
</script>
<style>
.swiper-slide img {
  width: 100%;
}
</style>