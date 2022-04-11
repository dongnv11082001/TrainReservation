import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Ticket} from '../../types/ticket'
import {useLoading} from '../../context/loadingContext'
import {EditableTable} from '../../components/modules/EditableTable'
import {AdminLayout} from '../../components/modules/AdminLayout'
import {LoadingOverlay} from '../../components/elements/LoadingOverlay'

export const UserManagePage: React.FC = () => {
  const [users, setUsers] = useState<Ticket[]>([])
  const {loading, setLoading} = useLoading()
  const fetchTickets = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/users'
    )
    const data = await response.data
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  if (loading) <LoadingOverlay/>

  return <>
    {!loading && <AdminLayout searchText="Search for users" tableHeading="Ticket management">
      <EditableTable dataSource={users}/>
    </AdminLayout>}
  </>
}