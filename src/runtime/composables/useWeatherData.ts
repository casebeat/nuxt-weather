import getWeatherByLocation from '../functions/getWeatherByLocation'
import type { LocationWeatherData } from '../models/LocationWeatherData'
// import type { AsyncData, AsyncDataOptions } from 'nuxt/app'

export default async function useWeatherData(location: string): Promise<LocationWeatherData> {
  return useAsyncData(location, () => getWeatherByLocation(location))
  // return await getWeatherByLocation(location)
}
