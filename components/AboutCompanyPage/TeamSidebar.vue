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
          <p class="sidebar-heading__headline">Реферальная программа</p>
        </div>
      </template>
      <div v-if="activeItemId === 0" class="sidebar-team">
        <p class="sidebar-team__title">Вознаграждение</p>
        <p>
          Если ты привёл одного сотрудника в нашу команду, то по прошествии
          испытательного срока своего друга, ты можешь получить любой бонус,
          предложенный в данном списке:
        </p>
        <div class="sidebar-team__list">
          <span class="icon-marker">Абонемент в спортивный зал;</span>
          <span class="icon-marker"
            >Купоны на бесплатную еду (пицца фабрика, кинг суши и т.д.);</span
          >
          <span class="icon-marker">Подписка на желаемые сервисы;</span>
          <span class="icon-marker"
            >Посещение любого заведения города за счёт компании
            (на двоих);</span
          >
          <span class="icon-marker"
            >Курсы повышения квалификации в любой сфере</span
          >
        </div>
        <div class="sidebar-team__plate">
          Если ты привёл второго сотрудника в нашу команду, то по прошествии
          испытательного срока второго сотрудника, ты получишь денежное
          вознаграждение в размере 20 000 ₽
        </div>
      </div>

      <template v-if="activeItemId === 1" v-slot:header>
        <div class="sidebar-heading">
          <p class="sidebar-heading__headline">Окружили поддержкой</p>
          <span
            >Создаём комфортные условия для своих сотрудников. Всегда открыты к
            новым идеям и предложениям.</span
          >
        </div>
      </template>
      <div v-if="activeItemId === 1" class="sidebar-team">
        <p class="sidebar-team__title">
          Основные пункты программы социальной поддержки:
        </p>
        <div class="sidebar-team__list">
          <span class="icon-marker"
            >Материальная помощь нуждающимся сотрудникам;</span
          >
          <span class="icon-marker">Денежные поощрения и компенсации;</span>
          <span class="icon-marker"
            >Предоставление дополнительного выходного оплачиваемого дня 31
            декабря всем сотрудникам предприятия;</span
          >
          <span class="icon-marker"
            >Предоставление 3 (трёх) дополнительных выходных оплачиваемых дней
            сотруднику компании — отцу ребёнка в связи с выпиской матери и
            ребёнка из роддома;</span
          >
        </div>
      </div>

      <template v-if="activeItemId === 2" v-slot:header>
        <div class="sidebar-heading">
          <p class="sidebar-heading__headline">
            Ввели поощрения для сотрудников
          </p>
          <span
            >Создаём комфортные условия для своих сотрудников. Всегда открыты к
            новым идеям и предложениям.</span
          >
        </div>
      </template>
      <div v-if="activeItemId === 2" class="sidebar-team">
        <p class="sidebar-team__title">Основные пункты программы поощрения:</p>
        <div class="sidebar-team__list">
          <span class="icon-marker"
            >Повышение ЗП согласно грейдам или ИПР;</span
          >
          <span class="icon-marker"
            >Поощрения за хорошие идеи по развитию компании;</span
          >
          <span class="icon-marker">Оплата курсов повышения квалификации;</span>
          <span class="icon-marker"
            >Корпоративная скидка на покупку личной техники — 15%;</span
          >
          <span class="icon-marker"
            >Дополнительный выходной в счёт дня рождения сотрудника;</span
          >
          <span class="icon-marker">Корпоративные мероприятия;</span>
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
