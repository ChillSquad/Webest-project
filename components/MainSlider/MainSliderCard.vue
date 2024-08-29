<script setup>
defineProps({
  urlImage: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="main-menu-card">
    <div class="main-menu-card__inner">
      <img
        class="main-menu-card__story-image"
        :src="urlImage"
        alt="story image"
      />
      <p class="main-menu-card__story-heading">
        {{ title }}
      </p>
    </div>
  </div>
</template>
