import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "."),
  },
  modules: ["nuxt-primevue", "nuxt-marquee"],
  primevue: {
    /* Options */
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/scss/main.scss"],
  devtools: { enabled: true },
});
