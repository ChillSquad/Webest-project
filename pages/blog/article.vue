<script setup>
import BreadcrumbCustom from "~/components/UI-kit/BreadcrumbCustom.vue";

const breadcrumbItems = [{ label: "Блог", route: "/blog" }];
</script>

<template>
  <div class="blog-article">
    <div class="container">
      <div class="blog-article__heading">
        <BreadcrumbCustom :items="breadcrumbItems" />
        <div class="blog-article__title"></div>
        <div class="blog-article__subtitle"></div>
      </div>
    </div>
  </div>
</template>
