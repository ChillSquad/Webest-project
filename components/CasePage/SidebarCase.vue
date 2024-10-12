<script setup>
import CaseUnitInfo from "./CaseUnitInfo.vue";
import { useSidebarModel } from "../models/sidebar";
import { ref, watch } from "vue";

import Sidebar from "primevue/sidebar";

const { isActiveCase } = useSidebarModel();

const transitionName = ref("slide-fade-bottom");

const toggleScrollbar = (isActiveCase) => {
  document.body.style.overflow = isActiveCase ? "hidden" : "";
  document.body.style.overflowX = "hidden";
};

watch(isActiveCase, (newVal) => {
  toggleScrollbar(newVal);
});

const sidebarPT = {
  root() {
    return { class: "sidebar-info-custom" };
  },
  header() {
    return { class: "sidebar-info-header" };
  },
  closeButton() {
    return { class: "sidebar-info-close-button" };
  },
  closeIcon() {
    return { class: "sidebar-info-close-icon" };
  },
  content() {
    return { class: "sidebar-info-content" };
  },
  mask() {
    return { class: "sidebar-info-mask" };
  },
  transition() {
    return { name: transitionName.value };
  },
};

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <aside>
    <Sidebar v-model:visible="isActiveCase" :pt="sidebarPT" position="bottom">
      <CaseUnitInfo :items="items" />
    </Sidebar>
  </aside>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";
.sidebar-info-mask {
  background: rgba(0, 3, 9, 0.2);
  backdrop-filter: blur(0px);
  animation: blur-in 0.4s ease forwards;
}

@keyframes blur-in {
  from {
    backdrop-filter: blur(0px);
  }

  to {
    backdrop-filter: blur(10px);
  }
}

.sidebar-info-custom {
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 100dvw;
  background-color: var(--color-white);
  position: fixed;
}

.sidebar-info-header {
  display: flex;
  padding: 16px;
  gap: 16px;
}

.sidebar-info-heading {
  @include font-text-2;

  display: flex;
  flex-direction: column;

  &__headline {
    @include font-h4;

    margin-bottom: 16px;
  }
}

.sidebar-info-close-button {
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: auto;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: var(--color-blue);
  }
}

.sidebar-info-close-icon {
  width: 15px;
  height: 15px;
}

.sidebar-info-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;

  form {
    height: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
