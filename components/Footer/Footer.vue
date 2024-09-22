<script setup>
import FooterLinks from "./FooterLinks.vue";
import FooterIcons from "./FooterIcons.vue";

import FooterLogo from "../public/images/footer-logo.png";

const servicesLinks = [
  { name: "Веб-разработка", route: "/" },
  { name: "CRM-системы", route: "/" },
  { name: "Сопровождение и развитие", route: "/" },
  { name: "Интернет-маркетинг", route: "/" },
  { name: "Мобильная разработка", route: "/" },
  { name: "Аутстаффинг", route: "/" },
];

const blogLinks = [
  { name: "Контекстная реклама", route: "/" },
  { name: "SEO", route: "/" },
  { name: "SMM", route: "/" },
  { name: "Разработка", route: "/" },
  { name: "CRM", route: "/" },
  { name: "E-commerce", route: "/" },
  { name: "Обсуждение и безопасность", route: "/" },
  { name: "HR", route: "/" },
  { name: "Маркетинг", route: "/" },
];

const companyLinks = [
  { name: "Услуги", route: "/" },
  { name: "Кейсы", route: "/" },
  { name: "Блог", route: "/blog" },
  { name: "Компания", route: "/" },
  { name: "Контакты", route: "/" },
  { name: "Академия", route: "/" },
  { name: "Партнерам", route: "/" },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__references">
          <FooterLinks title="Услуги" :items="servicesLinks" />

          <FooterLinks title="Блог" route="/blog" :items="blogLinks" />

          <FooterLinks title="Компания" :items="companyLinks" />

          <address class="footer__contact">
            <h4 class="footer__services-caption">
              <NuxtLink to="/contacts">Контакты</NuxtLink>
            </h4>
            <ul class="footer__services-list">
              <li>
                <a
                  href="https://yandex.ru/maps/968/cherepovets/house/ulitsa_montkler_20/Z04YfwVjTEYHQFtjfXx5dHtlZQ==/?ll=37.924096%2C59.085603&z=16.82"
                  target="_blank"
                  >г. Череповец, ул. Монтклер, д. 20</a
                >
              </li>
              <li>
                <a
                  href="https://yandex.ru/maps/213/moscow/house/leningradskiy_prospekt_36/Z04YcwJpSkAEQFtvfXt4cH1gYw==/?indoorLevel=1&ll=37.561456%2C55.792286&z=16.69"
                  target="_blank"
                  >г. Москва, пр-кт Ленинградский, д. 36</a
                >
              </li>
              <li><a href="tel:+74951282290">+7 (495) 128-22-90</a></li>
              <li><a href="mailto:info@webest.ru">info@webest.ru</a></li>
            </ul>

            <div class="footer__social">
              <a href="#" target="_blank" class="icon-vkontakte"></a>
              <a href="#" target="_blank" class="icon-telegram"></a>
              <a href="#" target="_blank" class="icon-vcru"></a>
              <a href="#" target="_blank" class="icon-behance"></a>
              <a href="#" target="_blank" class="icon-dprofile"></a>
            </div>

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

          <FooterIcons />
        </section>
      </div>
    </div>
  </footer>
</template>
