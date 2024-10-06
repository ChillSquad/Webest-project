<script setup>
defineProps({
  title: {
    type: [String, null],
    default: null,
  },
  route: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <NuxtLink :to="route" id="title-button-class-management" class="title-button">
    <p class="title-button__heading icon-arrow-right">{{ title }}</p>
  </NuxtLink>
</template>
