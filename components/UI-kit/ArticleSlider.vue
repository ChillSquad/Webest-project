<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  review: {
    type: Boolean,
    default: false,
  },
  view: {
    type: Boolean,
    default: false,
  },
});

const isSliderReady = ref(false);
const buttonPrev = ref();
const buttonNext = ref();

const currentIndex = ref(0);
const count = computed(() => props.slides.length);
const isMobile = ref(false);

const slidesPerViewSetting = computed(() => (props.view ? 1 : 1.2));

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 475;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  isSliderReady.value = true;
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});

const updateCurrentIndex = (swiper) => {
  currentIndex.value = swiper.activeIndex;
};
</script>

<template>
  <article class="article-slider-unit">
    <p v-if="review" class="article-slider__card-heading">Клиенты о нас</p>

    <div
      v-if="isMobile"
      :class="['article-slider-mobile', { expertise: review }]"
    >
      <swiper
        v-if="!review"
        :loop="false"
        direction="horizontal"
        :breakpoints="{
          0: { slidesPerView: slidesPerViewSetting, spaceBetween: 4 },
        }"
        @slideChange="updateCurrentIndex"
      >
        <swiper-slide v-for="(slide, index) in props.slides" :key="index">
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
        :breakpoints="{ 0: { slidesPerView: 1, spaceBetween: 16 } }"
        @slideChange="updateCurrentIndex"
      >
        <swiper-slide v-for="(slide, index) in props.slides" :key="index">
          <p class="article-slider-mobile__card-content">{{ slide.content }}</p>
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
    </div>

    <div v-else :class="['article-slider', { expertise: review }]">
      <swiper
        v-if="isSliderReady"
        :navigation="{
          prevEl: buttonPrev,
          nextEl: buttonNext,
        }"
        :pagination="{ clickable: true }"
        :modules="[Navigation]"
        :loop="false"
        direction="horizontal"
        :breakpoints="{ 0: { slidesPerView: 1 } }"
        @slideChange="updateCurrentIndex"
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
          <p class="article-slider__card-content">{{ slide.content }}</p>
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

      <button class="slide-button icon-slide-to-left" ref="buttonPrev"></button>

      <button
        class="slide-button icon-slide-to-right"
        ref="buttonNext"
      ></button>

      <div class="article-slider__swiper">
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
    </div>
  </article>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.article-slider-unit {
  display: flex;
  flex-direction: column;
}

.expertise {
  margin-top: 0 !important;
}

.article-slider,
.article-slider-mobile {
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

  .swiper-slide,
  &__card-username {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__card-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  &__card-username {
    margin-bottom: 40px;

    span {
      color: var(--color-dark-blue);
    }
  }
}

.article-slider {
  margin-top: 40px;
  position: relative;

  &__bar {
    margin-top: 18px;
  }

  &__card-image {
    width: 100%;
    height: auto;
  }

  &__card-heading {
    @include font-h2;

    margin-bottom: 100px;
    align-self: center;
  }

  &__card-content {
    @include font-h5;

    max-width: 67%;
    margin-bottom: 40px;
  }

  .slide-button {
    background: #fff;
  }

  .icon-slide-to-left {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translate(0%, -50%);
  }

  .icon-slide-to-right {
    z-index: 2;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translate(0%, -50%);
  }

  &__card-username {
    @include font-text-2;
  }

  @media (max-width: 360px) {
    &__card-heading {
      margin-bottom: 40px;
    }
  }
}

.article-slider-mobile {
  margin: 20px 0 0;

  &__bar {
    margin-top: 10px;
  }

  &__pagination {
    padding: 0 16px;
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

  &__card-username {
    @include font-text-3;
  }

  &__image {
    width: 272px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius-40);
  }
}
</style>
