<script setup>
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/vue";

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="development-slider">
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
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.development-slider {
  margin-bottom: var(--unit-margin-y);

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
