import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "."),
  },
  modules: ["nuxt-primevue"],
  primevue: {
    /* Options */
  },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/scss/main.scss"],
  devtools: { enabled: true },
});
