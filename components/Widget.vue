<script setup>
import { ref } from "vue";

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};

const employee = {
  image: "/images/imageWidget.png",
  name: "Станислав Колодин",
  occupation: "Руководитель отдела продаж",
  email: "info@webest.ru",
  phone: "+7 495 266-67-95",
  whatsappLink: "#",
  telegramLink: "#",
};
</script>

<template>
  <section class="widget" :class="{ active: isActive }" @click="toggleActive">
    <div class="widget__header">
      <img
        class="widget__header-image"
        :src="employee.image"
        :alt="employee.name"
      />
      <p class="widget__header-title">
        Обсудим проект? <span class="icon-close"></span>
      </p>
    </div>

    <div class="widget__content">
      <div class="widget__content-employee">
        <p class="widget__content-name">{{ employee.name }}</p>
        <p class="widget__content-occupation">{{ employee.occupation }}</p>
      </div>

      <address class="widget__content-links">
        <a :href="`mailto:${employee.email}`">{{ employee.email }}</a>
        <a :href="`tel:${employee.phone.replace(/\s/g, '')}`">{{
          employee.phone
        }}</a>
      </address>

      <div class="widget__content-tags">
        <a
          :href="employee.whatsappLink"
          target="_blank"
          class="icon-whatsapp"
        ></a>
        <a
          :href="employee.telegramLink"
          target="_blank"
          class="icon-telegram"
        ></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.widget {
  max-width: 92px;
  max-height: 92px;
  border-radius: 24px;
  padding: 8px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: var(--color-white-header);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease-in-out, max-width 0.4s ease-in-out,
    max-height 0.4s ease-in-out, padding 0.3s ease-in-out,
    box-shadow 0.4s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: #fff;
    max-width: 310px;
    box-shadow: 1px 6px 30px 0px var(--color-dark-blue);

    .widget__header-title {
      opacity: 1;
    }
  }

  &__header {
    display: flex;

    &-title {
      @include font-h7;

      align-self: center;
      min-width: 190px;
      margin-left: 12px;
      margin-right: 14px;
      flex-wrap: nowrap;
      opacity: 0;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
        margin 0.3s ease-in-out;
    }

    &-image {
      z-index: 2;
    }
  }

  &__content {
    &-employee {
      @include font-text-4;

      margin-top: 8px;
    }

    &-occupation {
      color: var(--color-dark-blue);
    }

    &-links {
      @include font-text-2;

      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 6px 0 12px;

      a {
        width: fit-content;
        color: var(--color-black);
      }
    }

    &-tags {
      display: flex;
      gap: 8px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 40px;
        border-radius: 12px;
        background-color: var(--color-blue);

        &:hover {
          background: var(--color-button-gradient-hover);
        }
      }
    }
  }

  @media (max-width: 696px) {
    bottom: 16px;
    right: 16px;
  }

  @media (max-width: 475px) {
    &__header {
      &-title {
        min-width: 142.08px;
      }
    }
  }

  .icon-telegram {
    &:after {
      @include footer-icon;

      content: "\0050";
    }
  }

  .icon-whatsapp {
    &:after {
      @include footer-icon;

      content: "\0054";
    }
  }

  .icon-close {
    @include flex-center;

    width: 29.19px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    cursor: pointer;

    &:after {
      content: "\004A";
      font-size: 12px;
      color: var(--color-black);
      font-weight: inherit;
      transition: color 0.3s ease-in-out;
    }
  }
}

.active {
  max-width: 310px;
  max-height: 352px;
  background: #fff;
  box-shadow: 1px 6px 30px 0px var(--color-dark-blue);
  padding: 72px 16px 16px;
  cursor: default;

  .widget__header-title {
    min-width: 100%;
    opacity: 1;
    margin: 0;
    transform: translate(-76px, -80px);
  }

  .icon-close {
    display: flex;

    &:hover {
      &:after {
        color: var(--color-blue);
      }
    }
  }

  @media (max-width: 475px) {
    .icon-close {
      &:after {
        font-size: 10px;
      }
    }
  }
}
</style>
