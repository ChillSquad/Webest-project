<script setup>
import { ref, computed } from "vue";

const currentIndex = ref(0);
const images = ref([
  { src: "/images/imageBlogArticle5.png" },
  { src: "/images/imageBlogArticle1.png" },
  { src: "/images/imageBlogArticle2.png" },
  { src: "/images/imageBlogArticle5.png" },
  { src: "/images/imageBlogArticle1.png" },
]);

const count = computed(() => images.value.length);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<template>
  <div class="article-slider">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="['article-slide', { active: index === currentIndex }]"
      :style="{
        transform: `translateX(${(index - currentIndex.value) * 100}%)`,
      }"
    >
      <img
        class="article-slider-image"
        :src="image.src"
        :alt="'Image ' + (index + 1)"
      />
    </div>

    <div class="article-slider-bar">
      <div
        class="article-slider-progress"
        :style="{ width: ((currentIndex + 1) / images.length) * 100 + '%' }"
      ></div>
    </div>

    <Button
      class="slide-button icon-slide-to-left"
      aria-label="Previous Slide"
      @click="prevSlide"
    />

    <Button
      class="slide-button icon-slide-to-right"
      aria-label="Next Slide"
      @click="nextSlide"
    />
  </div>

  <div class="article-slider-pagination">
    0{{ currentIndex + 1 }}-0{{ count }}
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/helpers/fonts-mixin";

.article-slider {
  position: relative;
  width: 100%;
  height: 740px;
  margin: auto;
  overflow: hidden;
  margin-top: 40px;
}

.article-slide {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.article-slide.active {
  opacity: 1;
}

.article-slider-image {
  width: 100%;
  height: auto;
}

.article-slider-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
}

.article-slider-progress {
  height: 100%;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}

.slide-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-white);
}

.icon-slide-to-left {
  left: 10px;
}

.icon-slide-to-right {
  right: 10px;
}

.article-slider-pagination {
  @include font-text-2;

  padding-top: 8px;
  font-weight: 900;
}
</style>
