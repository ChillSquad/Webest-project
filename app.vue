<script setup>
import Header from "./components/Header/Header.vue";
import MobileMenu from "./components/Header/MobileMenu.vue";
import Footer from "./components/Footer.vue";
import FirstPage from "./components/FirstPage.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import MainSliderCard from "./components/MainSlider/MainSlider.vue";
import CasePage from "./components/CasePage/CasePage.vue";
import AboutCompany from "./components/AboutCompany/AboutCompany.vue";
import TalkPage from "./components/TalkPage/TalkPage.vue";
import BlogPage from "./components/BlogPage/BlogPage.vue";
import CustomersPage from "./components/CustomersPage/CustomersPage.vue";
</script>

<template>
  <div>
    <Header />
    <MobileMenu />
    <main>
      <FirstPage />
      <MainSliderCard />
      <ExpertisePage />
      <CasePage />
      <AboutCompany />
      <BlogPage />
      <CustomersPage />
      <TalkPage />
    </main>
    <Footer />
    <Sidebar />
  </div>
</template>
