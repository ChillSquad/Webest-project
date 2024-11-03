<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const { data: items } = await useAsyncData("slider", () => {
  return $fetch("/api/slider/", { method: "GET" });
});

const onTouchStart = () => {
  document
    .querySelector(".main-slider__inner")
    .classList.add("swiper-grabbing");
};

const onTouchEnd = () => {
  document
    .querySelector(".main-slider__inner")
    .classList.remove("swiper-grabbing");
};
</script>

<template>
  <div class="main-slider">
    <div class="main-slider__inner">
      <swiper
        @touchStart="onTouchStart"
        @touchEnd="onTouchEnd"
        @sliderMove="onTouchStart"
        @transitionEnd="onTouchEnd"
        :loop="false"
        direction="horizontal"
        :breakpoints="{
          1920: { slidesPerView: 5.98, spaceBetween: 16 },
          1800: { slidesPerView: 5.74, spaceBetween: 8 },
          1693: { slidesPerView: 5.34, spaceBetween: 8 },
          1600: { slidesPerView: 5.76, spaceBetween: 8 },
          1400: { slidesPerView: 5.03, spaceBetween: 8 },
          1200: { slidesPerView: 4.29, spaceBetween: 8 },
          1000: { slidesPerView: 3.56, spaceBetween: 8 },
          900: { slidesPerView: 3.2, spaceBetween: 8 },
          800: { slidesPerView: 2.83, spaceBetween: 8 },
          700: { slidesPerView: 2.46, spaceBetween: 8 },
          650: { slidesPerView: 2.28, spaceBetween: 8 },
          600: { slidesPerView: 2.1, spaceBetween: 8 },
          550: { slidesPerView: 1.92, spaceBetween: 8 },
          500: { slidesPerView: 1.73, spaceBetween: 8 },
          476: { slidesPerView: 1.65, spaceBetween: 8 },
          440: { slidesPerView: 2.87, spaceBetween: 4 },
          400: { slidesPerView: 2.59, spaceBetween: 4 },
          360: { slidesPerView: 2.3, spaceBetween: 4 },
          320: { slidesPerView: 2, spaceBetween: 4 },
          0: { slidesPerView: 1, spaceBetween: 4 },
        }"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="main-slider-card">
            <img
              class="main-slider-card__story-image"
              :src="item.urlImage"
              alt="story image"
            />
            <p class="main-slider-card__story-heading">
              {{ item.title }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
