import React from 'react'
import {Space, Table, Typography} from 'antd'
import styled from 'styled-components'
import {CommonLayout} from '../../components/modules/ComonLayout'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
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

const {Title} = Typography

const AdminDashboard: React.FC = () => {
  return <CommonLayout isAdmin>
    <Spacing>
      <Title level={3}>Tickets Management</Title>
      <Table dataSource={dataSource} columns={columns}/>
      <Title level={3}>Offers Management</Title>
      <Table dataSource={dataSource} columns={columns}/>
      <Title level={3}>Users Management</Title>
      <Table dataSource={dataSource} columns={columns}/>
    </Spacing>
  </CommonLayout>
}
export default AdminDashboard

export const Spacing = styled.div`
  padding: 4rem 5%;
`