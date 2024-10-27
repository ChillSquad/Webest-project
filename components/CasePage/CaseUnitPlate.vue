<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  platePosition: {
    type: Boolean,
    default: false,
  },
  pateColor: {
    type: String,
    default: "#000",
  },
});

const plateClasses = computed(() => [
  "case-unit-plate",
  {
    position: props.platePosition,
    white: props.pateColor !== "#000",
  },
]);
</script>

<template>
  <div :class="plateClasses">
    <div class="case-unit-plate__inner">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="case-unit-plate__box"
      >
        <div class="case-unit-plate__content">
          <span class="case-unit-plate__percent">
            {{ item.sign }}{{ item.percent }}%
          </span>
          <span class="case-unit-plate__text">{{ item.text }}</span>
        </div>

        <hr class="case-unit-plate__line" v-if="index === 0 || index === 1" />
      </div>
    </div>
  </div>
</template>
