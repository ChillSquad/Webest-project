<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
});
import iconTitleArrowRight from "../icons/iconTitleArrowRight.vue";
</script>

<template>
  <a :href="`${link}`" class="talk-card">
    <div class="talk-card__inner">
      <div class="talk-card__content">
        <h6 class="talk-card__heading">
          {{ title }}
        </h6>
        <div class="talk-card__arrow">
          <iconTitleArrowRight />
        </div>
      </div>
    </div>
  </a>
</template>
