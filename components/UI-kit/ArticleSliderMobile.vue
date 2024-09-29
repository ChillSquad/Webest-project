<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const count = computed(() => props.images.length);

const updateCurrentIndex = (swiper) => {
  currentIndex.value = swiper.activeIndex;
};
</script>

<template>
  <div class="article-slider-mobile">
    <div class="article-slider-mobile__inner">
      <swiper
        :loop="false"
        direction="horizontal"
        :breakpoints="{
          0: { slidesPerView: 1.2, spaceBetween: 4 },
        }"
        @slideChange="updateCurrentIndex"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
            class="article-slider-mobile__image"
            :src="image.src"
            alt="story image"
          />
        </swiper-slide>
      </swiper>

      <div class="article-slider-mobile__bar">
        <div
          class="article-slider-mobile__progress"
          :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
        ></div>
      </div>

      <div class="article-slider-mobile__pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-slider-mobile {
  margin-top: 40px;

  &__bar {
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
  }

  &__progress {
    height: 100%;
    background-color: var(--color-blue);
    transition: width 0.3s ease;
  }

  &__pagination {
    margin-top: 8px;
    font-size: 14px;
  }

  @media (max-width: 360px) {
    &__image {
      width: 272px;
      height: 200px;
      object-fit: cover;
      border-radius: var(--border-radius-blog);
    }
  }

  @media (min-width: 361px) {
    display: none;
  }
}
</style>
