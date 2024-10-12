<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  review: {
    type: Boolean,
    default: false,
  },
});

const currentIndex = ref(0);
const count = computed(() => props.slides.length);

const updateCurrentIndex = (swiper) => {
  currentIndex.value = swiper.activeIndex;
};
</script>

<template>
  <section class="article-slider-mobile">
    <swiper
      v-if="!review"
      :loop="false"
      direction="horizontal"
      :breakpoints="{
        0: { slidesPerView: 1.2, spaceBetween: 4 },
      }"
      @slideChange="updateCurrentIndex"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img
          class="article-slider-mobile__image"
          :src="slide.src"
          alt="story image"
        />
      </swiper-slide>
    </swiper>

    <swiper
      v-if="review"
      :loop="false"
      direction="horizontal"
      :breakpoints="{
        0: { slidesPerView: 1, spaceBetween: 16 },
      }"
      @slideChange="updateCurrentIndex"
    >
      <swiper-slide v-for="(slide, index) in props.slides" :key="index">
        <p class="article-slider-mobile__card-heading">{{ slide.heading }}</p>

        <p class="article-slider-mobile__card-content">
          {{ slide.content }}
        </p>

        <img
          class="article-slider-mobile__card-avatar"
          :src="slide.src"
          alt="story image"
        />
        <p class="article-slider-mobile__card-username">
          {{ slide.username }} <span>{{ slide.occupation }}</span>
        </p>
      </swiper-slide>
    </swiper>

    <div class="container">
      <div class="article-slider-mobile__bar">
        <div
          class="article-slider-mobile__progress"
          :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
        ></div>
      </div>
    </div>

    <div class="article-slider-mobile__pagination">
      0{{ currentIndex + 1 }}-0{{ count }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.article-slider-mobile {
  margin: 40px 0 120px;

  .swiper {
    padding: 0 16px;
  }

  &__bar {
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
    margin-top: 10px;
  }

  &__progress {
    height: 100%;
    background-color: var(--color-blue);
    transition: width 0.3s ease;
  }

  &__pagination {
    margin-top: 8px;
    font-size: 14px;
    padding: 0 16px;
  }

  .swiper-slide,
  &__card-username {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__card-heading {
    font-family: var(--ff-montserrat-bold);
    font-size: 32px;
    line-height: 36.48px;
    margin-bottom: 40px;
  }

  &__card-content {
    width: 100%;
    font-size: 17px;
    line-height: 23.8px;
    text-align: center;
    margin-bottom: 40px;
  }

  &__card-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  &__card-username {
    @include font-text-3;

    margin-bottom: 40px;

    span {
      color: var(--color-dark-blue);
    }
  }

  @media (max-width: 360px) {
    margin: 20px 0 0;

    &__image {
      width: 272px;
      height: 200px;
      object-fit: cover;
      border-radius: var(--border-radius-40);
    }
  }

  @media (min-width: 361px) {
    display: none;
  }
}
</style>
