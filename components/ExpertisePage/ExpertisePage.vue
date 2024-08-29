<script setup>
import TitleButton from "../UI-kit/TitleButton.vue";

import iconDevelopment from "../icons/iconDevelopment.vue";
import iconCRM from "../icons/iconCRM.vue";
import iconMarketing from "../icons/iconMarketing.vue";
import iconMarketplace from "../icons/iconMarketplace.vue";
import iconMobile from "../icons/iconMobile.vue";
import iconOutstaff from "../icons/iconOutstaff.vue";

const iconMap = {
  iconDevelopment,
  iconCRM,
  iconMarketing,
  iconMarketplace,
  iconMobile,
  iconOutstaff,
};

const { data: items } = await useAsyncData("expertise", async () => {
  return await $fetch("/api/expertise/", { method: "GET" });
});
</script>

<template>
  <div class="expertise-page">
    <div class="container">
      <div class="expertise-page__inner">
        <div class="expertise-page__heading">
          <TitleButton title="экспертиза" />
          <div class="expertise-page__heading-subtitle">
            Топ-10 России по eCommerce по версии рейтинга рунета 2022 года.
            <span class="custom-standing-pink">Помогаем</span> клиентам
            <span class="custom-standing-purple">создавать</span> новые и
            <span class="custom-standing-yellow">улучшать</span> существующие
            IT-продукты. Реализовали более 100 проектов.
          </div>
        </div>
        <div class="expertise-page__table">
          <ul class="expertise-page__table-list">
            <li
              v-for="(item, index) in items"
              :key="index"
              :class="['expertise-page__table-item', { tall: item.tall }]"
            >
              <ExpertisePageCard
                :title="item.title"
                :subtitle="item.subtitle"
                :link="item.link"
              >
                <template #icon>
                  <component :is="iconMap[item.icon]" />
                </template>
              </ExpertisePageCard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
