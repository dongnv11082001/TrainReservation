import axios from 'axios'

export const getWeatherReport = async (locationKey: string) => {
  const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&details=true`
  const response = await axios.get(baseURL + query)
  return response.data[0]
}
export const getForecast = async (locationKey: string, day: number) => {
  const baseURL = `http://dataservice.accuweather.com/forecasts/v1/daily/${day}day/`
  const query = `${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&details=true`
  const response = await axios.get(baseURL + query)
  return response.data
}
