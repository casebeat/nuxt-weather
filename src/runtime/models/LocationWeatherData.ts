import type { WeatherData } from './WeatherData'

export type LocationWeatherData = {
  name: string
  country: string
  timezone: string
  weather: WeatherData
}
