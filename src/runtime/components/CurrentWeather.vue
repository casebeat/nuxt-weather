<template>
  <div>
    <div
      v-if="weatherData"
      class="weather-data"
    >
      <h4>{{ weatherData.name }} </h4>
      <span v-if="scale=='c'">{{ weatherData.weather.temperatureCelcius }} °C</span>
      <span v-if="scale=='f'">{{ weatherData.weather.temperatureFahrenheit }} °F</span>
      <span :title="weatherData.weather.conditionText"><img :src="weatherData.weather.conditionIcon"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import getWeatherByLocation from '../functions/getWeatherByLocation'
import { useAsyncData } from '#imports'

const props = defineProps({
  location: {
    required: true,
    type: String,
  },
  scale: {
    type: String,
    default: 'c',
  },

})

const { data: weatherData } = await useAsyncData(async () => {
  return await getWeatherByLocation(props.location?.toString())
})
</script>
