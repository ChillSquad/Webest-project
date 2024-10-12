<script setup>
import { useFeedbackFormModelStaff } from "../models/feedbackStaff";

import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import GradientButton from "../UI-kit/GradientButton.vue";
import FileUploadCustom from "../UI-kit/FileUploadCustom.vue";

const { fieldsStaff, errorsStaff, submitStaff } = useFeedbackFormModelStaff();
const uploadError = ref(null);
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-input">
      <div class="sidebar-input__item">
        <label for="username">Как вас зовут</label>
        <InputText
          class="sidebar-input__field"
          :class="{ 'input-error': errorsStaff.name }"
          id="username"
          v-model="fieldsStaff.name"
        />
        <span v-if="errorsStaff.name" class="sidebar-input__error-message">
          Это поле обязательно
        </span>
      </div>

      <div class="sidebar-input__item">
        <label for="mail">Почта, телефон или мессенджер</label>
        <InputText
          class="sidebar-input__field"
          :class="{ 'input-error': errorsStaff.email }"
          id="mail"
          v-model="fieldsStaff.email"
        />
        <span v-if="errorsStaff.email" class="sidebar-input__error-message">
          Это поле обязательно
        </span>
      </div>

      <div class="sidebar-input__item">
        <label for="about">Расскажи немного о себе</label>
        <Textarea
          autoResize
          rows="1"
          class="sidebar-input__field"
          :class="{ 'input-error': errorsStaff.about }"
          id="about"
          v-model="fieldsStaff.about"
        />
        <span v-if="errorsStaff.about" class="sidebar-input__error-message">
          Это поле обязательно
        </span>
      </div>
      <FileUploadCustom
        title="Прикрепить резюме"
        @update:uploadError="uploadError = $event"
      />
      <span v-if="uploadError" class="sidebar-input__error-message">{{
        uploadError
      }}</span>
    </div>

    <div class="sidebar-footer">
      <GradientButton title="Оставить заявку" @click="submitStaff" />
      <span class="sidebar-footer__privacy">
        Нажимая кнопку, вы соглашаетесь с нашей
        <a class="sidebar-footer__privacy-link" href="#">
          политикой конфиденциальности
        </a>
      </span>
    </div>
  </div>
</template>
