<script setup>
import BreadcrumbCustom from "~/components/UI-kit/BreadcrumbCustom.vue";
import SortingBar from "~/components/UI-kit/SortingBar.vue";
import BlogUnitCard from "~/components/BlogPage/BlogUnitCard.vue";
import Pagination from "~/components/UI-kit/Pagination.vue";

const title = "Блог";

const { data: items } = await useAsyncData("blog", () => {
  return $fetch("/api/blog/", { method: "GET" });
});

const categoryCount = items.value.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

const sortingBarItems = [
  { title: `Все ${items.value.length}` },
  { title: `Контекстная реклама ${categoryCount["Контекстная реклама"] || 0}` },
  { title: `SEO ${categoryCount["SEO"] || 0}` },
  { title: `SMM ${categoryCount["SMM"] || 0}` },
  { title: `Разработка ${categoryCount["Разработка"] || 0}` },
  { title: `CRM ${categoryCount["CRM"] || 0}` },
  { title: `Ecommerce ${categoryCount["Ecommerce"] || 0}` },
  {
    title: `Обслуживание и безопасность ${
      categoryCount["Обслуживание и безопасность"] || 0
    }`,
  },
  { title: `HR ${categoryCount["HR"] || 0}` },
  { title: `Маркетинг ${categoryCount["Маркетинг"] || 0}` },
];

const breadcrumbItems = [{ label: `${title}`, route: "/blog" }];
</script>

<template>
  <div class="blog-page">
    <div class="container">
      <div class="blog-page__heading">
        <BreadcrumbCustom :items="breadcrumbItems" />
        <div class="blog-page__title">{{ title }}</div>
        <div class="blog-page__subtitle">
          <span class="custom-standing-purple">Полезный контент</span> для наших
          клиентов, партнёров и коллег
        </div>
        <SortingBar :items="sortingBarItems" />
      </div>
      <ul class="blog-page__table-list">
        <li v-for="(item, index) in items" :key="index">
          <BlogUnitCard
            :title="item.title"
            :urlImage="item.urlImage"
            :date="item.date"
            :category="item.category"
          />
        </li>
      </ul>
      <Pagination />
    </div>
  </div>
</template>
