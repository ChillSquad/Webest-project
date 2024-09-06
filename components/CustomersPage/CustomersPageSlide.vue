<script setup>
defineProps({
  urlLogo: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="customers-page-slide">
    <img
      class="customers-page-slide__customer-logo"
      :src="urlLogo"
      alt="customer logo"
    />
  </div>
</template>
