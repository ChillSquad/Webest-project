<script setup>
import Header from "./components/Header/Header.vue";
import MobileMenu from "./components/Header/MobileMenu.vue";
import Footer from "./components/Footer.vue";
import FirstPage from "./components/FirstPage.vue";
import FeedBack from "./components/Sidebar.vue";
</script>

<template>
  <div>
    <Header />
    <MobileMenu />
    <main>
      <FirstPage />
    </main>
    <Footer />
    <FeedBack />
  </div>
</template>
