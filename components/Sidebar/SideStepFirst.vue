<script setup>
import GradientButton from "../UI-kit/GradientButton.vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { useFeedbackFormModel } from "../models/feedback";

const { fields, submit } = useFeedbackFormModel();
</script>

<template>
  <div class="sidebar-content">
    <div class="sidebar-input">
      <div class="sidebar-input__item">
        <label for="username">Как вас зовут</label>
        <InputText
          class="sidebar-input__field"
          id="username"
          v-model="fields.name"
        />
      </div>

      <div class="sidebar-input__item">
        <label for="mail">Почта, телефон или мессенджер</label>
        <InputText
          class="sidebar-input__field"
          id="mail"
          v-model="fields.email"
        />
      </div>

      <div class="sidebar-input__item">
        <label for="task">Кратко опишите задачу</label>
        <Textarea
          autoResize
          rows="1"
          class="sidebar-input__field"
          id="task"
          v-model="fields.task"
        />
      </div>

      <div class="sidebar-input__file icon-paper-clip">Прикрепить файл</div>
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

<style lang="scss" scoped></style>
