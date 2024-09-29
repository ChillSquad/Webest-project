<script setup>
const images = [
  {
    src: "/images/imageTechnologies1.png",
    title: "Flutter",
  },
  {
    src: "/images/imageTechnologies2.png",
    title: "Java",
  },
  {
    src: "/images/imageTechnologies3.png",
    title: "Vue",
  },
  {
    src: "/images/imageTechnologies4.png",
    title: "Laravel",
  },
  {
    src: "/images/imageTechnologies5.png",
    title: "1C-Bitrix",
  },
  {
    src: "/images/imageTechnologies6.png",
    title: "PWA",
  },
];
</script>

<template>
  <div class="development-technologies">
    <div class="development-technologies__heading">Используемые технологии</div>

    <div class="development-technologies__wrapper">
      <div
        class="development-technologies__card"
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          class="development-technologies__image"
          :src="image.src"
          alt="story image"
        />

        <p class="development-technologies__image-title">
          {{ image.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/helpers/fonts-mixin";

.development-technologies {
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
  }

  &__card {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: flex-start;
    padding: 34px 55px;
    background-color: var(--color-grey-light);
    border-radius: 20px;
    gap: 22px;
    user-select: none;
    transition: align-self 0.3s ease;

    &:nth-child(even) {
      align-self: flex-end;
    }

    &:hover {
      .development-technologies__image {
        transform: scale(1.1);
      }
    }
  }

  &__image {
    width: 100%;
    height: auto;
    transition: transform 0.2s ease-in-out;
  }

  &__image-title {
    @include font-subscribe;

    color: var(--color-black);
  }
}
</style>
