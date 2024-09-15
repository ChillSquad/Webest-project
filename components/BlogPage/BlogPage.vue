<script setup>
import { ref } from "vue";
import TitleButton from "../UI-kit/TitleButton.vue";
import Button from "primevue/button";
import BlogPageCard from "./BlogPageCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

const { data: items } = await useAsyncData("blog", () => {
  return $fetch("/api/blog/", { method: "GET" });
});

const swiperRef = ref(null);
const isBeginning = ref(true); // Флаг для состояния начала
const isEnd = ref(false); // Флаг для состояния конца

const slideNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const slidePrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

const onSwiperInit = (swiperInstance) => {
  swiperRef.value = swiperInstance;

  // Обновление состояния при инициализации
  isBeginning.value = swiperInstance.isBeginning;
  isEnd.value = swiperInstance.isEnd;

  // Добавляем слушатели событий для Swiper
  swiperInstance.on("slideChange", () => {
    isBeginning.value = swiperInstance.isBeginning;
    isEnd.value = swiperInstance.isEnd;
  });
};
</script>

<template>
  <div class="blog-page">
    <div class="blog-page__inner">
      <div class="container">
        <div class="blog-page__heading">
          <TitleButton title="наш блог" />

          <div class="blog-page__slider">
            <Button
              class="blog-page__button icon-slide-to-left"
              aria-label="Previous Slide"
              @click="slidePrev"
              :disabled="isBeginning"
            />

            <Button
              class="blog-page__button icon-slide-to-right"
              aria-label="Next Slide"
              @click="slideNext"
              :disabled="isEnd"
            />
          </div>
        </div>
      </div>

      <swiper
        @swiper="onSwiperInit"
        :loop="false"
        direction="horizontal"
        :modules="[Navigation]"
        :breakpoints="{
          400: { slidesPerView: 2, spaceBetween: 8 },
          0: { slidesPerView: 1.1, spaceBetween: 8 },
        }"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <BlogPageCard
            :title="item.title"
            :urlImage="item.urlImage"
            :date="item.date"
            :category="item.category"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
