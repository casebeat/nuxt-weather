<template>
  <div>
    <CurrentWeather
      location="Stockholm"
      scale="c"
    />
  </div>
  <div v-if="currentWeatherData">
    <ul>
      <li>Name: {{ currentWeatherData.name }}°C</li>
      <li>Country: {{ currentWeatherData.country }}</li>
      <li>Celsius: {{ currentWeatherData.weather.temperatureCelcius }}°C</li>
      <li>Fahrenheit: {{ currentWeatherData.weather.temperatureFahrenheit }}°F</li>
      <li>Condition: {{ currentWeatherData.weather.conditionText }}</li>
      <li>Icon: {{ currentWeatherData.weather.conditionIcon }}</li>
    </ul>
  </div>
  <div v-else>
    <p>Failed to get weather</p>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' }],
})

const { data: currentWeatherData } = await useWeatherData('Stockholm')
</script>
