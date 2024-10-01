<template>
  <swiper
    class="my-swiper"
    :slides-per-view="1"
    pagination
    navigation
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    loop="true"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Image Carousel" class="carousel-image" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

defineProps(['images']);
</script>

<style scoped>
.my-swiper {
  height: 40px; /* 设置Swiper高度 */
  width: 50%;   /* 设置Swiper宽度 */
}

.carousel-image {
  width: 50%;  /* 确保图片在Swiper中填充 */
  height: 40px; /* 自适应高度 */
}
</style>
