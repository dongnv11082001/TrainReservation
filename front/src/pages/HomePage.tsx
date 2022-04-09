import React, {useEffect, useState} from 'react'
import axios from 'axios'
import HomeLayout from '../components/pages/home/layout'
import customerCare from '../asserts/images/247.svg'
import payment from '../asserts/images/payment.svg'
import bestPrice from '../asserts/images/bestprice.svg'
import {useLoading} from '../context/loadingContext'
import {Ticket} from '../types/ticket'
import {getLocationByLocationKey, getLocationKeyByGeoposition} from '../utils/getLocation'
import {getForecast, getWeatherReport} from '../utils/getWeather'
import {LoadingOverlay} from '../components/elements/LoadingOverlay'


const serviceData = [
  {
    title: 'Support 24/7',
    content: 'Available on holidays.',
    image: customerCare,
  },
  {
    title: 'Convenient and Easy payment',
    content: 'Including banking and cash at the shop.',
    image: payment,
  },
  {
    title: 'Good price on domestic and international',
    content: 'Best price in comparison from domestic and international airlines.',
    image: bestPrice,
  },
]

const HomePage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const {loading, setLoading} = useLoading()
  const [forecast5Day, setForecast5Day] = useState([])
  const [todayCondition, setTodayCondition] = useState([])
  const [currentCity, setCurrentCity] = useState<string>()

  const fetchData = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    const resTickets = await response.data
    // const locationKey = await getLocationKeyByGeoposition()
    // const forecast = await getForecast(locationKey.Key, 5)
    // const condition = await getWeatherReport(locationKey.Key)
    // const city = await getLocationByLocationKey(locationKey.Key)
    // setForecast5Day(forecast)
    // setTodayCondition(condition)
    // setCurrentCity(city)
    setTickets(resTickets)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <LoadingOverlay/>

  return (
    <>
      {!loading && tickets.length &&
          <HomeLayout
            city={currentCity}
            condition={todayCondition}
            forecast={forecast5Day}
            services={serviceData}
            tickets={tickets}
          />
      }
    </>
  )
}
export default HomePage