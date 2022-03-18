import React, {ReactElement} from 'react'
import {Divider, Input, Space, Typography, Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {CommonLayout} from '../modules/ComonLayout'

type AdminLayoutProps = {
  searchText: string
  tableHeading: string
  itemType: 'offer' | 'ticket' | 'user'
}

const {Title} = Typography
const {Search} = Input

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  tableHeading,
  searchText,
  itemType
}): ReactElement => {
  return <CommonLayout isAdmin>
    <Spacing>
      <Title style={{color: '#334c9f'}} level={2}>{searchText}</Title>
      <Space>
        <Search style={{minWidth: 600}} size="large" allowClear placeholder="Input search text" enterButton/>
        <Button type="primary" size="large"
          icon={<PlusOutlined style={{fontSize: 18}}/>}>Add {itemType}</Button>
      </Space>
      <Divider/>
      <Title level={4}>{tableHeading}</Title>
      {children}
    </Spacing>
  </CommonLayout>
}

const Spacing = styled.div`
  padding: 4rem 5%;
`