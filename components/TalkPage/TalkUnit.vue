<script setup>
import TalkUnitCard from "./TalkUnitCard.vue";

import { useSidebarModel } from "../models/sidebar";
const { toggleSidebarForm, toggleSidebarFormStaff } = useSidebarModel();
</script>

<template>
  <div class="talk-unit">
    <div class="container">
      <div class="talk-unit__inner">
        <div class="talk-unit__heading">Привет! Поговорим?</div>
        <div class="talk-unit__table">
          <TalkUnitCard @click="toggleSidebarForm" title="У меня есть задача" />
          <TalkUnitCard
            @click="toggleSidebarFormStaff"
            title="Хочу к вам в команду"
          />
        </div>
      </div>
    </div>
  </div>
</template>
