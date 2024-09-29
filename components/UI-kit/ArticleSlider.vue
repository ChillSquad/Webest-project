<script setup>
import { ref, computed } from "vue";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const addCustomClasses = (swiper) => {
  const prevButton = swiper.navigation.prevEl;
  const nextButton = swiper.navigation.nextEl;

  if (prevButton) {
    prevButton.classList.add("icon-slide-to-left");
  }
  if (nextButton) {
    nextButton.classList.add("icon-slide-to-right");
  }
};
</script>

<template>
  <div class="article-slider">
    <div class="article-slider__inner">
      <swiper
        :navigation="true"
        :pagination="{ clickable: true }"
        :modules="[Navigation]"
        :loop="false"
        direction="horizontal"
        :breakpoints="{
          0: { slidesPerView: 1 },
        }"
        @slideChange="updateCurrentIndex"
        @init="addCustomClasses"
      >
        <swiper-slide v-for="(image, index) in props.images" :key="index">
          <img
            class="main-slider-card__story-image"
            :src="image.src"
            alt="story image"
          />
        </swiper-slide>
      </swiper>

      <div class="article-slider-bar">
        <div
          class="article-slider-progress"
          :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
        ></div>
      </div>

      <div class="article-slider-pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.article-slider {
  margin-top: 40px;
}

.swiper-button-prev,
.swiper-button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 30px;
  border: 1px solid var(--color-grey-light-span);
  border-radius: 20px;
  background: var(--color-white);
  font-weight: 900;
  text-align: center;
  outline: none;
  cursor: pointer;

  &::after {
    color: var(--color-black);
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    border: 1px solid var(--color-blue);
  }
}

.article-slider-bar {
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  margin-top: 18px;
}

.article-slider-progress {
  height: 100%;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}

.article-slider-pagination {
  margin-top: 8px;
  font-size: 14px;
}

.main-slider-card__story-image {
  width: 100%;
  height: auto;
}

@media (max-width: 360px) {
  .article-slider {
    display: none;
  }
}
</style>
