<script setup>
import TalkUnitCard from "./TalkUnitCard.vue";

import { useSidebarModel } from "../models/sidebar";
const { toggleSidebarForm, toggleSidebarFormStaff } = useSidebarModel();

defineProps({
  title: {
    type: String,
    default: "Привет! Поговорим?",
  },
  titleLeft: {
    type: String,
    default: "У меня есть задача",
  },
  titleRight: {
    type: String,
    default: "Хочу к вам в команду",
  },
});
</script>

<template>
  <div class="talk-unit">
    <div class="container">
      <div class="talk-unit__inner">
        <div class="talk-unit__heading">{{ title }}</div>
        <div class="talk-unit__table">
          <TalkUnitCard @click="toggleSidebarForm" :title="titleLeft" />
          <TalkUnitCard @click="toggleSidebarFormStaff" :title="titleRight" />
        </div>
      </div>
    </div>
  </div>
</template>
