<script setup>
import TalkUnit from "~/components/TalkPage/TalkUnit.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";
import Breadcrumbs from "~/components/UI-kit/Breadcrumbs.vue";
import GradientButton from "~/components/UI-kit/GradientButton.vue";
import ArticleSlider from "~/components/UI-kit/ArticleSlider.vue";
import ArticleSliderMobile from "~/components/UI-kit/ArticleSliderMobile.vue";

const breadcrumbItems = [{ label: "Назад ко всем кейсам", route: "/case" }];

const slides = [
  { src: "/images/imageCaseArticle6.png" },
  { src: "/images/imageCaseArticle6.png" },
  { src: "/images/imageCaseArticle6.png" },
  { src: "/images/imageCaseArticle6.png" },
  { src: "/images/imageCaseArticle6.png" },
];

const { data: items } = await useAsyncData("article", () => {
  return $fetch("/api/plate/", { method: "GET" });
});

import { useSidebarModel } from "~/components/models/sidebar";
import { useCustomCursor } from "~/components/models/useCustomCursor";

const { toggleSidebarForm, isActive } = useSidebarModel();
const {
  isCursorVisible,
  circleStyle,
  textStyle,
  handleMouseEnter,
  handleMouseLeave,
} = useCustomCursor(isActive);
</script>

