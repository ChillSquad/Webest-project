<script setup>
import ArticleSlider from "~/components/UI-kit/ArticleSlider.vue";
import ArticleSliderMobile from "~/components/UI-kit/ArticleSliderMobile.vue";
import { useSidebarModel } from "../models/sidebar";
import { ref, watch } from "vue";

import Sidebar from "primevue/sidebar";

const { isActiveBlog } = useSidebarModel();

const transitionName = ref("slide-fade-bottom");

const toggleScrollbar = (isActiveBlog) => {
  document.body.style.overflow = isActiveBlog ? "hidden" : "";
  document.documentElement.style.scrollbarGutter = isActiveBlog
    ? "auto"
    : "stable";
  document.body.style.scrollbarGutter = isActiveBlog ? "auto" : "stable";
  document.body.style.overflowX = "hidden";
};

watch(isActiveBlog, (newVal) => {
  toggleScrollbar(newVal);
});

const sidebarPT = {
  root() {
    return { class: "sidebar-award-custom" };
  },
  header() {
    return { class: "sidebar-award-header" };
  },
  closeButton() {
    return { class: "sidebar-award-close-button" };
  },
  closeIcon() {
    return { class: "sidebar-award-close-icon" };
  },
  content() {
    return { class: "sidebar-award-content" };
  },
  mask() {
    return { class: "sidebar-award-mask" };
  },
  transition() {
    return { name: transitionName.value };
  },
};

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <aside>
    <Sidebar v-model:visible="isActiveBlog" :pt="sidebarPT" position="full">
      <ArticleSlider :slides="slides" />

      <ArticleSliderMobile :slides="slides" />
    </Sidebar>
  </aside>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.sidebar-award-mask {
  background: rgba(0, 3, 9, 0.2);
  backdrop-filter: blur(0px);
  animation: blur-in 0.4s ease forwards;
}

@keyframes blur-in {
  from {
    backdrop-filter: blur(0px);
  }

  to {
    backdrop-filter: blur(20px);
  }
}

.sidebar-award-custom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100dvh;
  width: 100dvw;
  background-color: transparent;
  position: fixed;
}

.sidebar-award-header {
  position: absolute;
  top: 45px;
  right: 45px;
  z-index: 2;
}

.sidebar-award-close-button {
  min-width: 48px;
  height: 48px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: none;
  outline: none;
  margin-left: auto;
  transition: color 0.1s ease-in-out;
  background: #fff;
  cursor: pointer;

  &:hover {
    color: var(--color-blue);
  }
}

.sidebar-award-close-icon {
  width: 15px;
  height: 15px;
}

.sidebar-award-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow-y: scroll;

  form {
    height: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .article-slider__card-image {
    max-width: 612px;
    max-height: 864px;
  }

  .article-slider {
    margin-top: 0;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    align-self: center;
  }

  .swiper-button-prev {
    position: absolute;
    left: 45px;
  }

  .swiper-button-next {
    position: absolute;
    right: 45px;
  }

  .article-slider__bar {
    margin-top: 28px;
    background: #fff;
    width: 612px;
  }

  .article-slider__swiper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .article-slider__pagination {
    width: 612px;
  }
}
</style>
