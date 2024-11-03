<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { useSidebarModel } from "../models/sidebar";

import "swiper/swiper-bundle.css";
import Button from "primevue/button";
import TitleButton from "../UI-kit/TitleButton.vue";
import BlogUnitCard from "./BlogUnitCard.vue";
import CaseUnitCard from "../CasePage/CaseUnitCard.vue";
import BlogSidebar from "./BlogSidebar.vue";

const { toggleSidebarFormBlog } = useSidebarModel();
const { data: items } = await useAsyncData("blog", () => {
  return $fetch("/api/blog/", { method: "GET" });
});

const { data: casesData } = await useAsyncData("cases", () => {
  return $fetch("/api/cases/", { method: "GET" });
});

const swiperRef = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const slideNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const slidePrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

const onSwiperInit = (swiperInstance) => {
  swiperRef.value = swiperInstance;

  isBeginning.value = swiperInstance.isBeginning;
  isEnd.value = swiperInstance.isEnd;
};

const onSlideChange = (swiper) => {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};

defineProps({
  title: {
    type: String,
    default: "наш блог",
  },
  route: {
    type: String,
    default: "/blog",
  },
  article: {
    type: String,
    default: "blog",
  },
  slider: {
    type: Boolean,
    default: false,
  },
  arrow: {
    type: Boolean,
    default: true,
  },
});

const slides = [
  { src: "/images/imageAward1.png" },
  { src: "/images/imageAward2.png" },
  { src: "/images/imageAward3.png" },
  { src: "/images/imageAward1.png" },
  { src: "/images/imageAward2.png" },
  { src: "/images/imageAward3.png" },
  { src: "/images/imageAward1.png" },
  { src: "/images/imageAward2.png" },
  { src: "/images/imageAward3.png" },
];
</script>

<template>
  <div class="blog-unit">
    <div class="blog-unit__inner">
      <div class="container">
        <div class="blog-unit__heading">
          <TitleButton :title="title" :route="route" :arrow="arrow" />

          <div class="blog-unit__slider">
            <Button
              class="slide-button icon-slide-to-left"
              aria-label="Previous Slide"
              @click="slidePrev"
              :disabled="isBeginning"
            />

            <Button
              class="slide-button icon-slide-to-right"
              aria-label="Next Slide"
              @click="slideNext"
              :disabled="isEnd"
            />
          </div>
        </div>
      </div>

      <swiper
        @swiper="onSwiperInit"
        @slide-change="onSlideChange"
        :loop="false"
        direction="horizontal"
        :modules="[Navigation]"
        :breakpoints="{
          1000: { slidesPerView: 2, spaceBetween: 8 },
          700: { slidesPerView: 1.5, spaceBetween: 8 },
          500: { slidesPerView: 1.2, spaceBetween: 8 },
          0: { slidesPerView: 1.1, spaceBetween: 8 },
        }"
      >
        <swiper-slide
          v-if="article === 'blog'"
          v-for="(item, index) in items"
          :key="index"
        >
          <BlogUnitCard
            :title="item.title"
            :urlImage="item.urlImage"
            :date="item.date"
            :category="item.category"
          />
        </swiper-slide>

        <swiper-slide
          v-if="article === 'case'"
          v-for="(caseItem, index) in casesData"
          :key="index"
        >
          <CaseUnitCard
            :urlImage="`/images/imageCase${index + 1}.png`"
            :title="caseItem.title"
            :hasData="caseItem.plate"
            :moreData="caseItem.moreData"
            :textColor="caseItem.textColor"
            :wide="caseItem.wide"
            :slider="slider"
          />
        </swiper-slide>
      </swiper>

      <swiper
        v-if="article === 'development'"
        @swiper="onSwiperInit"
        @slide-change="onSlideChange"
        :loop="false"
        direction="horizontal"
        :modules="[Navigation]"
        :breakpoints="{
          1700: { slidesPerView: 5.2, spaceBetween: 8 },
          1000: { slidesPerView: 3.2, spaceBetween: 8 },
          705: { slidesPerView: 2.5, spaceBetween: 8 },
          400: { slidesPerView: 1.5, spaceBetween: 8 },
          0: { slidesPerView: 1.1, spaceBetween: 8 },
        }"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="award-slid" @click="toggleSidebarFormBlog">
            <img
              class="award-slid__image"
              :src="slide.src"
              alt="Изображение награды"
            />
            <span class="icon-loupe"></span>
          </div>
        </swiper-slide>

        <BlogSidebar :slides="slides" />
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/mixin";

.award-slid {
  min-height: 326px;
  position: relative;
  border: 1px solid var(--color-grey-light-span);
  padding: var(--padding-card);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .award-slid__image {
    max-width: 262px;
    max-height: 262px;
    transition: filter 0.3s ease-in-out;
  }

  .icon-loupe {
    @include flex-center;

    width: 68px;
    height: 68px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-blue);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &:after {
      content: "\004C";
      font-size: 18px;
      color: #fff;
    }
  }

  &:hover {
    .icon-loupe {
      opacity: 1;
    }

    .award-slid__image {
      filter: blur(10px);
    }
  }
}
</style>
