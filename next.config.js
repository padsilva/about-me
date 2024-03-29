const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['media.graphcms.com']
  }
})
