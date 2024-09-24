<script setup>
import CaseUnitPlate from "./CaseUnitPlate.vue";

defineProps({
  urlImage: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  hasData: Boolean,
  moreData: Array,
  textColor: {
    type: String,
    default: "#000",
  },
  wide: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="case-unit-card">
    <div :class="['case-unit-card__inner', { right: wide }]">
      <NuxtLink to="/case/article">
        <img
          :class="['case-unit-card__case-image', { pruning: wide }]"
          :src="urlImage"
          :alt="urlImage"
        />

        <p :style="{ color: textColor }" class="case-unit-card__case-heading">
          {{ title }}
        </p>
      </NuxtLink>

      <CaseUnitPlate v-if="hasData" :items="moreData" :platePosition="wide" />
    </div>
  </div>
</template>
