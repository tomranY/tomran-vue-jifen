<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item,index in img" :key="index">
        <img
          :src="item"
          alt
          width="1220px"
          height="446px"
        />
      </div>
      
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
export default {
  // 接受HomeView里面的img
  props: ['img'],
  mounted() {
    //挂载时自动执行代码
    var mySwiper = new Swiper(".swiper-container", {
      //自动切换时间
      autoplay: {
        delay: 2000 //1秒切换一次
      },
      //切换效果
      effect: "fade",
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 1200px;
  height: 446px;
}
</style>