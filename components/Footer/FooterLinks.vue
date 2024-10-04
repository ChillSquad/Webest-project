<script setup>
const links = defineProps({
  title: String,
  route: String,
  items: Array,
});
</script>

<template>
  <section class="footer__services">
    <p class="footer__services-caption">
      <NuxtLink :to="route">{{ title }}</NuxtLink>
    </p>
    <ul class="footer__services-list">
      <li v-for="(item, index) in items" :key="index">
        <NuxtLink
          :to="item.route"
          :class="{
            'icon-arrow-right-up':
              item.name === 'Академия' || item.name === 'Партнерам',
          }"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
