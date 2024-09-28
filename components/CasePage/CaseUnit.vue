<script setup>
import CaseUnitCard from "./CaseUnitCard.vue";
import TitleButton from "../UI-kit/TitleButton.vue";

const { data: casesData } = await useAsyncData("cases", () => {
  return $fetch("/api/cases/", { method: "GET" });
});

defineProps({
  title: {
    type: Boolean,
    default: true,
  },
  slice: {
    type: Number,
    default: 8,
  },
});
</script>

<template>
  <div class="case-unit">
    <div class="container">
      <div v-if="title" class="case-unit__heading">
        <TitleButton title="кейсы" route="/case" />
      </div>
      <ul class="case-unit__table-list">
        <li
          v-for="(caseItem, index) in casesData.slice(0, slice)"
          :key="index"
          :class="['case-unit__table-item', { wide: caseItem.wide }]"
        >
          <CaseUnitCard
            :urlImage="`images/imageCase${index + 1}.png`"
            :title="caseItem.title"
            :hasData="caseItem.plate"
            :moreData="caseItem.moreData"
            :textColor="caseItem.textColor"
            :wide="caseItem.wide"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
