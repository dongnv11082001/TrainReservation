import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {EditableTable} from '../../components/modules/EditableTable'
import {Ticket} from '../../types/ticket'
import {useLoading} from '../../context/loadingContext'
import {AdminLayout} from '../../components/modules/AdminLayout'

export const TicketManagePage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const {setLoading} = useLoading()
  const fetchTickets = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    const data = await response.data
    setTickets(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return <AdminLayout searchText="Search for tickets" tableHeading="Ticket management">
    <EditableTable dataSource={tickets}/>
  </AdminLayout>
}