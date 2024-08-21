<script setup>
import Vk from "./icons/iconVk.vue";
import IconTelegram from "./icons/iconTelegram.vue";
import Vc from "./icons/iconVc.vue";
import Behance from "./icons/iconBehance.vue";
import Dprofile from "./icons/iconDprofile.vue";
import ArrowRightUpLine from "./icons/iconArrowRightUpLine.vue";
import VkLogotype from "./icons/logoVk.vue";
import YandexStarLogo from "./icons/logoYandexStar.vue";
import WorkspaceLogo from "./icons/logoWorkspace.vue";
import ArdaLogo from "./icons/logoArda.vue";

import FooterLogo from "../public/images/footer-logo.png";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__references">
          <section class="footer__services">
            <h4 class="footer__services-caption">УСЛУГИ</h4>
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
            <h4 class="footer__services-caption">БЛОГ</h4>
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
            <h4 class="footer__services-caption">КОМПАНИЯ</h4>
            <ul class="footer__services-list">
              <li><a href="#">Услуги</a></li>
              <li><a href="#">Кейсы</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Компания</a></li>
              <li><a href="#">Контакты</a></li>
              <li>
                <a href="#">Академия <ArrowRightUpLine /></a>
              </li>
              <li>
                <a href="#">Партнерам <ArrowRightUpLine /></a>
              </li>
            </ul>
          </nav>

          <div class="footer__touch">
            <address class="footer__contact">
              <h4 class="footer__services-caption">КОНТАКТЫ</h4>
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
                    <a href="#"><Vk /></a>
                  </li>
                  <li>
                    <a href="#"><IconTelegram /></a>
                  </li>
                  <li>
                    <a href="#"><Vc /></a>
                  </li>
                  <li>
                    <a href="#"><Behance /></a>
                  </li>
                  <li>
                    <a href="#"><Dprofile /></a>
                  </li>
                </section>
              </ul>
            </address>

            <div class="footer__presentation">
              <a href="#"
                >Скачать презентацию <span>-pdf, 3mb <ArrowRightUpLine /></span
              ></a>
            </div>
          </div>
        </div>

        <div class="footer__logo-footer">
          <img :src="FooterLogo" alt="logo-footer" />
        </div>

        <section class="footer__copyright">
          <p>© 2024, Webest</p>
          <div class="footer__copyright-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Реквизиты</a>
          </div>
          <section class="footer__copyright-insignia">
            <ul>
              <li>
                <YandexStarLogo />
                <p>Сертифицировано <span>Яндексом</span></p>
              </li>
              <li>
                <VkLogotype />
                <p>Верифицировано <span>Вконтакте</span></p>
              </li>
              <li>
                <WorkspaceLogo />
                <p>Мы на <span>Workspace</span></p>
              </li>
              <li>
                <ArdaLogo />
                <p>Участник ассоциации <span>развития Digital-агенств</span></p>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  </footer>
</template>
