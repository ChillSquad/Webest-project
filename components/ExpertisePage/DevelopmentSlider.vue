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

const onTouchStart = () => {
  document
    .querySelector(".development-slider__swiper")
    .classList.add("swiper-grabbing");
};

const onTouchEnd = () => {
  document
    .querySelector(".development-slider__swiper")
    .classList.remove("swiper-grabbing");
};
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
        {{ text.content1 }}
        <span class="custom-standing-yellow">{{ text.yellow }}</span>
        {{ text.content2 }}
        <span class="custom-standing-pink">{{ text.pink }}</span>
        {{ text.content3 }}
      </p>
    </div>

    <swiper
      class="development-slider__swiper"
      @touchStart="onTouchStart"
      @touchEnd="onTouchEnd"
      :loop="false"
      :breakpoints="{
        480: { slidesPerView: 2.98, spaceBetween: 8 },
        400: { slidesPerView: 1.4, spaceBetween: 8 },
        0: { slidesPerView: 1.091, spaceBetween: 8 },
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="development-slider__slide">
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
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.development-slider {
  margin-bottom: var(--unit-margin-y);

  &__swiper {
    cursor: grab;

    &.swiper-grabbing {
      cursor: grabbing;
    }
  }

  &__heading {
    margin-bottom: 100px;
  }

  &__slide {
    height: 680px;
  }

  .split {
    display: flex;

    .development-slider__title {
      max-width: 1030px;
      text-align: start;
    }

    .development-slider__subtitle {
      margin-left: auto;
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

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-40);
    position: relative;
  }

  &__image-title {
    @include font-h6;

    color: #fff;
    position: absolute;
    top: 32px;
    left: 32px;
  }

  &__image-subtitle {
    @include font-text-4;

    color: #fff;
    position: absolute;
    bottom: 32px;
    left: 32px;
  }

  .swiper {
    padding: var(--swiper-padding);
  }

  @media (max-width: 475px) {
    &__heading {
      margin-bottom: 40px;
    }

    &__image-title {
      top: 20px;
      left: 20px;
    }

    &__image-subtitle {
      bottom: 20px;
      left: 20px;
    }

    &__slide {
      height: 368px;
    }

    .split {
      flex-direction: column;
      gap: 20px;

      .development-slider__title {
        max-width: 328px;
      }
    }
  }
}
</style>
