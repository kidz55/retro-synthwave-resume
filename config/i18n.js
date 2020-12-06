const en = require('../content/en-US.js')

const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }
  ],
  parsePages: false,
  defaultLocale: 'en',
  strategy: 'prefix_except_default',
  differentDomains: false,
  lazy: false,
  seo: true,
  vuex: false,
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en },
    silentTranslationWarn: true
  }
}

module.exports = {
  I18N
}
