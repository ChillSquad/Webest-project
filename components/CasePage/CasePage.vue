<script setup>
import TitleButton from "../UI-kit/TitleButton.vue";
import CasePageCard from "./CasePageCard.vue";

const { data: casesData } = await useAsyncData("cases", () => {
  return $fetch("/api/cases/", { method: "GET" });
});
</script>

<template>
  <div class="case-page">
    <div class="container">
      <div class="case-page__inner">
        <div class="case-page__heading">
          <TitleButton title="кейсы" />
        </div>
        <ul class="case-page__table-list">
          <li
            v-for="(caseItem, index) in casesData"
            :key="index"
            :class="['case-page__table-item', { wide: caseItem.wide }]"
          >
            <CasePageCard
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
