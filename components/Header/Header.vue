<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

import Contacts from "./Contacts.vue";
import ButtonMenu from "./ButtonMenu.vue";
import Navigation from "./Navigation.vue";

const isAdaptiveActive = ref(false);
const windowWidth = ref(0);

const toggleAdaptive = (isActive) => {
  isAdaptiveActive.value = isActive;
  document.body.style.overflow = isActive ? "hidden" : "";
};

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener("resize", updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const router = useRouter();
const isRootRoute = computed(() => router.currentRoute.value.path === "/");
</script>

<template>
  <div class="header-wrapper">
    <div class="header-container">
      <header class="header">
        <div
          :class="[
            'header__inner',
            { first: isRootRoute },
            { second: isAdaptiveActive },
          ]"
        >
          <div class="header__logo">
            <NuxtLink
              to="/"
              class="header__logo-title icon-header-logo"
            ></NuxtLink>

            <div class="header__logo-subtitle">
              <span class="header__logo-line"></span>
              <p class="header__logo-text">цифровые <br />решения</p>
            </div>
          </div>

          <div class="header__nav">
            <Navigation />
          </div>

          <div class="header__contacts">
            <Contacts phone="+7 (495) 128-22-90" mail="info@webest.ru" />
          </div>

          <ButtonMenu @toggle-menu="toggleAdaptive" />
        </div>
      </header>
    </div>
  </div>
</template>
