<script setup>
import { ref } from "vue";
import ButtonMenu from "./ButtonMenu.vue";
import Contacts from "./Contacts.vue";
import Navigation from "./Navigation.vue";

// Импортируем изображения
import HeaderLogo from "../../public/images/header-logo.png";
import HeaderLogoMobile from "../../public/images/header-logo-mobile.png";

// Создаем реактивное состояние для адаптивного отображения
const isAdaptiveActive = ref(false);

const toggleAdaptive = (isActive) => {
  isAdaptiveActive.value = isActive;
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div
        class="header__inner"
        :style="{
          backgroundColor: isAdaptiveActive ? '#00030905' : '#ffffff26',
        }"
      >
        <div class="header__logo">
          <a href="#" class="header__logo-picture">
            <img
              :src="isAdaptiveActive ? HeaderLogoMobile : HeaderLogo"
              alt="header-logo"
            />
          </a>

          <div
            class="header__logo-text"
            :style="{ color: isAdaptiveActive ? '#075BF7' : '#fff' }"
          >
            <span
              class="header__logo-line"
              :style="{
                backgroundColor: isAdaptiveActive ? '#075BF7' : '#fff',
              }"
            ></span>
            <p>цифровое решение</p>
          </div>
        </div>

        <div class="header__nav">
          <Navigation />
        </div>

        <div class="header__contscts">
          <Contacts phone="+7 (495) 128-22-90" mail="info@webest.ru" />
        </div>
        <ButtonMenu @toggle-adaptive="toggleAdaptive" />
      </div>
    </div>
  </header>
</template>
