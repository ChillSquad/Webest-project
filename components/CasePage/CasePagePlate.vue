<script setup>
defineProps({
  items: Array,
  platePosition: {
    type: String,
    default: false,
  },
});
</script>

<template>
  <div :class="['case-page-plate', { position: platePosition }]">
    <div class="case-page-plate__inner">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="case-page-plate__box"
      >
        <div class="case-page-plate__content">
          <span class="case-page-plate__percent"
            >{{ item.sign }}{{ item.percent }}%</span
          >
          <span class="case-page-plate__text">{{ item.text }}</span>
        </div>

        <hr class="case-page-plate__line" v-if="index === 0 || index === 1" />
      </div>
    </div>
  </div>
</template>
