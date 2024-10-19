<script setup>
import { ref, onMounted } from "vue";

const listItems = ref([]);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  listItems.value.forEach((item) => {
    observer.observe(item);
  });
});

defineProps({
  services: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <section class="expertise-marketplace-services">
    <div class="container">
      <div class="expertise-marketplace-services__content">
        <div class="expertise-marketplace-services__heading">{{ title }}</div>

        <ul class="expertise-marketplace-services__list">
          <li
            v-for="(service, index) in services"
            class="expertise-marketplace-services__item"
            ref="listItems"
          >
            <p
              class="expertise-marketplace-services__item-title icon-arrow-right-up"
            >
              {{ service.title }}
            </p>

            <p class="expertise-marketplace-services__item-subtitle">
              {{ service.subtitle }}
            </p>

            <p
              class="expertise-marketplace-services__item-points icon-marker"
              v-for="(point, pointIndex) in service.points"
              :key="pointIndex"
            >
              {{ point }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-marketplace-services {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    width: 50%;
  }

  &__content {
    height: max-content;
    display: flex;
    gap: 8px;
  }

  &__list {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    max-height: 96px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 5px 32px 0;
    background: #fff;
    border-bottom: 1px solid var(--color-grey-light-span);
    transition: background 0.3s ease-in-out, max-height 0.6s ease-in-out;
    overflow: hidden;

    .icon-arrow-right-up {
      display: flex;
      align-items: center;

      &:after {
        content: "\0042";
        font-size: 12px;
        color: inherit;
        transform: rotate(45deg);
        transition: transform 0.3s ease-in-out;
      }
    }

    &:hover {
      max-height: 808px;

      .expertise-marketplace-services__item-title {
        color: var(--color-blue);
      }

      .expertise-marketplace-services__item-points {
        transform: translateY(0);
        opacity: 1;
      }

      .icon-arrow-right-up {
        &:after {
          transform: rotate(0);
        }
      }
    }
  }

  &__item-title {
    @include font-h4;

    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: color 0.3s ease-in-out;
  }

  &__item-subtitle {
    @include font-text-2;
  }

  &__item-points {
    @include font-text-2;

    transition: opacity 0.3s ease-in-out, transform 0.6s ease-in-out;
    opacity: 0;
    transform: translateY(200px);
  }

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

  @media (max-width: 475px) {
    &__content {
      flex-direction: column;
    }

    &__heading {
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    &__list {
      width: 100%;
    }

    &__item {
      max-height: 110px;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .icon-arrow-right-up {
        display: flex;
        align-items: first baseline;
      }
    }
  }
}
</style>
