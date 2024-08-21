<script setup>
import { useSidebarModel } from "./models/sidebar";
import { useCustomCursor } from "./models/useCustomCursor";

const { toggleSidebarForm, isActive } = useSidebarModel();
const {
  isCursorVisible,
  circleStyle,
  textStyle,
  handleMouseEnter,
  handleMouseLeave,
} = useCustomCursor(isActive);
</script>

<template>
  <div
    class="custom-component"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="content">
      <div @click="toggleSidebarForm" class="first-page">
        <div class="container">
          <div class="first-page__inner">
            <div class="first-page__heading">
              <h1 class="first-page__heading-caption">
                создаем <span>и развиваем</span>
              </h1>
              <p class="first-page__heading-paragraph">
                E-commerce проекты, B2B- и B2C-сервисы, мобильные приложения,
                корпоративные сайты для компаний в сфере услуг и производства
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="custom-cursor"
      :class="{ visible: isCursorVisible && !isActive }"
    >
      <div class="custom-cursor__circle" :style="circleStyle">
        <span class="custom-cursor__circle-span" :style="textStyle"
          >Оставить <span>заявку</span></span
        >
      </div>
    </div>
  </div>
</template>
