export default defineNuxtConfig({
  ssr: true,
  target: "static",
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/"],
    },
  },
  srcDir: "src/",
  modules: ["@invictus.codes/nuxt-vuetify"],
  runtimeConfig: {
    public: {
      kurocoApiDomain: "https://kuroco.s35gyllt.net/",
    },
  },
  app: {
    head: {
      title: "kuroco deploy test🥷💭",
      meta: [{ name: "description", content: "kuroco CMS" }],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
});
