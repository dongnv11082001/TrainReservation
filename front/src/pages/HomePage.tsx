import React, {useEffect, useState} from 'react'
import axios from 'axios'

import HomeLayout from '../components/pages/home/layout'
import customerCare from '../asserts/images/247.svg'
import payment from '../asserts/images/payment.svg'
import bestPrice from '../asserts/images/bestprice.svg'
import {useLoading} from '../context/loadingContext'
import {Ticket} from '../types/ticket'

const serviceData = [
  {
    title: 'Support 24/7',
    content:
      'Available on holidays.',
    image: customerCare,
  },
  {
    title: 'Convenient and Easy payment',
    content: 'Including banking and cash at the shop.',
    image: payment,
  },
  {
    title: 'Good price on domestic and international',
    content:
      'Best price in comparison from domestic and international airlines.',
    image: bestPrice,
  },
]

const HomePage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const {setLoading} = useLoading()

  const fetchDeals = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    const data = await response.data
    setLoading(false)
    setTickets(data)
  }

  useEffect(() => {
    fetchDeals()
  }, [])

  return (
    <HomeLayout services={serviceData} tickets={tickets}/>
  )
}
export default HomePage