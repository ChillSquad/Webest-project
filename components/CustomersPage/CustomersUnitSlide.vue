<script setup>
defineProps({
  urlLogo: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="customers-unit-slide">
    <img
      class="customers-unit-slide__customer-logo"
      :src="urlLogo"
      alt="customer logo"
    />
  </div>
</template>
