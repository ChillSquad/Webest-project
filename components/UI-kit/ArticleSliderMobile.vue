<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/swiper-bundle.css";

const currentIndex = ref(0);
const images = ref([
  { src: "/images/imageBlogArticle5.png" },
  { src: "/images/imageBlogArticle1.png" },
  { src: "/images/imageBlogArticle2.png" },
  { src: "/images/imageBlogArticle5.png" },
  { src: "/images/imageBlogArticle1.png" },
]);

const count = computed(() => images.value.length);
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
          :style="{ width: ((currentIndex + 1) / images.length) * 100 + '%' }"
        ></div>
      </div>

      <div class="article-slider-pagination">
        0{{ currentIndex + 1 }}-0{{ count }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-slider-mobile-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
}

.article-slider-mobile-progress {
  height: 100%;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}

@media (min-width: 361px) {
  .article-slider-mobile {
    display: none;
  }
}
</style>
