<script setup>
defineProps({
  urlImage: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  date: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="blog-page-card">
    <div class="blog-page-card__inner">
      <p class="blog-page-card__story-category">
        {{ category }}
      </p>
      <img
        class="blog-page-card__story-image"
        :src="urlImage"
        :alt="urlImage"
      />
      <div class="blog-page-card__story-description">
        <p class="blog-page-card__story-date">
          {{ date }}
        </p>
        <p class="blog-page-card__story-heading">
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>
