<script setup>
import Sidebar from "primevue/sidebar";
import FeedbackForm from "./FeedbackForm.vue";

import { useSidebarModel } from "../models/sidebar";
import { watch } from "vue";

const { isActive } = useSidebarModel();

const toggleScrollbar = (isActive) => {
  document.body.style.overflow = isActive ? "hidden" : "";
};

watch(isActive, (newVal) => {
  toggleScrollbar(newVal);
});

const sidebarPT = {
  root() {
    return {
      class: "sidebar-custom",
    };
  },
  header() {
    return {
      class: "sidebar-header",
    };
  },
  closeIcon() {
    return {
      class: "sidebar-close-icon",
    };
  },
  closeButton() {
    return {
      class: "sidebar-close-button",
    };
  },
  content() {
    return {
      class: "sidebar-content",
    };
  },
  mask(options) {
    console.log(options);

    return {
      class: "sidebar-mask",
    };
  },
  transition() {
    return {
      name: "slide-fade",
    };
  },
};
</script>

<template>
  <aside>
    <Sidebar
      v-model:visible="isActive"
      :pt="sidebarPT"
      header=""
      position="right"
    >
      <template v-slot:header>
        <div v-if="isActive" class="sidebar-heading">
          <h4 class="sidebar-heading__headline">расскажите о своей задаче</h4>
          <span>Чтобы мы могли начать работу, необходимо заполнить форму.</span>
          <span>Это займёт немного времени. Погнали!</span>
        </div>
      </template>

      <FeedbackForm />
    </Sidebar>
  </aside>
</template>
