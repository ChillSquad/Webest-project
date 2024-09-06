<script setup>
import CustomersPageSlide from "./CustomersPageSlide.vue";

const { data: customers } = await useAsyncData("customers", () => {
  return $fetch("/api/customers/", { method: "GET" });
});
</script>

<template>
  <div class="customers-page">
    <div class="customers-page__inner">
      <div class="container">
        <div class="customers-page__heading">
          <div class="customers-page__headline">
            <span>клиенты</span> и партнеры
          </div>
          <div class="customers-page__heading-subtitle">
            Познакомьтесь с нашими
            <span class="custom-standing-blue">замечательными</span>
            партнерами и клиентами
          </div>
        </div>
      </div>
      <div class="customers-page__table">
        <NuxtMarquee direction="right">
          <ul class="customers-page__table-list">
            <li v-for="(customer, index) in customers.slice(0, 6)" :key="index">
              <CustomersPageSlide :urlLogo="customer.urlLogo" />
            </li>
          </ul>
        </NuxtMarquee>

        <NuxtMarquee>
          <ul class="customers-page__table-list">
            <li
              v-for="(customer, index) in customers.slice(6, 13)"
              :key="index"
            >
              <CustomersPageSlide :urlLogo="customer.urlLogo" />
            </li>
          </ul>
        </NuxtMarquee>

        <NuxtMarquee direction="right">
          <ul class="customers-page__table-list">
            <li
              v-for="(customer, index) in customers.slice(13, 20)"
              :key="index"
            >
              <CustomersPageSlide :urlLogo="customer.urlLogo" />
            </li>
          </ul>
        </NuxtMarquee>
      </div>
    </div>
  </div>
</template>
