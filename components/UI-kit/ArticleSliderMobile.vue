<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed } from "vue";
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
            class="main-slider-card__story-image"
            :src="image.src"
            alt="story image"
          />
        </swiper-slide>
      </swiper>

      <div class="article-slider-mobile-bar">
        <div
          class="article-slider-mobile-progress"
          :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
        ></div>
      </div>

      <div class="article-slider-pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-slider-mobile {
  margin-top: 40px;
}

.article-slider-mobile-bar {
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
}

.article-slider-mobile-progress {
  height: 100%;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}

.article-slider-pagination {
  margin-top: 8px;
  font-size: 14px;
}

@media (min-width: 361px) {
  .article-slider-mobile {
    display: none;
  }
}
</style>
