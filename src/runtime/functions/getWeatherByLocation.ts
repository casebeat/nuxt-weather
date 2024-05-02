// get weather function
import type { LocationWeatherData } from '../models/LocationWeatherData'
import type { WeatherApiResponse } from '../models/WeatherApiResponse'

export default async function getWeatherData(location: string) {
  const apiResponse = await $fetch(`/api/weather/?location=${location}`) as WeatherApiResponse

  if (!apiResponse) {
    throw new Error('Failed to fetch weather data')
  }  

  const weatherData: LocationWeatherData = {
    name: apiResponse.location.name,
    country: apiResponse.location.country,
    timezone: apiResponse.location.tz_id,
    weather: {
      temperatureCelcius: apiResponse.current.temp_c,
      temperatureFahrenheit: apiResponse.current.temp_f,
      conditionText: apiResponse.current.condition.text,
      conditionIcon: apiResponse.current.condition.icon,
    },
  }

  return weatherData
}
