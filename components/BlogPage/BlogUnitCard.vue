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
  <div class="blog-unit-card">
    <div class="blog-unit-card__inner">
      <div class="blog-unit-card__content">
        <p class="blog-unit-card__story-category">
          {{ category }}
        </p>
        <NuxtLink to="/blog/article">
          <img
            class="blog-unit-card__story-image"
            :src="urlImage"
            :alt="urlImage"
          />
        </NuxtLink>
      </div>
      <div class="blog-unit-card__story-description">
        <p class="blog-unit-card__story-date">
          {{ date }}
        </p>
        <p class="blog-unit-card__story-heading">
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>
