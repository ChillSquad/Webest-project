<script setup>
import { computed } from "vue";

const { data: customers } = await useAsyncData("customers", () => {
  return $fetch("/api/customers/", { method: "GET" });
});

const customerChunks = computed(() => {
  if (!customers.value || !Array.isArray(customers.value)) {
    return [];
  }
  return [
    customers.value.slice(0, 6),
    customers.value.slice(6, 13),
    customers.value.slice(13, 20),
  ];
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

    <div class="customers-unit__table" v-if="customerChunks.length">
      <template v-for="(customersChunk, index) in customerChunks" :key="index">
        <NuxtMarquee
          :direction="index % 2 === 0 ? 'right' : 'left'"
          :autoFill="true"
          :pauseOnHover="true"
        >
          <ul class="customers-unit__table-list">
            <li v-for="(customer, idx) in customersChunk" :key="idx">
              <div class="customers-unit-slide">
                <img
                  class="customers-unit-slide__customer-logo"
                  :src="customer.urlLogo"
                  alt="customer logo"
                />
              </div>
            </li>
          </ul>
        </NuxtMarquee>
      </template>
    </div>

    <div v-else>
      <p>Загрузка клиентов...</p>
    </div>
  </div>
</template>
