<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { toggleMobileMenu } from "../models/header";

const isActive = ref(false);
const emit = defineEmits(["toggle-menu"]);

const toggleBurger = () => {
  isActive.value = !isActive.value;
  toggleMobileMenu();
  emit("toggle-menu", isActive.value);
};

const windowWidth = ref(window ? window.innerWidth : 0);

const checkWindowSize = () => {
  windowWidth.value = window.innerWidth;
  if (isActive.value && windowWidth.value > 1220) {
    isActive.value = false;
    toggleMobileMenu();
    emit("toggle-menu", false);
  }
};

onMounted(() => {
  window.addEventListener("resize", checkWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkWindowSize);
});
</script>

<template>
  <div class="header__menu-button-container" @click="toggleBurger">
    <button
      class="header__menu-button"
      :class="{ active: isActive }"
      type="button"
      :style="{
        backgroundColor: isActive
          ? 'rgba(255, 255, 255, 0)'
          : 'var(--color-white)',
      }"
    ></button>
  </div>
</template>
