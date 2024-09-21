<script setup>
import BreadcrumbCustom from "~/components/UI-kit/BreadcrumbCustom.vue";

const breadcrumbItems = [{ label: "Контакты", route: "/contacts" }];
</script>

<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-page__heading">
        <BreadcrumbCustom :items="breadcrumbItems" />
        <div class="contact-page__title">контакты</div>
      </div>
    </div>
  </div>
</template>
