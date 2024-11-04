<script setup>
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
</script>

<template>
  <section class="requisites">
    <p class="communication-title">Реквизиты</p>

    <div class="requisites-content">
      <div
        v-for="(group, groupIndex) in requisitesData"
        :key="groupIndex"
        class="requisites-list"
      >
        <p v-for="(item, index) in group" :key="index" class="requisites-item">
          {{ item.title }}

          <span>
            {{ item.content }}
          </span>
        </p>
      </div>

      <div
        v-for="(group, groupIndex) in directorData"
        :key="groupIndex"
        class="requisites-list"
      >
        <address
          v-for="(item, index) in group"
          :key="index"
          class="requisites-item"
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
</template>

<style lang="scss" scoped>
@import "~/assets/scss/helpers/mixin";
@import "~/assets/scss/helpers/fonts-mixin";

.requisites {
  margin-bottom: var(--unit-margin-y);

  &-content {
    display: flex;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &-item {
    @include font-text-3;

    width: 414px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--color-dark-blue);

    span {
      color: var(--color-black);
    }

    a {
      width: fit-content;
      color: var(--color-black);
    }
  }

  @media (max-width: 1300px) {
    &-content {
      flex-wrap: wrap;
    }

    &-list {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: 475px) {
    &-content {
      flex-direction: column;
    }

    &-item {
      max-width: 414px;
      width: 100%;
    }
  }
}
</style>
