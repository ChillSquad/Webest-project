<script setup>
import CustomersUnitSlide from "./CustomersUnitSlide.vue";

const { data: customers } = await useAsyncData("customers", () => {
  return $fetch("/api/customers/", { method: "GET" });
});
</script>

<template>
  <div class="customers-unit">
    <div class="container">
      <div class="customers-unit__heading">
        <div class="customers-unit__headline">
          <span>клиенты</span> и партнеры
        </div>
        <div class="customers-unit__heading-subtitle">
          Познакомьтесь с нашими
          <span class="custom-standing-blue">замечательными</span>
          партнерами и клиентами
        </div>
      </div>
    </div>
    <div class="customers-unit__table">
      <NuxtMarquee direction="right" :autoFill="true">
        <ul class="customers-unit__table-list">
          <li v-for="(customer, index) in customers.slice(0, 6)" :key="index">
            <CustomersUnitSlide :urlLogo="customer.urlLogo" />
          </li>
        </ul>
      </NuxtMarquee>

      <NuxtMarquee :autoFill="true">
        <ul class="customers-unit__table-list">
          <li v-for="(customer, index) in customers.slice(6, 13)" :key="index">
            <CustomersUnitSlide :urlLogo="customer.urlLogo" />
          </li>
        </ul>
      </NuxtMarquee>

      <NuxtMarquee direction="right" :autoFill="true">
        <ul class="customers-unit__table-list">
          <li v-for="(customer, index) in customers.slice(13, 20)" :key="index">
            <CustomersUnitSlide :urlLogo="customer.urlLogo" />
          </li>
        </ul>
      </NuxtMarquee>
    </div>
  </div>
</template>
