<script setup>
import MainSliderCard from "./MainSliderCard";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const { data: items } = await useAsyncData("slider", () => {
  return $fetch("/api/slider/", { method: "GET" });
});
</script>

<template>
  <div class="main-menu">
    <!-- <div class="container"></div> -->
    <div class="main-menu__inner">
      <swiper
        :slides-per-view="6.5"
        :loop="false"
        direction="horizontal"
        :breakpoints="{
          0: { slidesPerView: 0.5 },
          400: { slidesPerView: 1.5 },
          700: { slidesPerView: 2.5 },
          1000: { slidesPerView: 3.5 },
          1400: { slidesPerView: 4.5 },
          1600: { slidesPerView: 5.5 },
          1800: { slidesPerView: 6.5 },
        }"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <MainSliderCard :title="item.title" :urlImage="item.urlImage" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
