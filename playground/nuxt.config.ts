export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      nuxtWeather: {
        apiKey: process.env.WEATHER_API_KEY,
      },
    },
  },
})
