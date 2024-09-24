<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (basePath) => {
  return route.path.startsWith(basePath);
};
</script>

<template>
  <nav>
    <ul class="header-navigation-list">
      <li><a href="#">Услуги</a></li>
      <li>
        <NuxtLink to="/case" :class="{ selected: isActive('/case') }"
          >Кейсы</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/blog" :class="{ selected: isActive('/blog') }"
          >Блог</NuxtLink
        >
      </li>
      <li><a href="#">Компания</a></li>
      <li>
        <NuxtLink to="/contacts" :class="{ selected: isActive('/contacts') }"
          >Контакты</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.selected {
  background: var(--color-white-transparent);
  border-radius: 16px;
}
</style>
