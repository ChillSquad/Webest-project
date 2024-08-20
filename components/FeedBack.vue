<script setup>
import Sidebar from "primevue/sidebar";
import { useFeedbackModel } from "./models/feedback";

const { isActive } = useFeedbackModel();

const sidebarPT = {
  root(options) {
    console.log(options.state);

    return {
      class: "custom-sidebar",
    };
  },
  header() {
    return {
      class: "header",
    };
  },
  transition() {
    return {
      name: "fade",
    };
  },
};
</script>

<template>
  <Sidebar v-model:visible="isActive" :pt="sidebarPT" header="ЗДарова">
    <template v-slot:header="props"> asfgmbaskgjasjgnsang </template>

    <h2>hello</h2>
  </Sidebar>
</template>
