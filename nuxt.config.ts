export default defineNuxtConfig({
  //ssr: true,
  srcDir: "src/",
  modules: ["@invictus.codes/nuxt-vuetify"],
  runtimeConfig: {
    public: {
      kurocoApiDomain: process.env.API_KEY,
      apiAccessToken:
        "a03a3a3585a02cd532f14227daa12256a021dbd411fc9b26b2b05aae90f36cd9",
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
