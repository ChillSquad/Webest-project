<script setup>
defineProps({
  items: Array,
  platePosition: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="['case-unit-plate', { position: platePosition }]">
    <div class="case-unit-plate__inner">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="case-unit-plate__box"
      >
        <div class="case-unit-plate__content">
          <span class="case-unit-plate__percent"
            >{{ item.sign }}{{ item.percent }}%</span
          >
          <span class="case-unit-plate__text">{{ item.text }}</span>
        </div>

        <hr class="case-unit-plate__line" v-if="index === 0 || index === 1" />
      </div>
    </div>
  </div>
</template>
