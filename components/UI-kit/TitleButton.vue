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
  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <NuxtLink :to="route" id="title-button-class-management" class="title-button">
    <p :class="['title-button__heading ', { 'icon-arrow-right': arrow }]">
      {{ title }}
    </p>
  </NuxtLink>
</template>
