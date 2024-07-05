// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/bit/",
    buildAssetsDir: "/static/",
    head: {
      title: "BIT iGEM 2024 - Wiki",
      meta: [
        { name: "description", content: "iGEM 2024 Team Wiki of Bit." },
        { name: "keywords", content: "bit, igem, 2024, wiki" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "https://static.igem.wiki/teams/5358/icons/favicon.ico" },
      ]
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "radix-vue/nuxt",
    "@nuxt/image",
    "@hypernym/nuxt-anime",
    "nuxt-aos"
  ],
  colorMode: {
    classSuffix: "",
  },
  content: {
    contentHead: false
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  image: {
    providers: {
      myProvider: {
        name: 'iGEM',
        provider: '~/providers/igem.ts',
        options: {
          baseURL: "https://static.igem.wiki/teams/5358"
        }
      }
    }
  }
});