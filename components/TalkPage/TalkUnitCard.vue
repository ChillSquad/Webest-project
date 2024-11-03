<script setup>
import { useIntersectionObserver } from "../models/useIntersectionAnimation";

defineProps({
  title: {
    type: String,
    default: null,
  },
});

const itemAnimation = useIntersectionObserver((entry) => {
  entry.target.classList.add("visible");
});
</script>

<template>
  <div ref="itemAnimation" class="talk-card">
    <div class="talk-card__inner">
      <div class="talk-card__content">
        <p class="talk-card__heading">
          {{ title }}
        </p>
        <span class="icon-arrow-right"></span>
      </div>
    </div>
  </div>
</template>
