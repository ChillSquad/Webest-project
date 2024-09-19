<script setup>
import TitleButton from "../UI-kit/TitleButton.vue";
import CaseUnitCard from "./CaseUnitCard.vue";

const { data: casesData } = await useAsyncData("cases", () => {
  return $fetch("/api/cases/", { method: "GET" });
});
</script>

<template>
  <div class="case-unit">
    <div class="container">
      <div class="case-unit__inner">
        <div class="case-unit__heading">
          <TitleButton title="кейсы" />
        </div>
        <ul class="case-unit__table-list">
          <li
            v-for="(caseItem, index) in casesData"
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
  </div>
</template>
