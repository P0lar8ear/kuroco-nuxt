export default defineNuxtConfig({
  ssr: true,
  target: "static",
  srcDir: "src/",
  modules: ["@invictus.codes/nuxt-vuetify"],
  runtimeConfig: {
    public: {
      kurocoApiDomain: "https://mf-suzuki.g.kuroco.app",
    },
  },
  app: {
    head: {
      title: "kuroco deploy test🥷💭",
      meta: [{ name: "description", content: "kuroco CMS" }],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
      exclude: ["/api"], // /apiルートを除外する場合
    },
  },
});
