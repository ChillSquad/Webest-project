<script setup>
import MainSliderCard from "./MainSliderCard";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { useSliderCursor } from "../models/useSliderCursor";
import "swiper/swiper-bundle.css";

const isActive = ref(false);

const { isCursorVisible, circleStyle, handleMouseEnter, handleMouseLeave } =
  useSliderCursor(isActive);

const { data: items } = await useAsyncData("slider", () => {
  return $fetch("/api/slider/", { method: "GET" });
});
</script>

<template>
  <div
    class="custom-component"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="main-slider">
      <div class="main-slider__inner">
        <swiper
          :loop="false"
          direction="horizontal"
          :breakpoints="{
            400: { slidesPerView: 6, spaceBetween: 16 },
            0: { slidesPerView: 2.3, spaceBetween: 4 },
          }"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <MainSliderCard :title="item.title" :urlImage="item.urlImage" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div
      class="slider-cursor"
      :class="{ visible: isCursorVisible && !isActive }"
    >
      <div class="slider-cursor__circle" :style="circleStyle">
        <span class="icon-slide-arrow-left"></span>
        <span class="icon-slide-arrow-right"></span>
      </div>
    </div>
  </div>
</template>
