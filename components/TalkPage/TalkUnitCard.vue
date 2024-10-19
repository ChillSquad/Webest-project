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
        <span class="icon-arrow-right"></span>
      </div>
    </div>
  </div>
</template>
