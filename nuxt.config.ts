export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  modules: ["@invictus.codes/nuxt-vuetify"],
  runtimeConfig: {
    public: {
      kurocoApiDomain: "https://mf-suzuki.g.kuroco.app",
    },
  },
});
