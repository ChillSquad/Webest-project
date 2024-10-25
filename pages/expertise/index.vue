<script setup>
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";

const { data: items } = await useAsyncData("expertisepage", async () => {
  return await $fetch("/api/expertisepage/", { method: "GET" });
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
            class="expertise-page__table-item"
          >
            <NuxtLink :to="item.route" class="expertise-card">
              <div class="expertise-card__inner">
                <span :class="item.icon"></span>

                <p class="expertise-card__heading">
                  {{ item.title }}
                </p>

                <p class="expertise-card__subhead">{{ item.subtitle }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <TalkUnit />
    </div>
  </div>
</template>
