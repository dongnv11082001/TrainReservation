import React, {useEffect, useState} from 'react'
import {AdminLayout} from '../../components/elements/AdminLayout'
import {EditableTable} from '../../components/modules/EditableTable'
import {Ticket} from '../../types/ticket'
import {useLoading} from '../../context/loadingContext'
import axios from 'axios'

export const OfferManagePage: React.FC = () => {
  const [offers, setOffers] = useState<Ticket[]>([])
  const {setLoading} = useLoading()
  
  const fetchTickets = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    const data = await response.data
    setOffers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return (
    <AdminLayout searchText="Search for offers" tableHeading="Offer management">
      <EditableTable dataSource={offers}/>
    </AdminLayout>
  )
}