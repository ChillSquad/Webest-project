<script setup>
import { isShowMobileMenu } from "../models/header"; // Импорт состояния видимости
import Navigation from "./Navigation.vue";
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div v-if="isShowMobileMenu">
      <!-- Показываем меню только если isShowMobileMenu = true -->
      <Navigation />
    </div>
  </Transition>
</template>

<style scoped></style>
