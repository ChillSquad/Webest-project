<script setup>
import Header from "./components/Header/Header.vue";
import MobileMenu from "./components/Header/MobileMenu.vue";
import Cookies from "./components/Cookies.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import SidebarCase from "./components/CasePage/SidebarCase.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <MobileMenu />
    <!-- <Cookies /> -->
    <Sidebar />
    <SidebarCase />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
