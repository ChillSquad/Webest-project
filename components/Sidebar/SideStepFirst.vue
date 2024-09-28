<script setup>
import { useFeedbackFormModel } from "../models/feedback";

import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import GradientButton from "../UI-kit/GradientButton.vue";
import FileUploadCustom from "../UI-kit/FileUploadCustom.vue";

const { fields, errors, submit } = useFeedbackFormModel();
const uploadError = ref(null);
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
      <GradientButton title="Оставить заявку" @click="submit" />
      <span class="sidebar-footer__privacy">
        Нажимая кнопку, вы соглашаетесь с нашей
        <a class="sidebar-footer__privacy-link" href="#">
          политикой конфиденциальности
        </a>
      </span>
    </div>
  </div>
</template>
