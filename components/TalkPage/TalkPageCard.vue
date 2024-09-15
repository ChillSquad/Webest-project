<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="talk-card">
    <div class="talk-card__inner">
      <div class="talk-card__content">
        <p class="talk-card__heading">
          {{ title }}
        </p>
        <div class="icon-arrow-right"></div>
      </div>
    </div>
  </div>
</template>
