<script setup>
import TitleButton from "../UI-kit/TitleButton.vue";
import ExpertiseUnitCard from "./ExpertiseUnitCard.vue";

const { data: items } = await useAsyncData("expertise", async () => {
  return await $fetch("/api/expertise/", { method: "GET" });
});
</script>

<template>
  <div class="expertise-unit">
    <div class="container">
      <div class="expertise-unit__inner">
        <div class="expertise-unit__heading">
          <TitleButton title="экспертиза" route="/expertise" />
          <div class="expertise-unit__heading-subtitle">
            Топ-10 России по eCommerce по версии рейтинга рунета 2022 года.
            <span class="custom-standing-pink">Помогаем</span> клиентам
            <span class="custom-standing-purple">создавать</span> новые и
            <span class="custom-standing-yellow">улучшать</span> существующие
            IT-продукты. Реализовали более 100 проектов.
          </div>
        </div>
        <div class="expertise-unit__table">
          <ul class="expertise-unit__table-list">
            <li
              v-for="(item, index) in items.slice(0, 6)"
              :key="index"
              :class="['expertise-unit__table-item', { tall: item.tall }]"
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
      </div>
    </div>
  </div>
</template>
