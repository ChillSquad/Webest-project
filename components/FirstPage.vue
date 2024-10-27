<script setup>
import { useSidebarModel } from "./models/sidebar";
import { useCustomCursor } from "./models/useCustomCursor";
import { ref, onMounted, onBeforeUnmount } from "vue";

const { toggleSidebarForm, isActive } = useSidebarModel();
const {
  isCursorVisible,
  circleStyle,
  textStyle,
  handleMouseEnter,
  handleMouseLeave,
} = useCustomCursor(isActive);

const isScreenSmall = ref(false);

const checkScreenSize = () => {
  isScreenSmall.value = window.innerWidth <= 475;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  document.body.classList.add("first-page-active");
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);

  document.body.classList.remove("first-page-active");
});

const handleSectionClick = () => {
  if (!isScreenSmall.value) {
    toggleSidebarForm();
  }
};
</script>

<template>
  <div
    class="custom-component"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <section @click="handleSectionClick" class="first-page">
      <div class="container">
        <div class="first-page__heading">
          <p class="first-page__heading-caption">создаем <br />и развиваем</p>

          <p class="first-page__heading-paragraph">
            E-commerce проекты, B2B- и B2C-сервисы, мобильные приложения,
            корпоративные сайты для компаний в сфере услуг и производства
          </p>

          <button class="first-page__mobile-button" @click="toggleSidebarForm">
            Оставить <br />
            заявку
          </button>
        </div>
      </div>
    </section>
    <div
      class="custom-cursor"
      :class="{ visible: isCursorVisible && !isActive }"
    >
      <div class="custom-cursor__circle" :style="circleStyle">
        <span class="custom-cursor__circle-span" :style="textStyle">
          Оставить
          <span>заявку</span>
        </span>
      </div>
    </div>
  </div>
</template>
