import axios from 'axios'

//This JS file will help getting location key to append to weather api

export const getLocationKeyByCity = async (city: string) => {
  const baseURL =
    'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${process.env.REACT_APP_API_KEY}&q=${city}`
  const response = await axios.get(baseURL + query)
  return response.data[0]
}

export const getLocationByLocationKey = async (key: string) => {
  const baseURL = 'http://dataservice.accuweather.com/locations/v1/'
  const query = `${key}?apikey=${process.env.REACT_APP_API_KEY}`
  const response = await axios.get(baseURL + query)
  const data = response.data
  return `${data.EnglishName} - ${data.AdministrativeArea.EnglishName} - ${data.Country.EnglishName}`
}

export const getLocationKeyByGeoposition = async () => {
  const position: any = await getCoords()
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  const baseURL =
    'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search'
  const query = `?apikey=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}`
  const response = await axios.get(baseURL + query)
  return response.data
}

const getCoords = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    )
  })
}
