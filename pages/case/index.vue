<script setup>
import CaseUnit from "~/components/CasePage/CaseUnit.vue";
import SortingBar from "~/components/UI-kit/SortingBar.vue";
import Pagination from "~/components/UI-kit/Pagination.vue";

const { data: casesData } = await useAsyncData("cases", () => {
  return $fetch("/api/cases/", { method: "GET" });
});

const categoryCount = casesData.value.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

const sortingBarItems = [
  { title: `Все ${casesData.value.length}` },
  { title: `Веб-разработка ${categoryCount["Веб-разработка"] || 0}` },
  { title: `Маркетинг ${categoryCount["Маркетинг"] || 0}` },
  { title: `CRM ${categoryCount["CRM"] || 0}` },
];
</script>

<template>
  <div class="case-page">
    <div class="container">
      <div class="case-page__heading">
        <div class="case-page__title">Кейсы</div>
        <div class="case-page__subtitle">
          Более <span class="custom-standing-pink">150</span> реализованных
          проектов за 10 лет
        </div>
      </div>
    </div>

    <SortingBar :items="sortingBarItems" />

    <CaseUnit :title="false" :slice="17" />

    <div class="container">
      <Pagination />
    </div>
  </div>
</template>
