<script setup>
import VkLogotype from "../assets/icons/logoVk.vue";
import YandexStarLogo from "../assets/icons/logoYandexStar.vue";
import WorkspaceLogo from "../assets/icons/logoWorkspace.vue";
import ArdaLogo from "../assets/icons/logoArda.vue";

import FooterLogo from "../public/images/footer-logo.png";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__references">
          <section class="footer__services">
            <h4 class="footer__services-caption">услуги</h4>
            <ul class="footer__services-list">
              <li><a href="#">Веб-разработка</a></li>
              <li><a href="#">CRM-системы</a></li>
              <li><a href="#">Сопровождение и развитие</a></li>
              <li><a href="#">Интернет-маркетинг</a></li>
              <li><a href="#">Мобильная разработка</a></li>
              <li><a href="#">Аутстаффинг</a></li>
            </ul>
          </section>

          <section class="footer__blog">
            <h4 class="footer__services-caption">
              <NuxtLink to="/blog">блог</NuxtLink>
            </h4>
            <ul class="footer__services-list">
              <li><a href="#">Контекстная реклама</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">SMM</a></li>
              <li><a href="#">Разработка</a></li>
              <li><a href="#">CRM</a></li>
              <li><a href="#">E-commerce</a></li>
              <li><a href="#">Обсуждение и безопастность</a></li>
              <li><a href="#">HR</a></li>
              <li><a href="#">Маркетинг</a></li>
            </ul>
          </section>

          <nav class="footer__nav">
            <h4 class="footer__services-caption">компания</h4>
            <ul class="footer__services-list">
              <li><a href="#">Услуги</a></li>
              <li><a href="#">Кейсы</a></li>
              <li><NuxtLink to="/blog">Блог</NuxtLink></li>
              <li><a href="#">Компания</a></li>
              <li><a href="#">Контакты</a></li>
              <li>
                <a href="#" class="icon-arrow-right-up">Академия</a>
              </li>
              <li>
                <a href="#" class="icon-arrow-right-up">Партнерам</a>
              </li>
            </ul>
          </nav>

          <address class="footer__contact">
            <h4 class="footer__services-caption">контакты</h4>
            <ul class="footer__services-list">
              <li><a href="#">г. Москва, пр-кт Ленинградский, д. 36</a></li>
              <li><a href="#">г. Череповец, ул. Монтклер, д. 20</a></li>
              <li>
                <a href="tel:+74951282290"> +7 (495) 128-22-90 </a>
              </li>
              <li>
                <a href="mailto:info@webest.ru">info@webest.ru </a>
              </li>
              <section class="footer__social">
                <li>
                  <a href="#" class="icon-vkontakte"></a>
                </li>
                <li>
                  <a href="#" class="icon-telegram"></a>
                </li>
                <li>
                  <a href="#" class="icon-vcru"></a>
                </li>
                <li>
                  <a href="#" class="icon-behance"></a>
                </li>
                <li>
                  <a href="#" class="icon-dprofile"></a>
                </li>
              </section>
            </ul>

            <div class="footer__presentation">
              <a href="#" class="icon-arrow-right-up"
                >Скачать презентацию <span>- pdf, 3mb</span></a
              >
            </div>
          </address>
        </div>

        <div class="footer__logo-footer">
          <img :src="FooterLogo" alt="logo-footer" />
        </div>

        <section class="footer__copyright">
          <p class="footer__copyright-logo">© 2024, Webest</p>
          <div class="footer__copyright-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Реквизиты</a>
          </div>
          <section class="footer__copyright-insignia">
            <ul>
              <li>
                <YandexStarLogo />
                <p class="footer__copyright-insignia-text">
                  Сертифицировано <br />Яндексом
                </p>
              </li>

              <li>
                <WorkspaceLogo />
                <p class="footer__copyright-insignia-text">
                  Мы на <br />Workspace
                </p>
              </li>

              <li>
                <VkLogotype />
                <p class="footer__copyright-insignia-text">
                  Верифицировано <br />Вконтакте
                </p>
              </li>

              <li>
                <ArdaLogo />
                <p class="footer__copyright-insignia-text">
                  Участник ассоциации <br />развития Digital-агенств
                </p>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  </footer>
</template>