<template>
  <div class="case-article">
    <div class="container">
      <div class="case-article__heading">
        <div class="article-container">
          <Breadcrumbs :items="breadcrumbItems" />

          <div class="case-article__title">
            Редизайн интернет-магазина Kamatyres
          </div>

          <div class="case-article__subtitle">
            Разработали редизайн интернет-магазина для B2C- и B2B-клиентов
            Kamatyres
          </div>
        </div>

        <GradientButton title="Заказать разработку сайта" />
      </div>
    </div>

    <div class="case-article__heading-review">
      <div
        class="custom-component"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <img
          @click="toggleSidebarForm"
          class="case-article__heading-image-review"
          src="public/images/imageCaseArticle1.png"
          alt="Заголовок статьи"
        />
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
      </div>

      <div class="case-article-plate">
        <div class="case-article-plate__inner">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="case-article-plate__box"
          >
            <span class="case-article-plate__percent"
              >{{ item.sign }}{{ item.percent }}%</span
            >
            <span class="case-article-plate__text">{{ item.text }}</span>

            <hr
              class="case-article-plate__line"
              v-if="index === 0 || index === 1"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <ol class="case-article__content">
        <li class="case-article__chapter">
          <div class="article-container">
            Клиент

            <div class="case-article__chapter-content">
              <p>
                ООО «Торговый дом «Кама» — генеральный дистрибьютор продукции
                KAMA TYRES, которую экспортирует в 37 стран мира.
              </p>

              <p>
                Занимается закупками, хранением и обеспечением комплекса сырьем,
                оборудованием и запасными частями, распространяет шинную
                продукцию Viatti, КАМА, KAMA PRO, KAMA EURO, KAMARETREAD и
                создает для клиентов максимально комфортные условия приобретения
                продукции.
              </p>
            </div>
          </div>
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Задача

            <div class="case-article__chapter-content">
              <p>
                Перед нами стояла задача сделать редизайн сайта, отличный от
                стандартных интернет-магазинов, разработать индивидуальный и
                узнаваемый визуальный стиль для сайта kamatyres.shop и при этом
                сделать сайт удобным для B2C и B2B клиентов.
              </p>
            </div>
          </div>
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Конкурентный анализ

            <div class="case-article__chapter-content">
              <p>
                Сравнили и проанализировали дизайн-решения прямых и косвенных
                конкурентов в отрасли с целью определения лучших практик и
                трендов.
              </p>

              <p>
                В конкурентном анализе учавствовали 10 образцовых сайтов в сфере
                e-commerce: «Колеса Даром», «Колесо.ру», «Мосавтошина»,
                «Tuning Boutique», «Detailing Boutique», «Cordiant», «Pirelli»,
                «Ikon Tyres», «Hankook Tire» и «Yokohama».
              </p>
            </div>
          </div>
          <img
            class="case-article__heading-image margin-bottom-40"
            src="public/images/imageCaseArticle2.png"
            alt="Заголовок статьи"
          />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Анализ kamatyres.shop

            <div class="case-article__chapter-content">
              <p>
                Провели анализ существующего сайта kamatyres.shop для выявления
                слабых сторон и для их дальнейшего пересмотра или недопущения.
              </p>
            </div>
          </div>
          <img
            class="case-article__heading-image margin-bottom-40"
            src="public/images/imageCaseArticle3.png"
            alt="Заголовок статьи"
          />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Brainstorm

            <div class="case-article__chapter-content">
              <p>
                Провели с командой дизайнеров «Мозговой штурм» для генерации
                идей по современным визуальным решениям.
              </p>
            </div>
          </div>
          <img
            class="case-article__heading-image margin-bottom-40"
            src="public/images/imageCaseArticle4.png"
            alt="Заголовок статьи"
          />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Разработали концепт сайта

            <div class="case-article__chapter-content">
              <p>
                Данный концепт собран на основе анализа конкурентов, таких как:
                Ozon, Wildberries, Яндекс.Маркет., Все инструменты, М.видео,
                Летуаль и другие.
              </p>

              <p>
                Сайты были проанализированны на предмет привычек пользователей,
                удобства работы разных решений. Сайты между собой во многом
                схожи, имеют универсальные решения.
              </p>

              <p>
                Мы учли, что опыт использования разных маркетплейсов формирует
                ожидания пользователей, и чтобы не увеличивать когнитивную
                нагрузку на пользователей, разработали сайт с универсальными
                решениями в стиле маркетплейса.
              </p>
            </div>
          </div>
          <img
            id="large-image"
            class="case-article__heading-image margin-bottom-40"
            src="public/images/imageCaseArticle5.png"
            alt="Заголовок статьи"
          />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Первый экран

            <div class="case-article__chapter-content">
              <p class="margin-bottom-40">
                Мы полностью пересобрали первый экран сайта. Адаптировали его
                под маркетплейс. Увеличили количество информации и грамотно
                разделили ее на смысловые блоки.
              </p>

              <div class="icon-marker">
                <p>
                  Хедер. Все важные элементы в хедере расположены на привычных
                  местах для пользователя.
                </p>
              </div>

              <div class="icon-marker">
                <p>
                  Подбор шин. Поставили первым блоком. Туда наш взгляд падает
                  после хедера.
                </p>
              </div>

              <div class="icon-marker">
                <p>
                  Преимущества. После Подбора шин поставили блок с
                  преимуществами авторизации на сайте
                </p>
              </div>

              <div class="icon-marker">
                <p>
                  Баннеры. Поставили один большой баннер со слайдером, ниже 3
                  статичных с долгими акциями. Они же выполняют функцию
                  преимуществ. Прятать все баннеры в один слайдер плохая идея
                  для маркетплейса, поскольку пользователь может не долистать до
                  последнего.
                </p>
              </div>
            </div>
          </div>

          <ArticleSliderMobile :slides="slides" />

          <ArticleSlider :slides="slides" />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Каталог

            <div class="case-article__chapter-content">
              <p>
                Каталог разрабатывался с учетом, что в будущем сайт будет
                расширяться, количество разделов будет увеличиваться. Было
                решено вывести 11 карточек разделов самых популярных, часто
                покупаемых.
              </p>

              <p>
                Последняя карточка дает понимание пользователю,что здесь
                представлен не весь ассортимент и можно перейти на страницу
                всего каталога.
              </p>
            </div>
          </div>
          <img
            class="case-article__heading-image margin-bottom-40"
            src="public/images/imageCaseArticle7.png"
            alt="Заголовок статьи"
          />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Карточка товара

            <div class="case-article__chapter-content">
              <p>
                В данном концепте 6 карточек в ряд. Внутри карточки контент
                разделен на смысловые группы.
              </p>

              <p>
                Небольшие по размеру карточки, позволяют показать больше товаров
                на главной странице. Внутри карточки контент разделен на
                смысловые группы.
              </p>

              <p>
                Иконки “Хит”, “Новинки” выполнены в ярких цветах, выделяющие
                товар среди других.
              </p>

              <p>
                По ховеру появляются кнопки добавления товара в Избранное или в
                Сравнение.
              </p>

              <p>Акции выведены сразу текстом, так их легче считывать.</p>
            </div>
          </div>
          <div class="case-article__split">
            <img
              class="case-article__chapter-image"
              src="public/images/imageCaseArticle8.png"
              alt="Изображение раздела"
            />
            <img
              class="case-article__chapter-image"
              src="public/images/imageCaseArticle9.png"
              alt="Изображение раздела"
            />
          </div>
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Элементы интерфейса

            <div class="case-article__chapter-content">
              <div class="icon-marker">
                <p>
                  B2B блок. В открытом виде указаны преимущества для оптовиков
                </p>
              </div>

              <div class="icon-marker">
                <p>
                  Заголовок – кнопка. Все заголовки, где есть круглая кнопка –
                  кнопка перехода в раздел. В современных интерфейсах все чаще
                  совмещают эти элементы
                </p>
              </div>
            </div>
          </div>
          <img
            class="case-article__heading-image"
            src="public/images/imageCaseArticle10.png"
            alt="Изображение раздела"
          />
        </li>

        <li class="case-article__chapter">
          <div class="article-container">
            Типографика и цвет

            <div class="case-article__chapter-content">
              <p>
                Шрифт Inter без засечек отлично позволяет сосредоточить внимание
                на тексте с помощью своих линий.
              </p>

              <p>
                В концепте использованы корпоративные цвета бренда Kamatyres.
              </p>
            </div>
          </div>
          <img
            class="case-article__chapter-image margin-top"
            src="public/images/imageCaseArticle11.png"
            alt="Изображение раздела"
          />
        </li>
      </ol>
    </div>

    <div class="case-article__footer">
      <div class="container">
        <ol class="case-article__content">
          <li class="case-article__chapter">
            <div class="article-container">
              Результаты

              <div class="case-article__chapter-content">
                <p>
                  Для оперативности мы сначала запускали MVP с базовой
                  функциональностью, а потом дорабатывали. В результате нам
                  удалось создать объёмную цифровую платформу, которая
                  объединяет все продукты и сервисы «Kamatyres», даёт её
                  клиентам полное представление обо всех возможностях, а также
                  обеспечивает удобный доступ в e-commerce часть.
                </p>

                <p>
                  По итогам работ заметно вырос трафик на сайт. Число уникальных
                  посетителей увеличилось почти в 2 раза, по сравнению с 2022
                  годом. При этом количество прямых заходов стало больше в 2,8
                  раз, что свидетельствует о росте узнаваемости нового бренда
                  «Kamatyres».
                </p>
              </div>
            </div>
          </li>

          <li class="case-article__chapter">
            <div class="article-container">
              Команда

              <div class="case-article__chapter-content chapter-team">
                <p>
                  Алексей Петров
                  <span
                    >Руководитель отдела <br />
                    разработки</span
                  >
                </p>

                <p>
                  Тимур Дададжанов
                  <span>Лид-дизайнер</span>
                </p>

                <p>
                  Алиса Сидоренкова
                  <span>UX/UI-дизайнер</span>
                </p>

                <p>
                  Алина Деньщикова
                  <span>UX/UI-дизайнер</span>
                </p>

                <p>
                  Евгений Гусев
                  <span>UX/UI-дизайнер</span>
                </p>
              </div>
            </div>
          </li>

          <li class="case-article__chapter">
            <div class="article-container">
              Стек технологий

              <div class="case-article__chapter-content chapter-team">
                <div>Figma</div>

                <div>Bitrix</div>

                <div>SLIM</div>

                <div>REST AdivI</div>

                <div>React/NextJS</div>

                <div>SWR</div>

                <div>2Gis API</div>
              </div>
            </div>
          </li>

          <li class="case-article__chapter">
            <div class="article-container">
              Награды

              <div class="case-article__chapter-content chapter-team">
                <div class="chapter-wreath">
                  <img
                    class="wreath-left"
                    src="public/images/wreath-left.png"
                    alt="Изображение раздела"
                  />
                  <div>Tagline Awards <span>Золото</span></div>
                  <img
                    id="right"
                    class="wreath-right"
                    src="public/images/wreath-right.png"
                    alt="Изображение раздела"
                  />
                </div>

                <div class="chapter-wreath">
                  <img
                    class="wreath-left"
                    src="public/images/wreath-left.png"
                    alt="Изображение раздела"
                  />
                  <div>Tagline Awards <span>Бронза</span></div>
                  <img
                    id="right"
                    class="wreath-right"
                    src="public/images/wreath-right.png"
                    alt="Изображение раздела"
                  />
                </div>
              </div>
            </div>
          </li>
        </ol>

        <hr class="case-article__line" />

        <div class="case-article__tags">
          <div>Теги <span class="case-article__tag">Веб-разработка</span></div>

          <div>
            Дата
            <span class="case-article__date">20 мая 2024</span>
          </div>

          <div>
            Поделиться
            <div class="case-article__social">
              <a href="#" class="icon-link"></a>
              <a href="#" class="icon-vkontakte"></a>
              <a href="#" class="icon-telegram"></a>
              <a href="#" class="icon-whatsapp"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <TalkUnit
        title="Хотите так же?"
        titleLeft="У меня есть задача. Хочу крутое решение"
        titleRight="Хочу к вам в команду делать классные решения"
      />
    </div>

    <BlogUnit article="case" title="еще кейсы" route="/case" :slider="true" />
  </div>
</template>
