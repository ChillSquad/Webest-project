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
    <div @click="toggleSidebarForm" class="first-unit">
      <div class="container">
        <div class="first-unit__heading">
          <h1 class="first-unit__heading-caption">создаем <br />и развиваем</h1>
          <p class="first-unit__heading-paragraph">
            E-commerce проекты, B2B- и B2C-сервисы, мобильные приложения,
            корпоративные сайты для компаний в сфере услуг и производства
          </p>
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
