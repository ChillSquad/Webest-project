<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Vk from "./icons/IconVk.vue";
import Telegram from "./icons/IconTelegram.vue";
import Vc from "./icons/IconVc.vue";
import Behance from "./icons/IconBehance.vue";
import Dprofile from "./icons/IconDprofile.vue";
import ArrowRightUpLine from "./icons/IconArrowRightUpLine.vue";
import VkLogotype from "./icons/LogoVk.vue";
import YandexStarLogo from "./icons/LogoYandexStar.vue";
import WorkspaceLogo from "./icons/LogoWorkspace.vue";
import ArdaLogo from "./icons/LogoArda.vue";

import FooterLogo from "../public/images/footer-logo.png";
import FooterLogoSmall from "../public/images/footer-logo-small.png";
import FooterLogoMini from "../public/images/footer-logo-mini.png";
import FooterLogoMicro from "../public/images/footer-logo-micro.png";

// Реактивное свойство для логотипа
const currentFooterLogo = ref(FooterLogo);

// Функция для обновления логотипа в зависимости от ширины экрана
const updateLogo = () => {
  if (window.innerWidth <= 900) {
    currentFooterLogo.value = FooterLogoMicro;
  } else if (window.innerWidth <= 1300) {
    currentFooterLogo.value = FooterLogoMini;
  } else if (window.innerWidth <= 1800) {
    currentFooterLogo.value = FooterLogoSmall;
  } else {
    currentFooterLogo.value = FooterLogo;
  }
};

// Выполняем проверку и подписываемся на событие изменения размера окна
onMounted(() => {
  updateLogo(); // Изначальная проверка при монтировании
  window.addEventListener("resize", updateLogo);
});

// Отписываемся от события при размонтировании компонента
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLogo);
});
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__references">
          <section class="footer__services">
            <h4>УСЛУГИ</h4>
            <ul>
              <li><a href="#">Веб-разработка</a></li>
              <li><a href="#">CRM-системы</a></li>
              <li><a href="#">Сопровождение и развитие</a></li>
              <li><a href="#">Интернет-маркетинг</a></li>
              <li><a href="#">Мобильная разработка</a></li>
              <li><a href="#">Аутстаффинг</a></li>
            </ul>
          </section>

          <section class="footer__blog">
            <h4>БЛОГ</h4>
            <ul>
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
            <h4>КОМПАНИЯ</h4>
            <ul>
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
              <h4>КОНТАКТЫ</h4>
              <ul>
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
                    <a href="#"><Telegram /></a>
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
              <a href="#">Скачать презентацию -pdf, 3mb <ArrowRightUpLine /></a>
            </div>
          </div>
        </div>

        <div class="footer__logo-footer">
          <img :src="currentFooterLogo" alt="logo-footer" />
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
