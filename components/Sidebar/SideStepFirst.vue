<script setup>
import { useFeedbackFormModel } from "../models/feedback";

import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import GradientButton from "../UI-kit/GradientButton.vue";
import FileUploadCustom from "../UI-kit/FileUploadCustom.vue";

const { fields, errors, submit } = useFeedbackFormModel();
const uploadError = ref(null);
const checked = ref(false);
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-input">
      <div class="sidebar-input__item">
        <label for="username">Как вас зовут</label>
        <InputText
          class="sidebar-input__field"
          :class="{ 'input-error': errors.name }"
          id="username"
          v-model="fields.name"
        />
        <span v-if="errors.name" class="sidebar-input__error-message"
          >Это поле обязательно</span
        >
      </div>

      <div class="sidebar-input__item">
        <label for="mail">Почта, телефон или мессенджер</label>
        <InputText
          class="sidebar-input__field"
          :class="{ 'input-error': errors.email }"
          id="mail"
          v-model="fields.email"
        />
        <span v-if="errors.email" class="sidebar-input__error-message"
          >Это поле обязательно</span
        >
      </div>

      <div class="sidebar-input__item">
        <label for="task">Кратко опишите задачу</label>
        <Textarea
          autoResize
          rows="1"
          class="sidebar-input__field"
          :class="{ 'input-error': errors.task }"
          id="task"
          v-model="fields.task"
        />
        <span v-if="errors.task" class="sidebar-input__error-message"
          >Это поле обязательно</span
        >
      </div>
      <FileUploadCustom
        title="Прикрепить файл"
        @update:uploadError="uploadError = $event"
      />
      <span v-if="uploadError" class="sidebar-input__error-message">{{
        uploadError
      }}</span>
    </div>

    <div class="sidebar-footer">
      <GradientButton
        :disabled="!checked"
        title="Оставить заявку"
        @click="submit"
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
