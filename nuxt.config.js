import { state } from './store'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: {
    routes() {
      return state().subjects.map(s => s.slug)
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDUxIxlXdk8z09xMAlzFdB7GJq6BOzm7Ko',
          authDomain: 'stayathomework-68a56.firebaseapp.com',
          databaseURL: 'https://stayathomework-68a56.firebaseio.com',
          projectId: 'stayathomework-68a56',
          storageBucket: 'stayathomework-68a56.appspot.com',
          messagingSenderId: '182090476433',
          appId: '1:182090476433:web:6ac209ee2a490086ff8830',
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
            },
          },
          firestore: true
        }
      }
    ]
  ],

  router: {
    linkExactActiveClass: 'text-white bg-indigo-900'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
