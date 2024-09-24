<script setup>
import ArticleSliderMobile from "~/components/UI-kit/ArticleSliderMobile.vue";
import ArticleSlider from "~/components/UI-kit/ArticleSlider.vue";
import BlogUnit from "~/components/BlogPage/BlogUnit.vue";

const images = [
  { src: "/images/imageBlogArticle5.png" },
  { src: "/images/imageBlogArticle1.png" },
  { src: "/images/imageBlogArticle2.png" },
  { src: "/images/imageBlogArticle5.png" },
  { src: "/images/imageBlogArticle1.png" },
];
</script>

<template>
  <div class="blog-article">
    <div class="article-container">
      <div class="blog-article__heading">
        <div class="blog-article__title">
          Когда компании нужен оптовый портал для поставщиков: 6 причин создания
          торговой площадки
        </div>

        <div class="blog-article__subtitle">
          По данным Gartner, к 2025 году 80% взаимодействий B2B-продаж между
          поставщиками и покупателями будут происходить в цифровом формате. Как
          определить, что торговой компании нужен B2B-портал?
        </div>

        <img
          class="blog-article__heading-image"
          src="public/images/imageBlog1.png"
          alt="Заголовок статьи"
        />
      </div>

      <div class="blog-article__intro">
        <p class="blog-article__intro-heading">
          Основные инструменты для анализа позиций сайта
        </p>

        <div class="blog-article__intro-content">
          <p>
            Даже сайты с качественным контентом могут потерять свою позицию в
            результатах поиска, если их не мониторить, не анализировать и не
            обновлять.
          </p>

          <p>
            В этой статье мы рассмотрим ключевые инструменты для анализа позиций
            сайта, погрузимся в детали их функционала и обсудим, почему
            необходимо регулярно проводить такие аудиты.
          </p>

          <p>
            Чтобы эффективно мониторить и улучшать позиции вашего веб-ресурса,
            вам потребуются специализированные инструменты. Рассмотрим основные
            из них.
          </p>
        </div>
      </div>

      <ol class="blog-article__content">
        <li class="blog-article__chapter">
          MegaIndex

          <div class="blog-article__chapter-content">
            <div class="icon-marker">
              <p>
                Основные возможности: широкий набор инструментов для добавления
                запросов, проведения кластеризации и отображения позиций
                веб-сайта.
              </p>
            </div>

            <div class="icon-marker">
              <p>
                Особенности: максимальная видимость в ПС до 100; при выходе за
                пределы видимости – отображается 100+.
              </p>
            </div>

            <div class="icon-marker">
              <p>
                Дополнительные преимущества <a href="#" target="_blank"
                  >MegaIndex</a
                >: рекомендации для улучшения работы молодых сайтов; возможность
                сравнения своих показателей с конкурентами.
              </p>
            </div>
          </div>

          <img
            class="blog-article__chapter-image"
            src="public/images/imageBlogArticle1.png"
            alt="Изображение раздела"
          />
        </li>

        <li class="blog-article__chapter">
          Serphunt

          <img
            class="blog-article__chapter-image margin-top-40"
            src="public/images/imageBlogArticle2.png"
            alt="Изображение раздела"
          />

          <div class="blog-article__chapter-content">
            <p>
              Сервис предлагает анализ позиций сайта в поисковиках и управление
              проектами SEO. Каждый зарегистрированный пользователь получает
              тариф "Старт", который предоставляет 500 бесплатных проверок
              ежемесячно. Сервис
              <a href="#" target="_blank">Serphunt</a>
              позволяет добавлять проекты, указывать ключевые слова, выбирать
              поисковики и отслеживать позиции в выдаче.
            </p>
          </div>

          <div class="blog-article__split">
            <img
              class="blog-article__chapter-image"
              src="public/images/imageBlogArticle3.png"
              alt="Изображение раздела"
            />
            <img
              class="blog-article__chapter-image"
              src="public/images/imageBlogArticle4.png"
              alt="Изображение раздела"
            />
          </div>
        </li>

        <li class="blog-article__chapter">
          SEOlib

          <ArticleSliderMobile :images="images" />

          <ArticleSlider :images="images" />

          <div class="blog-article__chapter-content margin-bottom">
            <p>
              <a href="#" target="_blank">SEOlib</a> предлагает своим
              пользователям широкий спектр функций, включая анализ сайта,
              проверку позиций, индексацию, трафик и многое другое. Имеет
              простой интерфейс и предлагает различные тарифные планы.
            </p>

            <p>Вот наш список плюсов и минусов данного сервиса:</p>

            <p class="blog-article__headline">Плюсы:</p>

            <div class="blog-article__list">
              <p>1</p>
              <p>
                Основные возможности: широкий набор инструментов для добавления
                запросов, проведения кластеризации и отображения позиций
                веб-сайта.
              </p>
            </div>

            <div class="blog-article__list">
              <p>2</p>
              <p>
                Широкий набор инструментов для анализа и отслеживания позиций
                сайта, включая анализ сайта, проверку позиций, индексаций,
                трафика и другие.
              </p>
            </div>

            <div class="blog-article__list">
              <p>3</p>
              <p>
                Простой интерфейс, что делает использование сервиса удобным для
                новых пользователей.
              </p>
            </div>

            <div class="blog-article__list">
              <p>4</p>
              <p>
                Сервис предлагает бонусы и скидки для зарегистрированных
                пользователей, что позволяет сэкономить на услугах сервиса.
              </p>
            </div>
          </div>
        </li>

        <li class="blog-article__chapter">
          RUSH ANALYTICS

          <div class="blog-article__chapter-content margin-bottom">
            <p>
              <a href="#" target="_blank">RUSH ANALYTICS</a> — современный и
              многофункциональный инструмент для анализа позиций сайта в
              поисковых системах. Предоставляет широкий спектр возможностей для
              мониторинга и оптимизации вашего веб-ресурса в поисковых системах.
            </p>

            <p class="blog-article__plate">
              RUSH ANALYTICS также предлагает детализированные отчеты и
              аналитику, которые помогут вам принимать обоснованные решения по
              оптимизации веб-ресурса для поисковых систем.
              <span>Дмитрий Чистяков, CEO Webest</span>
            </p>
          </div>
        </li>

        <div class="blog-article__chapter">
          Заголовок

          <div class="blog-article__chapter-content">
            <p>
              Предпроектный анализ необходим для понимания, какой нужно сделать
              продукт, чтобы он был конкурентоспособным, решал задачи бизнеса и
              отвечал ожиданиям целевой аудитории.
            </p>

            <p>
              Системная предпроектная работа проводится в нашем агентстве, чтобы
              понять наличие проблемы и найти лучшие варианты ее решения.
              <a href="#" target="_blank">Разработку интернет-магазина</a>
              начинаем с “прощупывания почвы” — тщательного анализа, чтобы
              сформировать образ проекта и составить грамотное техническое
              задание на его разработку.
            </p>

            <p class="margin-top-20">
              Опыт создания более 100 проектов позволил нам сформировать
              алгоритм, который мы используем для предпроектного анализа:
            </p>

            <div class="blog-article__list">
              <p>1</p>
              <p>Общение с клиентом</p>
            </div>

            <div class="blog-article__list">
              <p>2</p>
              <p>Образ проекта и дизайн-концепция</p>
            </div>

            <div class="margin-left-24">
              <div class="icon-marker">
                <p>Функционал и визуал проекта на основе референсов</p>
              </div>
            </div>

            <div class="blog-article__list">
              <p>3</p>
              <p>Бенчмаркинг</p>
            </div>

            <div class="margin-left-24">
              <div class="icon-marker">
                <p>Исследование рынка</p>
              </div>

              <div class="icon-marker">
                <p>Исследование ЦА</p>
              </div>

              <div class="icon-marker">
                <p>Анализ клиента и конкурентов</p>
              </div>

              <div class="icon-marker">
                <p>Формирование требований к проекту</p>
              </div>
            </div>

            <div class="blog-article__list">
              <p>4</p>
              <p>Анализ поискового спроса</p>
            </div>

            <div class="blog-article__list">
              <p>5</p>
              <p>Анализ клиентского опыта</p>
            </div>

            <div class="blog-article__list">
              <p>6</p>
              <p>Выводы</p>
            </div>
          </div>
        </div>
      </ol>

      <div class="blog-article__footer">
        <hr class="blog-article__line" />

        <div class="blog-article__tags">
          <div>Теги <span class="blog-article__tag">SEO</span></div>

          <div>
            Дата
            <span class="blog-article__date">20 мая 2024</span>
          </div>

          <div>
            Поделиться
            <div class="blog-article__social">
              <a href="#" class="icon-link"></a>
              <a href="#" class="icon-vkontakte"></a>
              <a href="#" class="icon-telegram"></a>
              <a href="#" class="icon-whatsapp"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BlogUnit title="Что еще почитать" />
  </div>
</template>
