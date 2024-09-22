<script setup>
import BreadcrumbCustom from "~/components/UI-kit/BreadcrumbCustom.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";

const breadcrumbItems = [{ label: "Контакты", route: "/contacts" }];
</script>

<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-page__heading">
        <BreadcrumbCustom :items="breadcrumbItems" />
        <div class="contact-page__title">контакты</div>
      </div>

      <div class="contact-page__tags">
        <div>
          Наши адреса:
          <address class="contact-page__addres">
            <a href="#">г. Череповец, ул. Монтклер, д. 20</a>
            <a href="#">г. Москва, пр-кт Ленинградский, д. 36</a>
          </address>
        </div>

        <div>
          Напиши нам:
          <address class="contact-page__addres">
            <a href="mailto:info@webest.ru">info@webest.ru</a>
          </address>
        </div>

        <div>
          Позвоните нам:
          <address class="contact-page__addres">
            <a href="tel:+74951282290">+7 (495) 128-22-90</a>
          </address>
        </div>

        <div>
          Соцсети
          <div class="contact-page__social">
            <a href="#" class="icon-vkontakte"></a>
            <a href="#" class="icon-telegram"></a>
            <a href="#" class="icon-vcru"></a>
            <a href="#" class="icon-behance"></a>
            <a href="#" class="icon-dprofile"></a>
          </div>
        </div>
      </div>

      <TalkUnit />
    </div>
  </div>
</template>
