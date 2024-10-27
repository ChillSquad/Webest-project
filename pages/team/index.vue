<script setup>
import { ref, computed, onMounted } from "vue";
import Priority from "~/components/ExpertisePage/Priority.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import CustomersUnit from "~/components/CustomersPage/CustomersUnit.vue";
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import GradientButton from "~/components/UI-kit/GradientButton.vue";
import TeamSidebar from "~/components/AboutCompanyPage/TeamSidebar.vue";
import TeamSlider from "~/components/AboutCompanyPage/TeamSlider.vue";
import { useSidebarModel } from "~/components/models/sidebar";
import { useCustomCursor } from "~/components/models/useCustomCursor";

const {
  toggleSidebarFormStaff,
  toggleSidebarFormTeam,
  toggleSidebarForm,
  isActive,
} = useSidebarModel();

const list = [
  { title: "10", content: "лет на рынке" },
  { title: "150+", content: "реализованных проектов" },
  { title: "72", content: "профессионала" },
  { title: "10", content: "в ТОП десять разработчиков e-commerce в России" },
  { title: "141", content: "наград Рейтинга рунета" },
  { title: "9", content: "наград Tagline" },
  { title: "4", content: "награды SEO глазами клиентов" },
];

const priorityItems = [
  {
    heading: "Bitrix разработчик",
    tags: ["Senior", "Фултайм", "Офис или удаленно"],
    button: true,
  },
  {
    heading: "Front-end разработчик",
    tags: ["Senior", "Фултайм", "Офис или удаленно"],
    button: true,
  },
  {
    heading: "SEO-специалист",
    tags: ["Senior", "Фултайм", "Офис или удаленно"],
    button: true,
  },
];

const team = [
  {
    color: "purple",
    standing: "более 10 лет",
    content: "на рынке",
    tall: false,
    wide: false,
  },
  { image: "/images/imageTeam3.png", tall: false, wide: true },
  { image: "/images/imageTeam4.png", tall: false, wide: false },
  {
    content: "Мы всегда в поиске скилловых и талантливых коллег!",
    tall: false,
    wide: true,
    button: true,
  },
  { image: "/images/imageTeam5.png", tall: true, wide: false },
  {
    color: "pink",
    standing: "успешно",
    content: " реализовали более 150 крутых проектов",
    tall: false,
    wide: false,
  },
  { image: "/images/imageTeam7.png", tall: false, wide: false },
  { image: "/images/imageTeam8.png", tall: true, wide: false },
  { image: "/images/imageTeam2.png", tall: false, wide: false },
  {
    color: "blue",
    standing: "аккредитованная",
    content: "IT-компания",
    tall: false,
    wide: false,
  },
  { image: "/images/imageTeam6.png", tall: false, wide: false },
  {
    color: "yellow",
    standing: "ТОП 10",
    content: "разработчиков E-commerce России",
    tall: false,
    wide: false,
  },
];

const items = [
  { id: 0, title: "Реферальная программа", icon: "icon-cup" },
  { id: 1, title: "Окружили поддержкой", icon: "icon-heart-empty" },
  { id: 2, title: "Ввели поощрения для сотрудников", icon: "icon-star" },
];

const openDreamJobReviews = () => {
  window.open("https://dreamjob.ru/employers/304740?utm_source=hh", "_blank");
};

const activeItemId = ref(null);
const listItems = ref([]);

const setActiveItem = (id) => {
  activeItemId.value = id;
  toggleSidebarFormTeam();
};

const teamImageSrc = ref("/images/imageTeam1.png");

