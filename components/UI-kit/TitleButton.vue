<script setup>
const props = defineProps({
  title: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <a href="#" id="title-button-class-management" class="title-button">
    <h2 class="title-button__heading icon-arrow-right">{{ title }}</h2>
  </a>
</template>
