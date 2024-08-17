<script setup>
import { ref, defineEmits } from "vue";
import { toggleMobileMenu } from "../models/header";

// Локальное состояние для анимации кнопки
const isActive = ref(false);
const emit = defineEmits(["toggle-adaptive"]);

const toggleBurger = () => {
  isActive.value = !isActive.value;
  toggleMobileMenu();
  emit("toggle-adaptive", isActive.value); // уведомляем родителя об изменении состояния
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
