const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [
      'e-cdns-images.dzcdn.net',
      'http://localhost:3000/',
      'https://manipulafy.vercel.app',
      'https://manipulafy-git-master-felipesd.vercel.app',
      'https://manipulafy-felipesd.vercel.app'
    ]
  }
});