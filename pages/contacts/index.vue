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

const requisitesData = [
  [
    { title: "Краткое название организации", content: "ООО «Вэбест»" },
    {
      title: "Полное название организации",
      content: "Общество с ограниченной ответственностью «Вэбест»",
    },
    {
      title: "Юридический, почтовый, фактический адрес",
      content:
        "Россия, 162626, Вологодская обл., г. Череповец, ул. Годовикова, д. 21, помещение 4 Н",
    },
    { title: "Регистрационный номер ОГРН", content: "1143528009030" },
    { title: "ОКВЭД", content: "72.40" },
    { title: "ОКПО", content: "34255912" },
    { title: "ИНН", content: "3528217800" },
    { title: "КПП", content: "352801001" },
  ],
  [
    { title: "Банк", content: "Отделение № 8638 Сбербанка России, г.Вологда" },
    { title: "Расчетный счет", content: "40702810912000001964" },
    { title: "Корреспондентский счет", content: "30101810900000000644" },
    { title: "БИК", content: "041909644" },
  ],
];

const directorData = [
  [
    {
      title: "Руководитель",
      content: [
        {
          text: "Директор Чистяков Дмитрий Александрович, действующий на основании Устава",
        },
      ],
    },
    {
      title: "Телефон",
      content: [
        { text: "Раб.: 8 (8202) 74-22-90", link: "tel:+78202742290" },
        { text: "Моб.: +7 (953) 501-03-19", link: "tel:+79535010319" },
      ],
    },
    {
      title: "Сайт компании",
      content: [{ text: "webest.ru", link: "webest.ru" }],
    },
    {
      title: "E-mail",
      content: [
        {
          text: "info@webest.ru - отдел по работе с клиентами",
          link: "mailto:info@webest.ru",
        },
        { text: " dir@wbest.ru - директор", link: "mailto:info@webest.ru" },
      ],
    },
  ],
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

      <section class="contact-page__requisites">
        <p class="contact-page__communication-title">Реквизиты</p>

        <div class="contact-page__requisites-content">
          <div
            v-for="(group, groupIndex) in requisitesData"
            :key="groupIndex"
            class="contact-page__requisites-list"
          >
            <p
              v-for="(item, index) in group"
              :key="index"
              class="contact-page__requisites-item"
            >
              {{ item.title }}

              <span>
                {{ item.content }}
              </span>
            </p>
          </div>

          <div
            v-for="(group, groupIndex) in directorData"
            :key="groupIndex"
            class="contact-page__requisites-list"
          >
            <address
              v-for="(item, index) in group"
              :key="index"
              class="contact-page__requisites-item"
            >
              <p>{{ item.title }}</p>

              <a
                v-for="(contact, index) in item.content"
                :key="index"
                :href="contact.link"
              >
                {{ contact.text }}
              </a>
            </address>
          </div>
        </div>
      </section>

      <TalkUnit />
    </div>
  </div>
</template>
