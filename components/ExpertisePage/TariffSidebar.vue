<script setup>
import { useSidebarModel } from "../models/sidebar";
import { watch } from "vue";
import { useFeedbackFormModelTariff } from "../models/feedbackTariff";

import FeedbackForm from "../Sidebar/FeedbackForm.vue";

import Sidebar from "primevue/sidebar";

const { isActiveTariff } = useSidebarModel();
const { activeFormStepTariff } = useFeedbackFormModelTariff();

const toggleScrollbar = (isActiveTariff) => {
  document.body.style.overflow = isActiveTariff ? "hidden" : "";
  document.body.style.overflowX = "hidden";
};

watch(isActiveTariff, (newVal) => {
  if (newVal) activeFormStepTariff.value = 0;
  toggleScrollbar(newVal);
});

const sidebarPT = {
  root() {
    return { class: "sidebar-custom" };
  },
  header() {
    return { class: "sidebar-header" };
  },
  closeButton() {
    return { class: "sidebar-close-button" };
  },
  closeIcon() {
    return { class: "sidebar-close-icon" };
  },
  content() {
    return { class: "sidebar-content" };
  },
  mask() {
    return { class: "sidebar-mask" };
  },
  transition() {
    return { name: "slide-fade-left" };
  },
};
</script>

<template>
  <aside>
    <Sidebar
      v-model:visible="isActiveTariff"
      :pt="sidebarPT"
      header=""
      position="right"
    >
      <template v-slot:header>
        <Transition name="fade" mode="out-in">
          <div class="sidebar-heading">
            <p class="sidebar-heading__headline">Купить лицензию</p>

            <span>
              Оставьте контакты и мы свяжемся с вами в ближайшее время
            </span>
          </div>
        </Transition>
      </template>

      <FeedbackForm />
    </Sidebar>
  </aside>
</template>
