import getWeatherByLocation from '../functions/getWeatherByLocation'
import type { LocationWeatherData } from '../models/LocationWeatherData'

export default async function useWeatherData(location: string): Promise<LocationWeatherData> {
  return await getWeatherByLocation(location)
}
