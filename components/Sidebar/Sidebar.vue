<script setup>
import { useSidebarModel } from "../models/sidebar";
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useFeedbackFormModel } from "../models/feedback";
import { useFeedbackFormModelStaff } from "../models/feedbackStaff";

import Sidebar from "primevue/sidebar";
import FeedbackForm from "./FeedbackForm.vue";

const { isActiveStaff, isActive } = useSidebarModel();
const { activeFormStep } = useFeedbackFormModel();
const { activeFormStepStaff } = useFeedbackFormModelStaff();

const toggleScrollbar = (isActive) => {
  document.body.style.overflow = isActive ? "hidden" : "";
};

watch(isActiveStaff, (newVal) => {
  if (newVal) activeFormStepStaff.value = 0;
  toggleScrollbar(newVal);
});

watch(isActive, (newVal) => {
  if (newVal) activeFormStep.value = 0;
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
      v-model:visible="isActiveStaff"
      :pt="sidebarPT"
      header=""
      position="right"
    >
      <template v-slot:header>
        <Transition name="fade" mode="out-in">
          <div v-if="activeFormStepStaff === 0" class="sidebar-heading">
            <p class="sidebar-heading__headline">Присоединиться к команде</p>

            <span>Мы всегда в поиске скилловых и талантливых коллег!</span>

            <span>Заполняй скорее форму.</span>
          </div>
        </Transition>
      </template>

      <FeedbackForm />
    </Sidebar>

    <Sidebar
      v-model:visible="isActive"
      :pt="sidebarPT"
      header=""
      position="right"
    >
      <template v-slot:header>
        <Transition name="fade" mode="out-in">
          <div v-if="activeFormStep === 0" class="sidebar-heading">
            <p class="sidebar-heading__headline">Расскажите о своей задаче</p>

            <span
              >Чтобы мы могли начать работу, необходимо заполнить форму.
            </span>

            <span>Это займёт немного времени. Погнали!</span>
          </div>
        </Transition>
      </template>

      <FeedbackForm />
    </Sidebar>
  </aside>
</template>
