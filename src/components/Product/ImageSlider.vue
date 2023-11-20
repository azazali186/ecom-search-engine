<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- ImageSlider.vue -->
<template>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image.url" :alt="image.alt" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { Swiper } from 'vue-awesome-swiper';
  
  defineProps(['images']);  // If you're not using props in your script, you can remove this line
  
  const swiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles for the slider here */
  .swiper-pagination-bullet {
    background-color: #007BFF;
  }
  </style>
  