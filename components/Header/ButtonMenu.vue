<script setup>
import { isShowMobileMenu, toggleMobileMenu } from "../models/header";

// Локальное состояние для анимации кнопки
const isActive = ref(false);

const toggleBurger = () => {
  isActive.value = !isActive.value;
  toggleMobileMenu(); // Переключаем видимость MobileMenu при нажатии
};
</script>

<template>
  <div class="header__menu-button-container" @click="toggleBurger">
    <button
      class="header__menu-button"
      :class="{ active: isActive }"
      type="button"
      :style="{ backgroundColor: isActive ? 'rgba(255, 255, 255, 0)' : '#fff' }"
    ></button>
  </div>
</template>

<style scoped></style>
