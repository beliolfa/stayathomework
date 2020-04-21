import en from './locales/en-US'
import es from './locales/es-ES'

export const I18N = {
  locales: ['es', 'en'],
  defaultLocale: 'es',
  vueI18n: {
    fallbackLocale: 'es',
    messages: {
      en,
      es,
    },
  },
}
