import React from 'react'
import {Space, Table} from 'antd'
import {AdminLayout} from '../../components/elements/AdminLayout'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street-HCM City',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '6',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'actions',
    key: 'action',
    render: () => (
      <>
        <Space size={'middle'}>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      </>
    )
  },
]

export const OfferManagePage: React.FC = () => {
  return (
    <AdminLayout itemType="offer" searchText="Search for offers" tableHeading="Offer management">
      <Table columns={columns} dataSource={dataSource}/>
    </AdminLayout>
  )
}