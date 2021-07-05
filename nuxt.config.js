import { I18N } from './config/i18n.js';

const HEAD = {
  title: 'Kidz55',
  shortTitle: 'Welcom to the grid',
  description: '',
  image: 'https://www.kidz55.com/images/ban.png',
  url: 'https:///www.kidz55.com',
  twitter: '@tgloague'
};

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'TDAWG_CV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:image', name: 'og:image', content: HEAD.image },
      //  Facebook
      { name: 'og:url', content: HEAD.url },
      { name: 'og:site_name', content: HEAD.title },
      { name: 'og:type', content: 'website' },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: HEAD.twitter },
      { name: 'twitter:creator', content: HEAD.twitter },
      { name: 'theme-color', content: '#ab38bc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '@/assets/styles/main.scss', lang: 'scss' }],
  styleResources: {
    scss: [
      '@/assets/styles/_settings.scss',
      '~/assets/styles/utilities/_all.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [['nuxt-i18n', I18N], '@nuxtjs/style-resources', 'nuxt-svg-loader'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
