<script setup>
import Sidebar from "primevue/sidebar";
import FeedbackForm from "./FeedbackForm.vue";
import { useFeedbackFormModel } from "../models/feedback";
import { useSidebarModel } from "../models/sidebar";
import { ref, watch, onMounted, onUnmounted } from "vue";

const { isActive } = useSidebarModel();
const { activeFormStep } = useFeedbackFormModel();

const transitionName = ref("slide-fade-left");

const updateTransitionName = () => {
  if (window.innerWidth <= 1220) {
    transitionName.value = "slide-fade-right";
  } else {
    transitionName.value = "slide-fade-left";
  }
};

onMounted(() => {
  updateTransitionName();
  window.addEventListener("resize", updateTransitionName);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateTransitionName);
});

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
  closeButton() {
    return {
      class: "sidebar-close-button",
    };
  },
  closeIcon() {
    return {
      class: "sidebar-close-icon",
    };
  },
  content() {
    return {
      class: "sidebar-content",
    };
  },
  mask() {
    return {
      class: "sidebar-mask",
    };
  },
  transition() {
    return {
      name: transitionName.value,
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
        <div v-if="activeFormStep === 0" class="sidebar-heading">
          <h4 class="sidebar-heading__headline">расскажите о своей задаче</h4>
          <span>Чтобы мы могли начать работу, необходимо заполнить форму.</span>
          <span>Это займёт немного времени. Погнали!</span>
        </div>
      </template>

      <FeedbackForm />
    </Sidebar>
  </aside>
</template>
