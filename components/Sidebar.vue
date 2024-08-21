<script setup>
import iconPaperClip from "./icons/iconPaperClip.vue";

import Sidebar from "primevue/sidebar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import { useSidebarModel } from "./models/sidebar";
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
  mask() {
    return {
      class: "sidebar-mask",
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
  <aside>
    <Sidebar
      v-model:visible="isActive"
      :pt="sidebarPT"
      header="Header"
      position="right"
    >
      <template v-slot:header="props">
        <div class="sidebar-headline">
          <h4 class="sidebar-heading">расскажите о своей задаче</h4>
          <span>Чтобы мы могли начать работу, необходимо заполнить форму.</span>
          <span>Это займёт немного времени. Погнали!</span>
        </div>
      </template>

      <div class="sidebar-input-list">
        <div class="sidebar-input">
          <label for="username">Как вас зовут</label>
          <InputText
            class="sidebar-input-field"
            id="username"
            v-model="value"
          />
        </div>

        <div class="sidebar-input">
          <label for="mail">Почта, телефон или мессенджер</label>
          <InputText class="sidebar-input-field" id="mail" v-model="value" />
        </div>

        <div class="sidebar-input">
          <label for="task">Кратко опишите задачу</label>
          <InputText class="sidebar-input-field" id="task" v-model="value" />
        </div>

        <div class="sidebar-input-file">Прикрепить файл <iconPaperClip /></div>
      </div>

      <div class="sidebar-footer">
        <Button label="Оставить заявку" iconPos="right">
          <template v-slot:icon>
            <iconPaperClip />
          </template>
        </Button>
      </div>
    </Sidebar>
  </aside>
</template>
