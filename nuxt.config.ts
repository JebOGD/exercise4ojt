export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/plugins/axios.js'],
  modules: ['@pinia/nuxt'],
  css: ['~/assets/styles.css']
});