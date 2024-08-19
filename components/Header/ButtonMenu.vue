<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineEmits } from "vue";
import { toggleMobileMenu, isShowMobileMenu } from "../models/header";

const isActive = ref(false);
const emit = defineEmits(["toggle-adaptive"]);

const toggleBurger = () => {
  isActive.value = !isActive.value;
  toggleMobileMenu();
  emit("toggle-adaptive", isActive.value);
};

const windowWidth = ref(window ? window.innerWidth : 0);

const checkWindowSize = () => {
  windowWidth.value = window.innerWidth;
  if (isActive.value && windowWidth.value > 1220) {
    isActive.value = false;
    toggleMobileMenu();
    emit("toggle-adaptive", false);
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
      :style="{ backgroundColor: isActive ? 'rgba(255, 255, 255, 0)' : '#fff' }"
    ></button>
  </div>
</template>
