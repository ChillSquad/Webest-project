<script setup>
import Header from "./components/Header/Header.vue";
import MobileMenu from "./components/Header/MobileMenu.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Cookies from "./components/Cookies.vue";
import Widget from "./components/Widget.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <MobileMenu />
    <Cookies />
    <Widget />
    <Sidebar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
