<script setup>
defineProps({
  title: {
    type: String,
    default: "Похожие услуги",
  },
  forbidden: {
    type: Boolean,
    default: true,
  },
});

const cards = [
  {
    src: "/images/imageMarketing2.png",
    title: "Контекстная реклама Яндекс Директ и Google Ads",
  },
  {
    src: "/images/imageMarketing3.png",
    title: "Таргетированная реклама",
    subtitle:
      "ВК, MyTarget, Facebook/Instagram, МТС Маркетолог, СберТаргет, Билайн Таргет",
    wide: true,
  },
  {
    src: "/images/imageMarketing4.png",
    title: "SEO-продвижение сайтов в Яндекс и Google",
  },
  {
    src: "/images/imageMarketing6.png",
    title: "Продвижениена маркетплейсах",
    subtitle: "Wildberries, Яндекс Маркет, OZON",
  },
  {
    src: "/images/imageMarketing7.png",
    title: "Email-маркетинг",
  },
  {
    src: "/images/imageMarketing8.png",
    title: "Контент-маркетинг",
    subtitle:
      "Яндекс.Бизнес, Яндекс.Геореклама (Яндекс.Навигатор, Яндекс.Карты)",
  },
];
</script>

<template>
  <section class="similar-services">
    <div class="container">
      <div class="similar-services__heading">{{ title }}</div>

      <ul class="similar-services__list">
        <li
          :class="['similar-services__item', { tall: card.tall }]"
          v-for="(card, index) in cards"
          :key="index"
        >
          <div class="similar-services__item-heading">
            <p class="similar-services__item-title">{{ card.title }}</p>

            <p class="similar-services__item-subtitle">
              {{ card.subtitle }}
            </p>
          </div>

          <img
            class="similar-services__item-image"
            :src="card.src"
            alt="story image"
          />
        </li>
      </ul>
      <p v-if="forbidden" class="forbidden">
        *Соцсети Instagram и Facebook запрещенные в России экстремистские
        организации
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.similar-services {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: 100px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
  }

  .tall {
    grid-row: span 2;
    height: 100%;
  }

  &__item-heading {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-between;
    padding: 32px 32px 0;
    background-color: var(--color-grey-light);
    border-radius: 20px;
  }

  &__item-title {
    @include font-h6;
  }

  &__item-subtitle {
    @include font-text-4-1920;
  }

  .forbidden {
    @include font-text-2;

    margin-top: 8px;
  }

  @media (max-width: 360px) {
    &__list {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
