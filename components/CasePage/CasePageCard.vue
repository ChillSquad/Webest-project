<script setup>
import CasePagePlate from "./CasePagePlate.vue";

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
  <div class="case-page-card">
    <div :class="['case-page-card__inner', { right: wide }]">
      <div class="case-page-card__wrapper">
        <img
          class="case-page-card__case-image"
          :src="urlImage"
          :alt="urlImage"
        />
      </div>
      <p :style="{ color: textColor }" class="case-page-card__case-heading">
        {{ title }}
      </p>
      <CasePagePlate v-if="hasData" :items="moreData" :platePosition="wide" />
    </div>
  </div>
</template>
