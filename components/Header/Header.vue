<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import ButtonMenu from "./ButtonMenu.vue";
import Contacts from "./Contacts.vue";
import Navigation from "./Navigation.vue";

import headerLogoWhite from "../../public/images/header-logo.png";
import headerLogoBlue from "../../public/images/header-logo-blue.png";
import headerLogoMobileBlue from "../../public/images/header-logo-mobile-blue.png";
import headerLogoMobileWhite from "../../public/images/header-logo-mobile-white.png";

const isAdaptiveActive = ref(false);
const windowWidth = ref(window ? window.innerWidth : 0);
const logoSrc = ref(headerLogoWhite);

const updateLogoSrc = () => {
  if (windowWidth.value <= 600) {
    logoSrc.value = isAdaptiveActive.value
      ? headerLogoMobileBlue
      : headerLogoMobileWhite;
  } else {
    logoSrc.value = isAdaptiveActive.value ? headerLogoBlue : headerLogoWhite;
  }
};

const toggleAdaptive = (isActive) => {
  isAdaptiveActive.value = isActive;

  toggleSCrollbar(isActive);
  updateLogoSrc();
};

const toggleSCrollbar = (isActive) => {
  document.body.style.overflow = isActive ? "hidden" : "";
};

const updateLogoForScreenSize = () => {
  windowWidth.value = window.innerWidth;

  updateLogoSrc();
};

watch(windowWidth, updateLogoSrc);

onMounted(() => {
  updateLogoForScreenSize();

  window.addEventListener("resize", updateLogoForScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLogoForScreenSize);
});
</script>

<template>
  <div class="header-wrapper">
    <div class="header-container">
      <header class="header">
        <div
          class="header__inner"
          :style="{
            backgroundColor: isAdaptiveActive
              ? 'var(--color-black-transparent)'
              : 'var(--color-grey-transparent)',
          }"
        >
          <div class="header__logo">
            <a href="#" class="header__logo-picture">
              <img :src="logoSrc" alt="header-logo " />
            </a>

            <div
              class="header__logo-text"
              :style="{
                color: isAdaptiveActive
                  ? 'var(--color-blue-header)'
                  : 'var(--color-white)',
              }"
            >
              <span
                class="header__logo-line"
                :style="{
                  backgroundColor: isAdaptiveActive
                    ? 'var(--color-blue-header)'
                    : 'var(--color-white)',
                }"
              ></span>
              <p>цифровое <span>решение</span></p>
            </div>
          </div>

          <div class="header__nav">
            <Navigation />
          </div>

          <div class="header__contscts">
            <Contacts phone="+7 (495) 128-22-90" mail="info@webest.ru" />
          </div>
          <ButtonMenu @toggle-menu="toggleAdaptive" />
        </div>
      </header>
    </div>
  </div>
</template>
