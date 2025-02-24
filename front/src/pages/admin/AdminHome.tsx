import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Table, Typography} from 'antd'
import {useLoading} from '../../context/loadingContext'
import {Ticket} from '../../types/ticket'
import {AdminLayout, Spacing} from '../../components/modules/AdminLayout'
import {Offer} from '../../types/offer'
import {User} from '../../types/user'
import {LoadingOverlay} from '../../components/elements/LoadingOverlay'
import {EditableTable} from '../../components/modules/EditableTable'

type Item = Offer | Ticket | User

const {Title} = Typography

export const AdminHome: React.FC = () => {
  const [data, setData] = useState<Ticket[]>([])
  const {loading, setLoading} = useLoading()

  const createColumn = (sampleData: Item, columnWith?: string[]) => {
    const dataKeys = Object.keys(sampleData)
    return dataKeys.map((key, index) => (
      {
        title: key.toUpperCase(),
        dataIndex: key,
        key: key,
        width: columnWith && columnWith[index],
        editable: true
      }
    ))
  }

  const fetchTickets = async () => {
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    const data = await response.data
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  if (loading) return <LoadingOverlay/>

  return (
    <>
      {!loading && <AdminLayout>
        <Spacing>
          <Title level={3}>Tickets Management</Title>
          <EditableTable dataSource={data}/>
          <Title level={3}>Offers Management</Title>
          <EditableTable dataSource={data}/>
          <Title level={3}>Users Management</Title>
          <EditableTable dataSource={data}/>
        </Spacing>
      </AdminLayout>}
    </>
  )
}
