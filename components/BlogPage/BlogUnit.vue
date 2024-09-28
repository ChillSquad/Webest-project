<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";
import Button from "primevue/button";
import TitleButton from "../UI-kit/TitleButton.vue";
import BlogUnitCard from "./BlogUnitCard.vue";
import CaseUnitCard from "../CasePage/CaseUnitCard.vue";

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

  swiperInstance.on("slideChange", () => {
    isBeginning.value = swiperInstance.isBeginning;
    isEnd.value = swiperInstance.isEnd;
  });
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
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="blog-unit">
    <div class="blog-unit__inner">
      <div class="container">
        <div class="blog-unit__heading">
          <TitleButton :title="title" :route="route" />

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
        :loop="false"
        direction="horizontal"
        :modules="[Navigation]"
        :breakpoints="{
          400: { slidesPerView: 2, spaceBetween: 8 },
          0: { slidesPerView: 1.1, spaceBetween: 8 },
        }"
      >
        <swiper-slide
          v-if="!article"
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
          v-if="article"
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
            :article="article"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
