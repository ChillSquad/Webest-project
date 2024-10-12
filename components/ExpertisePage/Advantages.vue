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
  cards: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "Наши преимущества",
  },
  forbidden: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="outstaff-advantages">
    <div class="container">
      <div class="outstaff-advantages__heading">{{ title }}</div>

      <ul class="outstaff-advantages__list">
        <li
          :class="[
            'outstaff-advantages__item',
            { tall: card.tall },
            { wide: card.wide },
          ]"
          v-for="(card, index) in cards"
          :key="index"
          ref="listItems"
        >
          <div class="outstaff-advantages__item-heading">
            <p class="outstaff-advantages__item-title">{{ card.title }}</p>

            <p v-if="card.subtitle" class="outstaff-advantages__item-subtitle">
              {{ card.subtitle }}
            </p>
          </div>

          <img
            class="outstaff-advantages__item-image"
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

.outstaff-advantages {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: 100px;
  }

  &__list {
    display: grid;
    gap: 8px;
  }

  .wide {
    grid-column: span 2;
    width: 100%;
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
    @include font-text-4;
  }

  .forbidden {
    @include font-text-6;

    margin-top: 8px;
  }

  @media (max-width: 360px) {
    &__heading {
      margin-bottom: 40px;
    }

    &__list {
      display: flex;
      flex-direction: column;
    }

    &__item {
      padding: 16px 16px 0;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &__item-title {
      @include font-text-3;

      font-family: var(--ff-montserrat-bold);
    }
  }
}
</style>
