<script setup>
import TalkPageCard from "./TalkPageCard.vue";
import { useSidebarModel } from "../models/sidebar";

const { toggleSidebarForm, isActive } = useSidebarModel();
</script>

<template>
  <div class="talk-page">
    <div class="container">
      <div class="talk-page__inner">
        <div class="talk-page__heading">Привет! Поговорим?</div>
        <div class="talk-page__table">
          <TalkPageCard @click="toggleSidebarForm" title="У меня есть задача" />
          <TalkPageCard title="Хочу к вам в команду" />
        </div>
      </div>
    </div>
  </div>
</template>
