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
};
</script>

<template>
  <section class="blog-page">
    <div class="blog-page__inner">
      <div class="container">
        <div class="blog-page__heading">
          <TitleButton title="блог" />
          <div class="blog-page__slider">
            <Button
              class="blog-page__button icon-slide-to-left"
              aria-label="Previous Slide"
              @click="slidePrev"
            />
            <Button
              class="blog-page__button icon-slide-to-right"
              aria-label="Next Slide"
              @click="slideNext"
            />
          </div>
        </div>
      </div>
      <swiper
        @swiper="onSwiperInit"
        :loop="false"
        direction="horizontal"
        :slides-per-view="2"
        :modules="[Navigation]"
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
  </section>
</template>
