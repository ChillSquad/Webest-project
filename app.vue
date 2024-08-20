<script setup>
import Header from "./components/Header/Header.vue";
import MobileMenu from "./components/Header/MobileMenu.vue";
import Footer from "./components/Footer.vue";
import FirstPage from "./components/FirstPage.vue";
// import FeedBack from "./components/FeedBack.vue";
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
      <FirstPage />
    </div>

    <div class="main-footer">
      <Footer />
    </div>

    <!-- <FeedBack /> -->
  </div>
</template>
