<template>
  <div class="container">
    <section class="expertise-development-reporting">
      <div class="expertise-development-reporting__title">Отчетность</div>

      <ul class="expertise-development-reporting__list">
        <li class="expertise-development-reporting__item">
          <p>
            Мы ведем свой учет времени по задачам на проекте специалиста,
            который можем предоставить в любой момент
          </p>
          <span class="expertise-development-reporting__item-first">1</span>
        </li>

        <li class="expertise-development-reporting__item">
          <p>Вы можете обратиться к специалисту напрямую</p>
          <span class="expertise-development-reporting__item-second">2</span>
        </li>

        <li class="expertise-development-reporting__item">
          <p>
            При необходимости можем выделить руководителя проекта и
            тестировщиков
          </p>
          <span class="expertise-development-reporting__item-third">3</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/fonts-mixin";

.expertise-development-reporting {
  margin-bottom: var(--unit-margin-y);

  &__title {
    @include font-h2;

    margin-bottom: 100px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }

  &__item {
    height: 340px;
    width: auto;
    display: flex;
    align-items: end;
    background-color: var(--color-grey-light);
    border-radius: 40px;
    padding: 32px;
    position: relative;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);

      .expertise-development-reporting__item-first,
      .expertise-development-reporting__item-second,
      .expertise-development-reporting__item-third {
        opacity: 0.6;
      }
    }

    p {
      @include font-text-1;

      width: 362px;
    }
  }

  &__item-first,
  &__item-second,
  &__item-third {
    font-weight: 900;
    font-size: 480px;
    position: absolute;
    color: var(--color-white);
    pointer-events: none;
    user-select: none;
  }

  &__item-first {
    right: 0;
    bottom: -120px;
  }

  &__item-second,
  &__item-third {
    right: -70px;
    bottom: -120px;
  }
}
</style>
