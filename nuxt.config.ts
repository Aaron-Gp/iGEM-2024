// https://nuxt.com/docs/api/configuration/nuxt-config

const lifecycle = process.env.npm_lifecycle_event
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

  devServer: {
    port: 8080,
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  build: {
    transpile: [
      // https://github.com/element-plus/element-plus-nuxt-starter/blob/44644788ee0d2a2580769769f9885b5cd9f7c0ab/nuxt.config.ts#L27
      ...(lifecycle === 'build' || lifecycle === 'generate'
        ? ['element-plus']
        : []),
    ],
  },

  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },

  elementPlus: {
    importStyle: false,
  },

  css: [
    '~/assets/css/element.scss',
  ],

  colorMode: {
    classSuffix: "",
  },

  content: {
    contentHead: false
  },

  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
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
  },

  compatibilityDate: "2024-07-05"
});