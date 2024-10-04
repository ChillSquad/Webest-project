<script setup>
import { ref, computed } from "vue";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  <section class="article-slider">
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
        <swiper-slide
          v-if="!review"
          v-for="(slide, index) in props.slides"
          :key="index"
        >
          <img
            class="article-slider__card-image"
            :src="slide.src"
            alt="story image"
          />
        </swiper-slide>

        <swiper-slide
          v-if="review"
          v-for="(slide, index) in props.slides"
          :key="index"
        >
          <p class="article-slider__card-heading">{{ slide.heading }}</p>

          <p class="article-slider__card-content">
            {{ slide.content }}
          </p>

          <img
            class="article-slider__card-avatar"
            :src="slide.src"
            alt="story image"
          />
          <p class="article-slider__card-username">
            {{ slide.username }} <span>{{ slide.occupation }}</span>
          </p>
        </swiper-slide>
      </swiper>

      <div class="article-slider__bar">
        <div
          class="article-slider__progress"
          :style="{ width: ((currentIndex + 1) / count) * 100 + '%' }"
        ></div>
      </div>

      <div class="article-slider__pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.article-slider {
  margin-top: 40px;

  &__bar {
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
    margin-top: 18px;
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

  &__card-image {
    width: 100%;
    height: auto;
  }

  .swiper-slide,
  &__card-username {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__card-heading {
    @include font-h2;

    margin-bottom: 100px;
  }

  &__card-content {
    @include font-h5;

    max-width: 67%;
    margin-bottom: 40px;
  }

  &__card-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  &__card-username {
    @include font-text-1;

    margin-bottom: 40px;

    span {
      color: var(--color-dark-blue);
    }
  }

  @media (max-width: 360px) {
    display: none;
  }
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
</style>
