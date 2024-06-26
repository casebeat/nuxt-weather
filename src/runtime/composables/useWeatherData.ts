import getWeatherByLocation from '../functions/getWeatherByLocation'

export default async function useWeatherData(location: string) {
    return await getWeatherByLocation(location)
}