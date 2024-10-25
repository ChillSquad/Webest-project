<script setup>
defineProps({
  technologies: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "Используемые технологии",
  },
});
</script>

<template>
  <section class="development-technologies">
    <div class="container">
      <div class="development-technologies__heading">{{ title }}</div>

      <div class="development-technologies__wrapper">
        <div
          class="development-technologies__card"
          v-if="technologies"
          v-for="(technology, index) in technologies"
          :key="index"
        >
          <img
            class="development-technologies__image"
            :src="technology.src"
            alt="story image"
          />

          <p class="development-technologies__image-title">
            {{ technology.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.development-technologies {
  margin-bottom: var(--unit-margin-y);

  &__heading {
    @include font-h2;

    text-align: center;
    margin-bottom: 100px;
  }

  &__wrapper {
    height: 240px;
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  &__card {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: var(--color-grey-light);
    border-radius: 20px;
    gap: 22px;
    animation: moveUp 5s infinite ease-in-out;

    &:nth-child(even) {
      animation: moveDown 5s infinite ease-in-out;
    }

    &:hover {
      .development-technologies__image {
        transform: scale(1.1);
      }
    }
  }

  &__image {
    max-width: 90px;
    height: auto;
    transition: transform 0.2s ease-in-out;
  }

  &__image-title {
    @include font-subscribe;

    font-family: var(--ff-gilroy-medium);
    color: var(--color-black);
  }

  @media (max-width: 475px) {
    &__wrapper {
      height: fit-content;
      display: flex;
      gap: 8px;
    }

    &__card {
      width: 160px;
      height: 160px;
      animation: moveUp 5s infinite ease-in-out;
      transform: translateY(-40px);

      &:nth-child(even) {
        animation: moveDown 5s infinite ease-in-out;
        transform: translateY(40px);
      }
    }
  }
}

@keyframes moveUp {
  0% {
    transform: translateY(-40px);
  }

  50% {
    transform: translateY(40px);
  }

  100% {
    transform: translateY(-40px);
  }
}

@keyframes moveDown {
  0% {
    transform: translateY(40px);
  }

  50% {
    transform: translateY(-40px);
  }

  100% {
    transform: translateY(40px);
  }
}
</style>
