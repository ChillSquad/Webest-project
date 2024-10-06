<script setup>
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/vue";

defineProps({
  images: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  subtitle: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <section class="development-slider">
    <div
      :class="['development-slider__heading', 'container', { split: subtitle }]"
    >
      <p class="development-slider__title">{{ title }}</p>
      <p
        class="development-slider__subtitle"
        v-for="(text, index) in subtitle"
        :key="index"
      >
        <span class="custom-standing-purple">{{ text.purple }}</span>
        {{ text.content }}
      </p>
    </div>

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
    margin-bottom: 100px;
  }

  .split {
    display: flex;

    .development-slider__title {
      max-width: 1030px;
      text-align: start;
    }

    .development-slider__subtitle {
      margin-left: auto;

      .custom-standing-purple {
        @include custom-standing;

        background: var(--color-purple);
        transform: rotate(1.01deg);
      }
    }
  }

  &__title {
    @include font-h2;

    text-align: center;
  }

  &__subtitle {
    @include font-h5;

    max-width: 556px;
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
