<script setup>
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/vue";

const images = [
  {
    src: "/images/imageCaseArticle5.png",
    title: "Интернет-магазины",
    subtitle: "Интернет-магазин «Kamatyres»",
  },
  {
    src: "/images/imageBlogArticle1.png",
    title: "Корпоративные порталы",
    subtitle: "Портал «Личный кабинет застройщиков»",
  },
  {
    src: "/images/imageCase7.png",
    title: "B2B и B2C сервисы",
    subtitle: "Приложение по управлению умным домом «TouchOn»",
  },
  {
    src: "/images/imageCase8.png",
    title: "Oбучающие платформы",
    subtitle: "Образовательная онлайн-платформа «EnglishVeronika»",
  },
];
</script>

<template>
  <div class="development-slider">
    <div class="development-slider__heading">Разрабатываем и развиваем</div>

    <swiper
      :loop="false"
      :breakpoints="{
        400: { slidesPerView: 3, spaceBetween: 8 },
        0: { slidesPerView: 1.3, spaceBetween: 4 },
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img
          class="development-slider__image"
          :src="image.src"
          alt="story image"
        />

        <p class="development-slider__image-title">
          {{ image.title }}
        </p>

        <p class="development-slider__image-subtitle">
          {{ image.subtitle }}
        </p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.development-slider {
  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: 100px;
  }

  .swiper {
    padding: var(--swiper-padding);
  }

  .swiper-slide {
    width: 554px !important;
    height: 680px;
  }

  &__image {
    width: 554px;
    height: 680px;
    object-fit: cover;
    border-radius: 40px;
    position: relative;
  }

  &__image-title {
    @include font-h6;

    color: var(--color-white);
    position: absolute;
    top: 32px;
    left: 32px;
  }

  &__image-subtitle {
    @include font-text-4-1920;

    color: var(--color-white);
    position: absolute;
    bottom: 32px;
    left: 32px;
  }
}
</style>
