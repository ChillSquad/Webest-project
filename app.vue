<script setup>
import Header from "./components/Header/Header.vue";
import MobileMenu from "./components/Header/MobileMenu.vue";
import Footer from "./components/Footer.vue";
import FirsPage from "./components/FirstPage.vue";
</script>

<template>
  <div class="wrapper">
    <div class="main-header">
      <Header />
    </div>

    <div class="main-mobile">
      <MobileMenu />
    </div>

    <div class="main-first-page">
      <FirsPage />
    </div>

    <div class="main-footer">
      <Footer />
    </div>
  </div>
</template>
