<template>
  <div>
    <CurrentWeather location="Stockholm" scale="c" />
  </div>
  <div>    
    <ul>
      <li>Name: {{ currentWeatherData.name }}°C</li>
      <li>Country: {{ currentWeatherData.country }}</li>
      <li>Celsius: {{ currentWeatherData.weather.temperatureCelcius }}°C</li>
      <li>Fahrenheit: {{ currentWeatherData.weather.temperatureFahrenheit }}°F</li>
      <li>Condition: {{ currentWeatherData.weather.conditionText }}</li>
      <li>Icon: {{ currentWeatherData.weather.conditionIcon }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' }],
})

const currentWeatherData = await useWeatherData('Stockholm')

</script>
