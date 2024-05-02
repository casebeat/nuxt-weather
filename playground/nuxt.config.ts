export default defineNuxtConfig({
  modules: ['../src/module'],
  // nuxtWeather: {
  //   apiKey: process.env.WEATHER_API_KEY,
  // },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      nuxtWeather: {
        apiKey: process.env.WEATHER_API_KEY,
      },
    },
  },
})
