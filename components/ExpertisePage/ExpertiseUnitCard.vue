<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  subtitle: {
    type: String,
    default: null,
  },
  route: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <NuxtLink :to="route" class="expertise-card">
    <div class="expertise-card__inner">
      <span :class="icon"></span>

      <h6 class="expertise-card__heading">
        {{ title }}
      </h6>

      <p class="expertise-card__subhead">{{ subtitle }}</p>
    </div>
  </NuxtLink>
</template>
