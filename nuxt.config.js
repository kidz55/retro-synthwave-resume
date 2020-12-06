import { I18N } from './config/i18n.js';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'TDAWG_CV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"'}],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      },
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
