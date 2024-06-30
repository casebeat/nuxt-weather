import { defineEventHandler, getQuery } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { location } = getQuery(event)

  // if location is not provided, return bad request
  if (!location) {
    return {
      statusCode: 400,
      body: 'Location is required',
    }
  }

  return await getWeatherData(location?.toString())
})

async function getWeatherData(location: string) {
  // get api key from enivronment variable
  const options = useRuntimeConfig().private.nuxtWeather

  const apiKey = options.apiKey

  if (!apiKey) {
    throw new Error('Weather API key is required')
  }
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`

  const response = await fetch(url)
  const data = await response.json()
  return data
}
