<script setup>
import { useSidebarModel } from "../models/sidebar";
import { watch } from "vue";

import Sidebar from "primevue/sidebar";

const { isActiveTeam } = useSidebarModel();

const toggleScrollbar = (isActiveTeam) => {
  document.body.style.overflow = isActiveTeam ? "hidden" : "";
  document.body.style.overflowX = "hidden";
};

watch(isActiveTeam, (newVal) => {
  toggleScrollbar(newVal);
});

const sidebarPT = {
  root() {
    return { class: "sidebar-custom" };
  },
  header() {
    return { class: "sidebar-header" };
  },
  closeButton() {
    return { class: "sidebar-close-button" };
  },
  closeIcon() {
    return { class: "sidebar-close-icon" };
  },
  content() {
    return { class: "sidebar-content" };
  },
  mask() {
    return { class: "sidebar-mask" };
  },
  transition() {
    return { name: "slide-fade-left" };
  },
};

const content = {
  referralProgram: {
    header: "Реферальная программа",
    title: "Вознаграждение",
    description:
      "Если ты привёл одного сотрудника в нашу команду, то по прошествии испытательного срока своего друга, ты можешь получить любой бонус, предложенный в данном списке:",
    list: [
      "Абонемент в спортивный зал;",
      "Купоны на бесплатную еду (пицца фабрика, кинг суши и т.д.);",
      "Подписка на желаемые сервисы;",
      "Посещение любого заведения города за счёт компании (на двоих);",
      "Курсы повышения квалификации в любой сфере",
    ],
    plate:
      "Если ты привёл второго сотрудника в нашу команду, то по прошествии испытательного срока второго сотрудника, ты получишь денежное вознаграждение в размере 20 000 ₽",
  },
  supportProgram: {
    header: "Окружили поддержкой",
    subHeader:
      "Создаём комфортные условия для своих сотрудников. Всегда открыты к новым идеям и предложениям.",
    title: "Основные пункты программы социальной поддержки:",
    list: [
      "Материальная помощь нуждающимся сотрудникам;",
      "Денежные поощрения и компенсации;",
      "Предоставление дополнительного выходного оплачиваемого дня 31 декабря всем сотрудникам предприятия;",
      "Предоставление 3 (трёх) дополнительных выходных оплачиваемых дней сотруднику компании — отцу ребёнка в связи с выпиской матери и ребёнка из роддома;",
    ],
  },
  rewardProgram: {
    header: "Ввели поощрения для сотрудников",
    subHeader:
      "Создаём комфортные условия для своих сотрудников. Всегда открыты к новым идеям и предложениям.",
    title: "Основные пункты программы поощрения:",
    list: [
      "Повышение ЗП согласно грейдам или ИПР;",
      "Поощрения за хорошие идеи по развитию компании;",
      "Оплата курсов повышения квалификации;",
      "Корпоративная скидка на покупку личной техники — 15%;",
      "Дополнительный выходной в счёт дня рождения сотрудника;",
      "Корпоративные мероприятия;",
    ],
  },
};

defineProps({
  activeItemId: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <aside>
    <Sidebar
      v-model:visible="isActiveTeam"
      :pt="sidebarPT"
      header=""
      position="right"
    >
      <template v-if="activeItemId === 0" v-slot:header>
        <div class="sidebar-heading">
          <p class="sidebar-heading__headline">
            {{ content.referralProgram.header }}
          </p>
        </div>
      </template>
      <div v-if="activeItemId === 0" class="sidebar-team">
        <p class="sidebar-team__title">{{ content.referralProgram.title }}</p>
        <p>{{ content.referralProgram.description }}</p>
        <div class="sidebar-team__list">
          <span
            v-for="(item, index) in content.referralProgram.list"
            :key="index"
            class="icon-marker"
          >
            {{ item }}
          </span>
        </div>
        <div class="sidebar-team__plate">
          {{ content.referralProgram.plate }}
        </div>
      </div>

      <template v-if="activeItemId === 1" v-slot:header>
        <div class="sidebar-heading">
          <p class="sidebar-heading__headline">
            {{ content.supportProgram.header }}
          </p>
          <span>{{ content.supportProgram.subHeader }}</span>
        </div>
      </template>
      <div v-if="activeItemId === 1" class="sidebar-team">
        <p class="sidebar-team__title">{{ content.supportProgram.title }}</p>
        <div class="sidebar-team__list">
          <span
            v-for="(item, index) in content.supportProgram.list"
            :key="index"
            class="icon-marker"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <template v-if="activeItemId === 2" v-slot:header>
        <div class="sidebar-heading">
          <p class="sidebar-heading__headline">
            {{ content.rewardProgram.header }}
          </p>
          <span>{{ content.rewardProgram.subHeader }}</span>
        </div>
      </template>
      <div v-if="activeItemId === 2" class="sidebar-team">
        <p class="sidebar-team__title">{{ content.rewardProgram.title }}</p>
        <div class="sidebar-team__list">
          <span
            v-for="(item, index) in content.rewardProgram.list"
            :key="index"
            class="icon-marker"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </Sidebar>
  </aside>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.sidebar-heading {
  max-width: 520px;
}

.sidebar-team {
  @include font-text-2;
  padding: 0 40px;

  &__title {
    @include font-h6;

    margin-bottom: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 8px 0 32px;

    .icon-marker {
      display: flex;
      align-items: first baseline;

      &:before {
        content: "\004E";
        font-size: 12px;
        color: var(--color-blue);
        padding-right: 8px;
      }
    }
  }

  &__plate {
    border-radius: 20px;
    background: rgba(7, 91, 247, 0.1);
    padding: 20px;
  }
}
</style>
