
export default defineNuxtConfig({
  app: {
    // 本地部署注释下面这句
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

  css: ['~/assets/css/element.scss'],

  typescript: {
    strict: true,
    shim: false,
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    "@nuxtjs/tailwindcss",
    'nuxt-anchorscroll',
    '@tresjs/nuxt',
    'nuxt-aos',
  ],
  
  tres: {
    devtools: true,
  },

  vueuse: {
    ssrHandlers: true,
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    contentHead: false,
    markdown: {
      anchorLinks: false,
    }
  },

  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },

  elementPlus: {
    importStyle: false,
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

  vite: {
    server: {
      hmr: {
        clientPort: 8080
      },
    }
  },

})
