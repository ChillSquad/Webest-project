<script setup>
import BreadcrumbCustom from "~/components/UI-kit/BreadcrumbCustom.vue";
import CaseUnit from "~/components/CasePage/CaseUnit.vue";
import SortingBar from "~/components/UI-kit/SortingBar.vue";
import Pagination from "~/components/UI-kit/Pagination.vue";

const title = "Кейсы";

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

const breadcrumbItems = [{ label: `${title}`, route: "/case" }];
</script>

<template>
  <div class="case-page">
    <div class="container">
      <div class="case-page__heading">
        <BreadcrumbCustom :items="breadcrumbItems" />
        <div class="case-page__title">{{ title }}</div>
        <div class="case-page__subtitle">
          Более <span class="custom-standing-pink">150</span> реализованных
          проектов за 10 лет
        </div>
        <SortingBar :items="sortingBarItems" />
      </div>
    </div>

    <CaseUnit :title="false" :slice="17" />

    <div class="container">
      <Pagination />
    </div>
  </div>
</template>
