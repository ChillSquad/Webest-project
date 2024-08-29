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
  link: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <a :href="`${link}`" class="expertise-card">
    <div class="expertise-card__inner">
      <slot class="expertise-card__icon" name="icon"></slot>
      <h6 class="expertise-card__heading">
        {{ title }}
      </h6>
      <p class="expertise-card__subhead">{{ subtitle }}</p>
    </div>
  </a>
</template>
