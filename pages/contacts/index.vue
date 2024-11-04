<script setup>
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";

const contactData = [
  {
    title: "Наши адреса",
    content: [
      { text: "г. Череповец, ул. Монтклер, д. 20", link: "#" },
      { text: "г. Москва, пр-кт Ленинградский, д. 36", link: "#" },
    ],
  },
  {
    title: "Напиши нам",
    content: [{ text: "info@webest.ru", link: "mailto:info@webest.ru" }],
  },
  {
    title: "Позвоните нам",
    content: [{ text: "+7 (495) 128-22-90", link: "tel:+74951282290" }],
  },
];

const socialLinks = [
  { iconClass: "icon-vkontakte", link: "#" },
  { iconClass: "icon-telegram", link: "#" },
  { iconClass: "icon-vcru", link: "#" },
  { iconClass: "icon-behance", link: "#" },
  { iconClass: "icon-dprofile", link: "#" },
];

const infoLinks = [
  {
    title: "Партнерам",
    content: "Телеграм чат",
    link: "#",
  },
  {
    title: "Презентация",
    content: "Смотреть",
    link: "#",
  },
  {
    title: "Реквизиты",
    content: "Смотреть",
    link: "#",
  },
];
</script>

<template>
  <div class="container">
    <div class="contact-page">
      <div class="contact-page__title">Контакты</div>

      <section class="contact-page__communication">
        <p class="contact-page__communication-title">Свяжитесь с нами</p>

        <div class="contact-page__communication-content">
          <div v-for="(item, index) in contactData" :key="index">
            <p>{{ item.title }}</p>

            <address class="contact-page__communication-content-address">
              <a
                v-for="(contact, index) in item.content"
                :key="index"
                :href="contact.link"
              >
                {{ contact.text }}
              </a>
            </address>
          </div>

          <div>
            Соцсети
            <div class="contact-page__communication-content-social">
              <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.link"
                :class="social.iconClass"
              ></a>
            </div>
          </div>
        </div>

        <div class="contact-page__communication-wrapper">
          <div
            v-for="(item, index) in infoLinks"
            :key="index"
            class="contact-page__communication-list"
          >
            <p class="contact-page__requisites-item">{{ item.title }}</p>

            <article class="contact-page__communication-item">
              <a :key="index" :href="item.link" class="icon-arrow-right-up">
                {{ item.content }}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section class="contact-page__employee">
        <div class="contact-page__employee-table">
          <article class="contact-page__employee-item"></article>
        </div>
      </section>

      <TalkUnit />
    </div>
  </div>
</template>
