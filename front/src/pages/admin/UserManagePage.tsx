import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Ticket} from '../../types/ticket'
import {useLoading} from '../../context/loadingContext'
import {EditableTable} from '../../components/modules/EditableTable'
import {AdminLayout} from '../../components/modules/AdminLayout'

export const UserManagePage: React.FC = () => {
  const [users, setUsers] = useState<Ticket[]>([])
  const {setLoading} = useLoading()
  const fetchTickets = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    const data = await response.data
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return <AdminLayout searchText="Search for users" tableHeading="Ticket management">
    <EditableTable dataSource={users}/>
  </AdminLayout>
}