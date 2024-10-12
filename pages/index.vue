<script setup>
import FirstUnit from "../components/FirstPage.vue";
import MainSliderUnit from "../components/MainSliderPage/MainSliderUnit.vue";
import ExpertiseUnit from "../components/ExpertisePage/ExpertiseUnit.vue";
import CaseUnit from "../components/CasePage/CaseUnit.vue";
import AboutCompanyUnit from "../components/AboutCompanyPage/AboutCompanyUnit.vue";
import BlogUnit from "../components/BlogPage/BlogUnit.vue";
import CustomersUnit from "../components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "../components/TalkPage/TalkUnit.vue";
</script>

<template>
  <div class="index-page">
    <FirstUnit />
    <MainSliderUnit />
    <ExpertiseUnit />
    <CaseUnit />
    <AboutCompanyUnit />
    <BlogUnit />
    <CustomersUnit />
    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>
\
<style lang="css" scoped>
.index-page {
  overflow: hidden;
}
</style>
