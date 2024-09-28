<script setup>
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import ExpertiseUnitCard from "~/components/ExpertisePage/ExpertiseUnitCard.vue";

const { data: items } = await useAsyncData("expertise", async () => {
  return await $fetch("/api/expertise/", { method: "GET" });
});
</script>

<template>
  <div class="expertise-page">
    <div class="container">
      <div class="expertise-page__heading">
        <div class="expertise-page__title">Услуги</div>
        <div class="expertise-page__subtitle">
          Берём на себя
          <span class="custom-standing-blue">весь спектр</span>
          производственных <span class="custom-standing-pink">работ</span> от
          разработки, до сложных интеграций в рамках поддержки и развития
          интернет-магазина
        </div>
      </div>

      <div class="expertise-page__table">
        <ul class="expertise-page__table-list">
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="['expertise-page__table-item', { wide: item.wide }]"
          >
            <ExpertiseUnitCard
              :title="item.title"
              :subtitle="item.subtitle"
              :route="item.route"
              :icon="item.icon"
            />
          </li>
        </ul>
      </div>

      <TalkUnit />
    </div>
  </div>
</template>