const updateImageSrc = () => {
  teamImageSrc.value =
    window.innerWidth <= 475
      ? "/images/imageTeam1Mobile.png"
      : "/images/imageTeam1.png";
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const {
  isCursorVisible,
  circleStyle,
  textStyle,
  handleMouseEnter,
  handleMouseLeave,
} = useCustomCursor(isActive);

const isScreenSmall = ref(false);

const checkScreenSize = () => {
  isScreenSmall.value = window.innerWidth <= 475;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  updateImageSrc();
  window.addEventListener("resize", updateImageSrc);

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  listItems.value.forEach((item) => {
    observer.observe(item);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});

const handleSectionClick = () => {
  if (!isScreenSmall.value) {
    toggleSidebarForm();
  }
};
</script>

<template>
  <div class="company-team">
    <div class="company-team__heading">
      <div class="company-team__heading-title">Команда</div>
      <div class="company-team__heading-subtitle">
        Мы Wébest — входим <span class="custom-standing-blue">в ТОП 10</span>
        разработчиков E-commerce России. Комплексно
        <span class="custom-standing-pink desktop">
          улучшаем бизнес-процессы
        </span>
        <span class="custom-standing-pink mobile"> улучшаем бизнес- </span>
        <span class="custom-standing-pink mobile"> процессы </span>
        наших клиентов при помощи IT. Специализируемся на создании и развитии
        e-commerce проектов, B2B- и B2C — сервисов, мобильных приложений,
        корпоративных сайтов для компаний в сфере услуг и производства
      </div>
    </div>

    <section class="company-team__review">
      <GradientButton title="Оставить заявку" @click="toggleSidebarForm" />

      <div
        class="custom-component"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <img
          class="company-team__review-image"
          :src="teamImageSrc"
          alt="Изображение команды"
          @click="handleSectionClick"
        />

        <ul class="company-team__review-list" @click="handleSectionClick">
          <li
            v-for="(item, index) in list"
            class="company-team__review-item"
            :key="index"
          >
            {{ item.title }}
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>

      <div
        class="custom-cursor"
        :class="{ visible: isCursorVisible && !isActive }"
      >
        <div class="custom-cursor__circle" :style="circleStyle">
          <span class="custom-cursor__circle-span" :style="textStyle"
            >Оставить <span>заявку</span></span
          >
        </div>
      </div>
    </section>

    <section class="company-team__queue">
      <div class="company-team__queue-title">
        <p class="container">Wébest – это, в первую очередь, люди</p>
      </div>

      <NuxtMarquee :autoFill="true" :speed="70">
        <div class="company-team__queue-table">
          <div
            v-for="(item, index) in team"
            :key="index"
            :class="[
              'company-team__queue-item',
              { wide: item.wide },
              { tall: item.tall },
              { advanced: item.button },
            ]"
          >
            <span
              v-bind:class="item.color ? `custom-standing-${item.color}` : ''"
            >
              {{ item.standing }}
            </span>

            <span>
              {{ item.content }}
            </span>

            <GradientButton
              v-if="item.button"
              title="Стать частью команды"
              @click="toggleSidebarFormStaff"
            />

            <img
              v-if="item.image"
              :src="item.image"
              alt="Изображение команды"
              class="company-team__queue-image"
            />
          </div>
        </div>
      </NuxtMarquee>
    </section>

    <div class="container">
      <p class="company-team__queue-title">Ценим каждого сотрудника</p>

      <section class="expertise-unit__table">
        <div class="expertise-unit__table-list">
          <article
            v-for="(item, index) in items"
            :key="item.id"
            class="expertise-unit__table-item"
            @click="setActiveItem(item.id)"
            ref="listItems"
          >
            <div class="expertise-card">
              <div class="expertise-card__inner">
                <span :class="item.icon"></span>
                <p class="expertise-card__heading">{{ item.title }}</p>
              </div>
            </div>
          </article>

          <TeamSidebar :activeItemId="activeItemId" />
        </div>
      </section>
    </div>

    <Priority title="Стать частью команды" :prioritys="priorityItems" />

    <section class="company-team__feedback">
      <div class="container">
        <div class="company-team__feedback-left">
          <p class="company-team__queue-title">
            Отзывы <br />
            сотрудников
          </p>

          <div class="company-team__feedback-left-footer">
            <p><span>4,6</span>Оценка Dream Job</p>
            <p><span>97%</span>Рекомендуют работодателя</p>
          </div>

          <GradientButton
            @click="openDreamJobReviews"
            title="Все 99 отзывов на Dream Job"
          />
        </div>

        <div class="company-team__feedback-right">
          <p class="company-team__queue-title">
            Отзывы <br />
            сотрудников
          </p>

          <TeamSlider />
        </div>
      </div>
    </section>

    <BlogUnit article="case" :slider="true" />

    <CustomersUnit />

    <div class="container">
      <TalkUnit />
    </div>
  </div>
</template>
