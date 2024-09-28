<script setup>
import VkLogotype from "~/assets/icons/logoVk.vue";
import ArdaLogo from "~/assets/icons/logoArda.vue";
import WorkspaceLogo from "~/assets/icons/logoWorkspace.vue";
import YandexStarLogo from "~/assets/icons/logoYandexStar.vue";
</script>

<template>
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
        <p class="footer__copyright-insignia-text">Мы на <br />Workspace</p>
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
</template>
