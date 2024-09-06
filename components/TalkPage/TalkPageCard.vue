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
        <h6 class="talk-card__heading">
          {{ title }}
        </h6>
        <div class="talk-card__arrow icon-arrow-right"></div>
      </div>
    </div>
  </div>
</template>
