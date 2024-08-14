<script setup>
import ButtonMenu from "./ButtonMenu.vue";
import MobileMenu from "./MobileMenu.vue"; // Подключаем MobileMenu
import Contacts from "./Contacts.vue";
import Navigation from "./Navigation.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <a href="#" class="header__logo-picture">
            <img src="../../public/images/header-logo.png" alt="header-logo" />
          </a>

          <div class="header__logo-text">
            <span class="header__logo-line"></span>
            <p>цифровое решение</p>
          </div>
        </div>

        <nav class="header__nav">
          <Navigation />
        </nav>

        <div class="header__contscts">
          <Contacts phone="+7 (495) 128-22-90" mail="info@webest.ru" />
        </div>
        <ButtonMenu />
        <MobileMenu />
        <!-- Включаем MobileMenu -->
      </div>
    </div>
  </header>
</template>

<style scoped></style>
