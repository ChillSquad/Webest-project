<script setup>
import TalkPageCard from "./TalkPageCard.vue";
</script>

<template>
  <div class="talk-page">
    <div class="container">
      <div class="talk-page__inner">
        <div class="talk-page__heading">Привет! Поговорим?</div>
        <div class="talk-page__table">
          <TalkPageCard title="У меня есть задача" link="#" />
          <TalkPageCard title="Хочу к вам в команду" link="#" />
        </div>
      </div>
    </div>
  </div>
</template>
