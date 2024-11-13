export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",
  modules: ["@invictus.codes/nuxt-vuetify"],
  runtimeConfig: {
    public: {
      kurocoApiDomain: process.env.API_KEY,
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
