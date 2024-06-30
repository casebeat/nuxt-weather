export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  runtimeConfig: {
    private: {
      nuxtWeather: {
        apiKey: process.env.WEATHER_API_KEY,
      },
    },
  },
})
