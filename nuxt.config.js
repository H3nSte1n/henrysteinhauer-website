import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, IMAGE_URL, IMAGE_WIDTH, IMAGE_HEIGHT } from './lib/seo';

export default {
  serverMiddleware: [
    // TODO: activate
    // 'redirect-ssl',
    { path: '/api/github-stats', handler: '~/api/github-stats.ts' },
  ],
  head: {
    title: HOME_TITLE,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-70x70.png' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-310x310.png' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-144x144.png' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-150x150.png' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: HOME_DESCRIPTION },
      { hid: 'og:title', property: 'og:title', content: HOME_TITLE },
      { hid: 'og:description', property: 'og:description', content: HOME_DESCRIPTION },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Henry Steinhauer' },
      { hid: 'og:image', property: 'og:image', content: IMAGE_URL },
      { hid: 'og:image:width', property: 'og:image:width', content: IMAGE_WIDTH },
      { hid: 'og:image:height', property: 'og:image:height', content: IMAGE_HEIGHT },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Henry Steinhauer, backend software engineer' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: HOME_TITLE },
      { hid: 'twitter:description', name: 'twitter:description', content: HOME_DESCRIPTION },
      { hid: 'twitter:image', name: 'twitter:image', content: IMAGE_URL },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/fav/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/fav/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/fav/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/fav/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/fav/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/fav/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/fav/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/fav/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/fav/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/fav/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/fav/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/fav/favicon-96x96.png' },
      { rel: 'manifest', href: '/assets/fav/manifest.json' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~fonts/global.scss'],

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/color-mode'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sitemap'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: SITE_URL,
    exclude: ['/impressum'],
  },
};
