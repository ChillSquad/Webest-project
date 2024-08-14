<script setup>
defineProps({
  phone: {
    type: [String, null],
    default: null,
  },
  mail: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <address>
    <a v-if="phone" :href="`tel:${phone}`">{{ phone }}</a>
    <a v-if="mail" :href="`mailto:${mail}`">{{ mail }}</a>
  </address>
</template>
