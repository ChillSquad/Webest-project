<script setup>
import { useFeedbackFormModelTariff } from "../models/feedbackTariff";
import InputText from "primevue/inputtext";
import GradientButton from "../UI-kit/GradientButton.vue";
import { ref } from "vue";

const { fieldsTariff, errorsTariff, submitTariff } =
  useFeedbackFormModelTariff();
const checked = ref(false);
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-input">
      <div class="sidebar-input__item">
        <label for="username">Как вас зовут</label>
        <InputText
          class="sidebar-input__field"
          :class="{ 'input-error': errorsTariff.name }"
          id="username"
          v-model="fieldsTariff.name"
        />
        <span v-if="errorsTariff.name" class="sidebar-input__error-message">
          Это поле обязательно
        </span>
      </div>

      <div class="sidebar-input__item">
        <label for="mail">Почта, телефон или мессенджер</label>
        <InputText
          class="sidebar-input__field"
          :class="{ 'input-error': errorsTariff.email }"
          id="mail"
          v-model="fieldsTariff.email"
        />
        <span v-if="errorsTariff.email" class="sidebar-input__error-message">
          Это поле обязательно
        </span>
      </div>
    </div>

    <div class="sidebar-footer">
      <GradientButton
        :disabled="!checked"
        title="Оставить заявку"
        @click="submitTariff"
      />

      <div class="sidebar-footer__approval">
        <label class="custom-checkbox">
          <input type="checkbox" v-model="checked" :binary="true" />
          <span class="checkmark"></span>
        </label>

        <span class="sidebar-footer__privacy">
          Я даю согласие на
          <NuxtLink to="/policy/agreement" class="sidebar-footer__privacy-link">
            обработку персональных данных
          </NuxtLink>
          и ознакомлен(-а) с
          <NuxtLink to="/policy" class="sidebar-footer__privacy-link">
            политикой в отношении обработки персональных данных
          </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.custom-checkbox {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid var(--color-dark-blue);
    transition: background-color 0.2s ease, border 0.2s ease;

    &:hover {
      border: 1px solid var(--color-blue);
    }
  }

  input:checked ~ .checkmark {
    background-color: var(--color-blue);
  }

  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark::after {
    display: block;
  }

  .checkmark::after {
    left: 8px;
    top: 2px;
    width: 6px;
    height: 14px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

.sidebar-footer {
  align-items: start;
  flex-direction: column;

  &__privacy {
    display: block;
  }

  &__approval {
    color: var(--color-dark-blue);
    display: flex;
    gap: 24px;
    align-items: start;
    justify-content: start;
  }
}
</style>
